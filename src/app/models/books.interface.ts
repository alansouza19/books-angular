import { StatusBooks } from "./enums/StatusBooks.enum";

export interface IBooks{
    id?:number;
    title:string;
    author:string;
    enumStatus?:StatusBooks;
}