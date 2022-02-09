import { ConsumerFactory } from "../../Factory/implementations/ConsumerFactory";
import { ProducerFactory } from "../../Factory/implementations/ProducerFactory";
import { IAPIDataOutDTO } from "../../UseCases/DataClientOutPut/IAPIDataOutDTO";
import { IAPIStackOutDTO } from "../../UseCases/DataClientOutPut/IAPIStackOutDTO";
import { IDataUserDTO } from "../../UseCases/DataClientOutPut/IDataUserDTO";
import { IKafkaRepository } from '../interfaces/IKafkaRepository';

export class KafkaStreamRepository implements IKafkaRepository {

  async stream(dataAPIStack: IAPIStackOutDTO, dataUser: IDataUserDTO) {
    const kafkaProducer = new ProducerFactory();
    const kafkaConsumer = new ConsumerFactory();
    const dataAPIOutUser: IAPIDataOutDTO = {
      id: dataUser.id,
      ip: dataUser.ip,
      timestamp: dataUser.time,
      latitude: dataAPIStack.latitude,
      longitude: dataAPIStack.longitude,
      country: dataAPIStack.country_name,
      region: dataAPIStack.region_name,
      city: dataAPIStack.city
    };
    await kafkaProducer.sendBatch([dataAPIOutUser]);
    await kafkaConsumer.startConsumer();
  }


  async consumer() {
    const kafkaConsumer = new ConsumerFactory();
    await kafkaConsumer.startConsumer();
  }
}
