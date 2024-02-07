import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'forms2';

  public footerStyle = 'fixed-footer'
  public bgColor = 'bgColor'
  public isDisable = 'false'
  public textPos = 'h4'

  public HeaderClass = {
    'fixed-footer': this.isDisable,
    'bgColor': this.isDisable,
    'h4': this.isDisable
  }
}
