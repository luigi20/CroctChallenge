import { IAPIStackOutDTO } from "../../UseCases/DataClientOutPut/IAPIStackOutDTO";
import { IDateUserDTO } from "../../UseCases/DataClientOutPut/IDateUserDTO";
import { IKafkaStreamRepository } from '../interfaces/IKafkaStreamRepository';

export class KafkaStreamRepository implements IKafkaStreamRepository {

    async transform(dateAPIStack: IAPIStackOutDTO, dateUser: IDateUserDTO) {

        console.log(dateAPIStack, dateUser);
    }

}