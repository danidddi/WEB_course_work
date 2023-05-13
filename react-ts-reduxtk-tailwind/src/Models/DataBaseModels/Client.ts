import { ICar } from "./Car";
import { IPeople } from "./People";
import { IService } from "./Service";

export interface IClient {
    Id: number,
    Person: IPeople,
    Car: ICar,

    // факты обслуживания в которых участвовал клиент
    // используется на странице с детальной информацией о клиенте
    Services: IService[] | null
}