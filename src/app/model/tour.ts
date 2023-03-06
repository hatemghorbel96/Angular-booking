import { Activity } from "./activity";
import { FileHandleTour } from "./file-handle-tour";
import { Hotel } from "./hotel";
import { Vol } from "./vol";

export class Tour {
    idTour!:number;
    tourdays!:number;
    tourname!:string;
    description!:string;
    tourMontant!:number;
    info!:string;
    vols!:Vol[];
    hotel!: Hotel;
    tourImages : FileHandleTour[]= [];
    activitys! :Activity[];
}
