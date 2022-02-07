import { IAPIStackOutDTO } from "../../UseCases/DataClientOutPut/IAPIStackOutDTO";
import { IDataUserDTO } from "../../UseCases/DataClientOutPut/IDataUserDTO";
import { IKafkaRepository } from '../interfaces/IKafkaRepository';

export class KafkaStreamRepository implements IKafkaRepository {

    async producer(dateAPIStack: IAPIStackOutDTO, dateUser: IDataUserDTO) {

    }
}
