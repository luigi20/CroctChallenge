import { KafkaStreamRepository } from "../../repositories/implementations/KafkaStreamRepository";
import { IPStackController } from "./IPStackController";
import { IPStackUseCase } from "./IPStackUseCase";

const kafkaStreamRepository = new KafkaStreamRepository();
const ipStackUseCase = new IPStackUseCase(kafkaStreamRepository);
const ipStackController = new IPStackController(ipStackUseCase);

export { ipStackUseCase, ipStackController }