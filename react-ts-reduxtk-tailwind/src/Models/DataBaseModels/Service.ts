import { IClient } from "./Client";
import { IDefect } from "./Defect";
import { IWorker } from "./Worker";

export interface IService {
    Id: number,
    Client: IClient,
    Worker: IWorker | null,
    Defect: IDefect,
    DateAcceptance: Date | null,
    DateIssuance: Date | null,
    Outlay: number,
    Pay: number,
    Comments: string | null,
}