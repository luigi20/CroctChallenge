export interface IConsumerFactory {

    startConsumer(): Promise<void>;
    startBatchConsumer(): Promise<void>;
    shutdown(): Promise<void>;
    // consumer(dateAPIStack: IAPIStackOutDTO, dateUser: IDateUserDTO, producer: Producer);
}