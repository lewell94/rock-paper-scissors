import { Injectable } from "@angular/core";
import { Choice } from "../models/choice.enum";

@Injectable({
    providedIn: 'root'
})
export class CpuService {

    getRandomChoice() {
        const choices= [Choice.ROCK, Choice.PAPER, Choice.SCISSORS];

        return choices[Math.floor(Math.random() * (3))];
    }
}