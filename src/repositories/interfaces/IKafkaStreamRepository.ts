import { IAPIStackOutDTO } from "../../UseCases/DataClientOutPut/IAPIStackOutDTO";
import { IDateUserDTO } from "../../UseCases/DataClientOutPut/IDateUserDTO";

export interface IKafkaStreamRepository {

    transform(dateAPIStack: IAPIStackOutDTO, dateUser: IDateUserDTO);

}