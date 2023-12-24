import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  success = false;

  onSubmitEvent(data: boolean){
    this.success = data;
  }
}
