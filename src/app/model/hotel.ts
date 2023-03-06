import { FileHandleHotel } from "./file-handle-hotel";
import { Review } from "./review";
import { Tour } from "./tour";

export class Hotel {
    idHotel!:number;
    namehotel!:string;
    city!:string;
    stars!:number;
    hotellocation!:any;
    activite!:string;
    nbrooms!:number;
    pricenight!:number;
    tours!:Tour[]
    hotelImages : FileHandleHotel[]= [];
    reviews!:Review[];
}
