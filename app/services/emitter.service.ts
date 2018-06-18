import { EventEmitter } from "@angular/core";

export class EmitterService {

    public static clearInput: EventEmitter<boolean> = new EventEmitter<boolean>();
}