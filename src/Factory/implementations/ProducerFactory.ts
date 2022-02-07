import { Kafka, logCreator, logLevel, Message, Producer, ProducerBatch, TopicMessages } from 'kafkajs';
import { IAPIDataOutDTO } from '../../UseCases/DataClientOutPut/IAPIDataOutDTO';
import { IProducerFactory } from '../interfaces/IProducerFactory';

class ProducerFactory implements IProducerFactory {
    private producer: Producer;

    constructor() {
        this.producer = this.createProducer();
    }

    private createProducer(): Producer {
        const kafka = new Kafka({
            clientId: 'producer-client',
            brokers: ['localhost:9092']
        })
        return kafka.producer();
    }

    async startProducer(): Promise<void> {
        try {
            await this.producer.connect();
        } catch (err) {
            console.log('Error connecting the producer: ', err);
        }
    }

    async shutdown(): Promise<void> {
        await this.producer.disconnect();
    }

    async sendBatch(messages: Array<IAPIDataOutDTO>): Promise<void> {

        const kafkaMessages: Array<Message> = messages.map((message) => {
            return {
                value: JSON.stringify(message)
            }
        })
        const topicMessages: TopicMessages = {
            topic: 'producer-userData',
            messages: kafkaMessages
        }
        const batch: ProducerBatch = {
            topicMessages: [topicMessages]
        }
        await this.producer.sendBatch(batch);
    }
}

export { ProducerFactory };