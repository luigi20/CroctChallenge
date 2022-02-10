import { KafkaStream } from '../../KafkaStream/implementations/KafkaStream';
import { IPStackUseCase } from './IPStackUseCase';
import { IDataUserDTO } from './IDataUserDTO';

describe("Retorno de dados para o usuário", () => {
  let kafkaStream: KafkaStream;
  let ipStackUseCase: IPStackUseCase;

  beforeAll(() => {
    kafkaStream = new KafkaStream();
    ipStackUseCase = new IPStackUseCase(kafkaStream);
  })
  it("Deve ser possível ter um retorno dos dados da API junto com alguns dados do usuário", async () => {

    const dataUser: IDataUserDTO = {
      id: 1,
      ip: "172.145.34.2",
      time: 5545442
    }
    const response = await ipStackUseCase.execute(dataUser);
    expect(response).toHaveProperty("ip");
  });
});