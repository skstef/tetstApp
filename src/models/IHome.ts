import { LIVING_TYPE } from "./LIVING_TYPE";

export interface IHome {
    id: string;
    title: string;
    address: string;
    type: LIVING_TYPE;
    price: number;
}
