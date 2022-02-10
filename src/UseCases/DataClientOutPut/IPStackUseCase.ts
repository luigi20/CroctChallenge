import { IKafkaStream } from "../../KafkaStream/interfaces/IKafkaStream";
import api from 'axios';
import { IAPIStackOutDTO } from './IAPIStackOutDTO';
import { IDataUserDTO } from './IDataUserDTO';

class IPStackUseCase {
  constructor(private iKafkaStream: IKafkaStream) { }

  async execute({ id, ip, time }: IDataUserDTO) {
    const url = `http://api.ipstack.com/${ip}?access_key=${process.env.ACCESS_KEY}`;
    const { data: dateAPIStack } = await api.get<IAPIStackOutDTO>(url);
    console.log(dateAPIStack);
    if (!dateAPIStack.ip) {
      throw new Error("Erro ao Consultar o IP");
    }
    const dataUser: IDataUserDTO = { id, ip, time };
    const response = await this.iKafkaStream.stream(dateAPIStack, dataUser);
    return response;
  }
}

export { IPStackUseCase }