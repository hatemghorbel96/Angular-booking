import { Hotel } from "./hotel";
import { Replay } from "./replay";
import { User } from "./user";

export class Review {
    idReview!: number;
    rating!: number;
    content!:string;
    dateCreation!:Date;
    UpdatedAt!:Date;
    user!:User;
    hotel!:Hotel;
    idrev!:number;
    replays!:Replay[];
}
