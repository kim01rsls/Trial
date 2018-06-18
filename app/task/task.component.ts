import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  title1 = 'Magic Number';
  title2 = 'Pair Sum';

  lifebar : boolean = true;
  result : boolean = false;
  resultMagic : boolean = false;
  lesser : boolean = false;
  greater : boolean = false;
  btnShow : boolean = true;
  error: boolean = false;
  noLife : boolean = false;
  numberGuess : any;
  inputGuess : string;
  numOld = Math.floor(Math.random() * (100 - 0 + 1) + 0);
  life = 5;

  hidden : boolean = false;
  inputNum : '';
  numFind : number;
  inputArr : number[];

  constructor() { }

  ngOnInit() {
    console.log(this.numOld);
  }

  splitInput() {
    this.inputArr = (this.inputNum.split(' ').map(Number)).sort(function(a, b){return a-b});;
  }

  check1(){
    let numCount = this.life;
      if (this.numberGuess){
        this.error = false;
        
        if(this.life == 0){
          this.zeroLife();
        }
        else{
          if (this.numberGuess > this.numOld){
            this.life --;
            this.greaterThan();
          }
          else if (this.numberGuess < this.numOld){
            this.life --;
            this.lesserThan();
          }
          else if (this.numberGuess == this.numOld){
            this.resultMagic = true;
            this.resultFinish();
          }
        }
    }
    else {
      this.error = true;
    }
  }

  check2(){
    this.hidden = true;
    let firstIndex = 0;
    let lastIndex = this.inputArr.length-1;
    
    while(this.inputArr.length != 1) {
      let numFirst = this.inputArr[firstIndex];
      let numLast = this.inputArr[lastIndex];
      let numDiff = numFirst + numLast;

      if(lastIndex == firstIndex){
        this.result = false;
        break;
      }
      else if(numDiff == this.numFind){
        this.result = true;
        break;
      }
      else if(this.numFind > numDiff) {
        firstIndex += 1;
      }
      else if(numLast >= numDiff){
        lastIndex -= 1;
      }
      else if(numDiff != this.numFind){
          lastIndex -= 1;
      }
    }
  }

  restart(){
    this.numOld = Math.floor(Math.random() * (100 - 0 + 1) + 0);
    console.log(this.numOld);
    this.restartGame();
  }
  
  private restartGame() {
    this.numberGuess = "";
    this.life = 5;
    this.lifebar = true;
    this.lesser = false;
    this.greater = false;
    this.result = false;
    this.error = false;
    this.noLife = false;
    this.btnShow = true;
  }

  private zeroLife() {
    this.noLife = true;
    this.btnShow = false;
    this.greater = false;
    this.lesser = false;
    this.life = 0;
  }

  private greaterThan() {
    this.greater = true;
    this.lesser = false;
  }

  private lesserThan() {
    this.lesser = true;
    this.greater = false;
  }

  private resultFinish() {
    this.lifebar = false;
    this.btnShow = false;
    this.lesser = false;
    this.greater = false;
  }

}
