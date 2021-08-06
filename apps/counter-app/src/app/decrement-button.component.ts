import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-decrement-button',
  templateUrl: './decrement-button.component.html',
  styleUrls: ['./decrement-button.component.scss'],
})
export class DecrementButtonComponent {
  constructor(private counterService: CounterService) {}

  decrement() {
    this.counterService.decrement();
  }
}
