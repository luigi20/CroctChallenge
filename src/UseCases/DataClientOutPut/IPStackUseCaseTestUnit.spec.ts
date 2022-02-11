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

  it("Não deve ser possível ter um retorno dos dados da API junto com dados do usuário e da API", async () => {
    const dataUser: IDataUserDTO = {
      id: 1,
      ip: "172.145.34.2",
      time: 5545442
    }

    await expect(ipStackUseCase.execute(dataUser)).rejects.toEqual(
      new Error("Erro ao Consultar o IP")
    );
  });

  it("Deve ser possível ter um retorno dos dados da API junto com dados do usuário e da API", async () => {
    const dataUser: IDataUserDTO = {
      id: 1,
      ip: "172.145.34.2",
      time: 5545442
    }
    const response = ipStackUseCase.execute(dataUser);
    expect(response).toHaveProperty("id");
    expect(response).toHaveProperty("timestamp");
    expect(response).toHaveProperty("ip");
    expect(response).toHaveProperty("latitude");
    expect(response).toHaveProperty("longitude");
    expect(response).toHaveProperty("country");
    expect(response).toHaveProperty("region");
    expect(response).toHaveProperty("city");
  });
});