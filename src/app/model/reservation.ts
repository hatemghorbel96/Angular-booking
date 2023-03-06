import { Persone } from "./persone";
import { User } from "./user";
import { Vol } from "./vol";

export class Reservation {
    id!:number;
    nb!:number;
    montantTotal!:number;
    user!:User;
    extra!:number;
    couponon!:number;
    nbrooms!:number;
    montantExtraRoom!:number
    dateCreated!:Date
    vol!:Vol;
    checkin!:Date;
    checkout!:Date;
    persones:Persone[] = [{
        titre:'',
        firstname:'',
        lastname:'',
        datebirth:'',
        nationality:'',
        passport:0,
        country:'',
        passworddateout:'',
      }]
    }
    