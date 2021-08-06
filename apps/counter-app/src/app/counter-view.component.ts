import { Component } from '@angular/core';
import { CounterService } from './counter.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-view',
  templateUrl: './counter-view.component.html',
  styleUrls: ['./counter-view.component.scss'],
})
export class CounterViewComponent {
  count$: Observable<number> = this.counterService.count$;

  constructor(private counterService: CounterService) {}
}
