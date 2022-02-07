import { IKafkaRepository } from "../../repositories/interfaces/IKafkaRepository";
import api from 'axios';
import { IAPIStackOutDTO } from './IAPIStackOutDTO';
import { IDataUserDTO } from './IDataUserDTO';
import { Producer } from "kafkajs";

class IPStackUseCase {
    constructor(private IKafkaRepository: IKafkaRepository) { }

    async execute(id: number, ip: string, time: number) {
        const url = `http://api.ipstack.com/${ip}?access_key=${process.env.ACCESS_KEY}`;
        const { data: dateAPIStack } = await api.get<IAPIStackOutDTO>(url);
        const dataUser: IDataUserDTO = { id, ip, time };
        const response = this.IKafkaRepository.producer(dateAPIStack, dataUser);
        return response;
    }
}

export { IPStackUseCase }