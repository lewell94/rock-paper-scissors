import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Choice } from "../../../shared/models/choice.enum";

@Component({
    selector: 'app-choice',
    templateUrl: './choice.component.html',
    styleUrls: ['./choice.component.scss']
})
export class ChoiceComponent {

    Choice = Choice;

    @Input() name: string | null;

    @Output() choice = new EventEmitter<Choice>();

    constructor() {
        this.name = '';
    }

    makeChoice(choice: Choice) {
        this.choice.emit(choice);
    }
}
