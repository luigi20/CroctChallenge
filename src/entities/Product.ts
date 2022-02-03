import { v4 as uuidv4 } from 'uuid';

export class Product {
    public readonly id: string;
    public item: string;
    public preco: number;

    constructor(props: Omit<Product, 'id'>, id?: string) {
        if (!id) {
            this.id = uuidv4();
        }
        Object.assign(this, props);

    }
}