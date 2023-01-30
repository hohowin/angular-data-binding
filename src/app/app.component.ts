import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-data-binding';
  currentBeverage: string = "coffee";
  beverages = ['milk', 'tea', 'coffee', 'juice'];

  addBeverage(newBeverage: string) {
    this.beverages.push(newBeverage);
    this.clearInput();
  }

  clearInput() {
    let input = <HTMLInputElement>document.getElementById('beverage-input');
    input.value = '';
  }
}
