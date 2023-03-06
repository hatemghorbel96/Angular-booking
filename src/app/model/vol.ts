import { Tour } from 'src/app/model/tour';
import { Airline } from "./airline";
import { Reservation } from "./reservation";
import { User } from "./user";

export class Vol {
    idVol!:number;
    volFrom!:string;
    volTo!:string;
    dep!: Date;
    fin!: Date;
    retour!:Date;
    retourhome!:Date;
    photo!:string;
    classtype!:string;
    nbp!:number;
    nbr!:number;
    stops!:string;
    airline!: Airline;
    montant!:number;
    reservations!:Reservation[]
    tour!:Tour
    refundable!:number
    
}
