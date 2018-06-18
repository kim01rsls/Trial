import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmitterService } from "../services/emitter.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-part-sum',
  templateUrl: './part-sum.component.html',
  styleUrls: ['./part-sum.component.css']
})
export class PartSumComponent implements OnInit, OnDestroy {
  result: string;
  inputNum: string;
  numFind: number;
  inputArr: number[];
  clearInputSubscription: Subscription;
  numbersInput: HTMLInputElement;
  sumOfNumbers: HTMLInputElement;

  constructor() { }

  ngOnInit() {
    this.numbersInput = (<HTMLInputElement>document.getElementById('inputNumbers'));
    this.sumOfNumbers = (<HTMLInputElement>document.getElementById('inputSum'));
    this.clearInputSubscription = EmitterService.clearInput.subscribe((result) => {
      this.clearInput();
    });
  }

  check() {
    if (this.inputNum == undefined || this.numFind == undefined) {
      this.result = 'Error no Input!';
    }
    else {
      this.inputArr = (this.inputNum.split(',').map(Number)).sort(function (a, b) { return a - b });
      let firstIndex = 0;
      let lastIndex = this.inputArr.length - 1;

      if (this.inputArr.length == 1) {
        this.result = "Please input numbers properly!"
        this.errorInput();
      }

      while (this.inputArr.length != 1) {
        let numFirst = this.inputArr[firstIndex];
        let numLast = this.inputArr[lastIndex];
        let numDiff = numFirst + numLast;

        if (lastIndex == firstIndex) {
          this.result = "No!"
          break;
        }
        else if (numDiff == this.numFind) {
          this.result = "Yes!"
          break;
        }
        else if (this.numFind > numDiff) {
          firstIndex += 1;
        }
        else if (numLast >= numDiff) {
          lastIndex -= 1;
        }
        else if (numDiff != this.numFind) {
          lastIndex -= 1;
        }
      }
    }

  }

  clearInput() {
    this.result = "";
    this.inputNum = undefined; 
    this.numFind = undefined;
    this.errorInput();
  }

  errorInput() {
    this.numbersInput.value = "";
    this.sumOfNumbers.value = "";
    this.numFind = undefined;
  }

  ngOnDestroy() {
    this.clearInputSubscription.unsubscribe();
  }

}
