import { Producer } from "kafkajs";
import { IAPIStackOutDTO } from "../../UseCases/DataClientOutPut/IAPIStackOutDTO";
import { IDataUserDTO } from "../../UseCases/DataClientOutPut/IDataUserDTO";

export interface IKafkaRepository {

    producer(dateAPIStack: IAPIStackOutDTO, dateUser: IDataUserDTO);
    // consumer(dateAPIStack: IAPIStackOutDTO, dateUser: IDateUserDTO, producer: Producer);
}