import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  @Input() count: number;
  @Output() incremented = new EventEmitter<void>();
  @Output() decremented = new EventEmitter<void>();
  @Output() reseted = new EventEmitter<void>();

  increment() {
    this.incremented.emit();
  }

  decrement() {
    this.decremented.emit();
  }

  reset() {
    this.reseted.emit();
  }
}
