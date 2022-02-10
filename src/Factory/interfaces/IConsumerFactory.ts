export interface IConsumerFactory {

  startConsumer(): Promise<string>;
  startBatchConsumer(): Promise<void>;
  shutdown(): Promise<void>;
}