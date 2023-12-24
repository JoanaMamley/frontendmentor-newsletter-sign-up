import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent {
  @Output() dismissEvent = new EventEmitter<boolean>();

  dismissMessage(){
    this.dismissEvent.emit(false)
  }
}
