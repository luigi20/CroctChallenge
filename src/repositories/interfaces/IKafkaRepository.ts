import { Producer } from "kafkajs";
import { IAPIStackOutDTO } from "../../UseCases/DataClientOutPut/IAPIStackOutDTO";
import { IDataUserDTO } from "../../UseCases/DataClientOutPut/IDataUserDTO";

export interface IKafkaRepository {
  stream(dateAPIStack: IAPIStackOutDTO, dateUser: IDataUserDTO);
}