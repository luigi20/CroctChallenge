import { IKafkaStreamRepository } from "../../repositories/interfaces/IKafkaStreamRepository";
import api from 'axios';
import { IAPIStackOutDTO } from './IAPIStackOutDTO';
import { IDateUserDTO } from './IDateUserDTO';

class IPStackUseCase {
    constructor(private kafkaStreamRepository: IKafkaStreamRepository) { }

    async execute(id: number, ip: string, time: number) {
        const url = `http://api.ipstack.com/${ip}?access_key=${process.env.ACCESS_KEY}`;
        const { data: dateAPIStack } = await api.get<IAPIStackOutDTO>(url);
        const dataUser: IDateUserDTO = { id, ip, time };
        const response = this.kafkaStreamRepository.transform(dateAPIStack, dataUser);
        return response;
    }
}

export { IPStackUseCase }