import { app } from '../../app';
import request from 'supertest';

describe("Criar IPStack Controller", () => {
    it("Não Deve ser capaz de retornar dados de usuário", async () => {
        const response = await request(app).post("/output").send({
            "id": 1,
            "time": 5545442,
            "ip": "172.145.34.2",
        });
        expect(response.status).toBe(400);
    });
    it("Deve ser capaz de retornar dados de usuário", async () => {
        const response = await request(app).post("/output").send({
            "id": 1,
            "time": 5545442,
            "ip": "172.145.34.2",
        });
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("id");
        expect(response.body).toHaveProperty("timestamp");
        expect(response.body).toHaveProperty("ip");
        expect(response.body).toHaveProperty("latitude");
        expect(response.body).toHaveProperty("longitude");
        expect(response.body).toHaveProperty("country");
        expect(response.body).toHaveProperty("region");
        expect(response.body).toHaveProperty("city");
    });
});