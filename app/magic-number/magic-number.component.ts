import { Component, OnInit, NgZone } from '@angular/core';
import { EmitterService } from "../services/emitter.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-magic-number',
  templateUrl: './magic-number.component.html',
  styleUrls: ['./magic-number.component.css']
})

export class MagicNumberComponent implements OnInit {
  numberGuess: number;
  inputGuess: string;
  numOld: number;
  life: number;
  resultMessage: string;
  clearInputSubscription: Subscription;
  numberGuessInput: HTMLInputElement;


  constructor() { }

  ngOnInit() {
    this.numberGuessInput = (<HTMLInputElement>document.getElementById('numberGuessRestart'));
    this.initiateValues();
    this.clearInputSubscription = EmitterService.clearInput.subscribe((result) => {
      this.clearInput();
    });
  }

  initiateValues() { 
    this.numOld = Math.floor(Math.random() * (100 - 0 + 1) + 0);
    this.life = 5;
    console.log(this.numOld);
  }

  check() {
    let numCount = this.life;
    if (this.numberGuess != null) {

      if (this.life == 0) {
        this.zeroLife();
      }
      else {
        if (this.numberGuess > this.numOld) {
          this.life--;
          this.greaterThan();
        }
        else if (this.numberGuess < this.numOld) {
          this.life--;
          this.lesserThan();
        }
        else if (this.numberGuess == this.numOld) {
          this.resultFinish();
        }
      }
    }
    else {
      this.errorInput();
    }
  }

  errorInput() {
    this.resultMessage = "Error no Input!"
  }

  zeroLife() {
    this.resultMessage = "You have no Life Left!";
    this.numberGuessInput.value = "";
  }

  greaterThan() {
    this.resultMessage = "Your number is Greater!";
  }

  lesserThan() {
    this.resultMessage = "Your number is Lesser!";
  }

  resultFinish() {
    this.resultMessage = "You Win!";
    this.numberGuessInput.value = "";
    this.numberGuess = undefined;
    this.life = 5;
  }

  clearInput() {
    this.numberGuessInput.value = "";
    this.resultMessage = "";
    this.numberGuess = undefined;
    this.initiateValues();
  }

  ngOnDestroy() {
    this.clearInputSubscription.unsubscribe();
  }
}
