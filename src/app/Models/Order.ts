import { MenuItem } from "./MenuItems";

export class Order{
    id: number = 0;
    table: number = 0;
    date: string = "";
    additionalInfo: string = "";
    items: MenuItem[] = [];
}