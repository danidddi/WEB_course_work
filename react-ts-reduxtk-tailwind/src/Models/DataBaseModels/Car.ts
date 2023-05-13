import { IBrand } from "./Brand";
import { IColor } from "./Color";
import { IPeople } from "./People";

export interface ICar {
    Id: number,
    Brand: IBrand,
    Model: string,
    Color: IColor,
    ReleaseYear: number,
    Plate: string,
    Owner: IPeople,
}