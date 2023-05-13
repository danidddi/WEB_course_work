import { IPeople } from "./People";
import { IService } from "./Service";
import { ISpecialty } from "./Specialty";

export interface IWorker {
    Id: number,
    Person: IPeople,
    Specialty: ISpecialty,
    Rank: string,
    Employment: Date,

    // факты обслуживания в которых участвовал мастер
    // используется на странице с детальной информацией о мастере
    Services: IService[] | null
}