import { IAPIDataOutDTO } from "../../UseCases/DataClientOutPut/IAPIDataOutDTO";

export interface IProducerFactory {

  startProducer(): Promise<void>;
  sendBatch(messages: Array<IAPIDataOutDTO>): Promise<void>
  shutdown(): Promise<void>;
}