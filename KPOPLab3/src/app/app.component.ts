import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num1: number | undefined;
  num2: number | undefined;
  additionResult: number | undefined;
  subtractionResult: number | undefined;
  multiplicationResult: number | undefined;

  performOperations() {
    if (this.num1 !== undefined && this.num2 !== undefined) {
      // Explicitly cast input values to numbers
      const num1Value: number = +this.num1;
      const num2Value: number = +this.num2;

      this.additionResult = num1Value + num2Value; // Addition
      this.subtractionResult = num1Value - num2Value; // Subtraction
      this.multiplicationResult = num1Value * num2Value; // Multiplication
    }
  }
  
}
