import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-increment-button',
  templateUrl: './increment-button.component.html',
  styleUrls: ['./increment-button.component.scss'],
})
export class IncrementButtonComponent {
  constructor(private counterService: CounterService) {}

  increment() {
    this.counterService.increment();
  }
}
