import { Categories } from "../static/cards";
import Tag from "./tag";

export default interface Card {
    title: string,
    description: string,
    tags: Tag[],
    category: Categories,
    link: string,
} 
