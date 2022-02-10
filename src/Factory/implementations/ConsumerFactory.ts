import { Consumer, ConsumerSubscribeTopic, EachBatchPayload, Kafka, EachMessagePayload } from "kafkajs";
import { IConsumerFactory } from "../interfaces/IConsumerFactory";

class ConsumerFactory implements IConsumerFactory {
  private kafkaConsumer: Consumer;

  public constructor() {
    this.kafkaConsumer = this.createKafkaConsumer();
  }

  private createKafkaConsumer(): Consumer {
    const kafka = new Kafka({
      clientId: 'client-id',
      brokers: ['localhost:9092'],
      retry: {
        initialRetryTime: 300,
        maxRetryTime: 1800000,
        retries: 2
      }
    })
    const consumer = kafka.consumer({ groupId: 'consumer-group' })
    return consumer;
  }

  async startConsumer(): Promise<string> {
    const topic: ConsumerSubscribeTopic = {
      topic: 'producer-userData',
      fromBeginning: false
    }
    let prefix = "";
    try {
      await this.kafkaConsumer.connect();
      await this.kafkaConsumer.subscribe(topic);
      await this.kafkaConsumer.run({
        eachMessage: async (messagePayload: EachMessagePayload) => {
          const { topic, partition, message } = messagePayload;
          prefix = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`;
          console.log(`- ${prefix} ${message.key}#${message.value}`);
        }
      })
      return prefix;
    } catch (error) {
      console.log('Error: ', error);
    }

  }

  async startBatchConsumer(): Promise<void> {
    const topic: ConsumerSubscribeTopic = {
      topic: 'producer-userData',
      fromBeginning: false
    }
    try {
      await this.kafkaConsumer.connect()
      await this.kafkaConsumer.subscribe(topic)
      await this.kafkaConsumer.run({
        eachBatch: async (eatchBatchPayload: EachBatchPayload) => {
          const { batch } = eatchBatchPayload;
          const { topic, partition } = batch;
          for (const message of batch.messages) {
            const prefix = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`;
            console.log(`- ${prefix} ${message.key}#${message.value}`)
          }
        }
      })
    } catch (error) {
      console.log('Error: ', error);
    }
  }

  async shutdown(): Promise<void> {
    await this.kafkaConsumer.disconnect();
  }
}

export { ConsumerFactory };