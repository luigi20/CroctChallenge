export interface IConsumerFactory {

  startConsumer(): Promise<void>;
  startBatchConsumer(): Promise<void>;
  shutdown(): Promise<void>;
}