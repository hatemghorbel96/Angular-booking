import { User } from "./user";
import { Vol } from "./vol";

export class ResDTO {
    id!: number;
    nb!: number;
    montantTotal!: number;
    user!: User;
    extra!: number;
    couponon!: number;
    nbrooms!: number;
    montantExtraRoom!: number
    dateCreated!: Date
    vol!: Vol;
    checkin!: Date;
    checkout!: Date;
}
