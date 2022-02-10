import { KafkaStream } from "../../KafkaStream/implementations/KafkaStream";
import { IPStackController } from "./IPStackController";
import { IPStackUseCase } from "./IPStackUseCase";

const kafkaStream = new KafkaStream();
const ipStackUseCase = new IPStackUseCase(kafkaStream);
const ipStackController = new IPStackController(ipStackUseCase);

export { ipStackUseCase, ipStackController }