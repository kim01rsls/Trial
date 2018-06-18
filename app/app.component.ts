import { Component } from '@angular/core';
import { EmitterService } from "./services/emitter.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Magic Number';
  title2 = 'Pair Sum';

  clearAllInput() {
    EmitterService.clearInput.emit(true);
  }
}