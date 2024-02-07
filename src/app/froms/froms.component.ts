import { Component } from '@angular/core';

@Component({
  selector: 'app-froms',
  templateUrl: './froms.component.html',
  styleUrls: ['./froms.component.scss']
})
export class FromsComponent {

  public formType1 = 'Template Driven Forms'
  public list1 = 'listStyle'
  public styling = 'center'
  public isApplied = true

  public StylingClass = {
    'listStyle': this.list1
  }

}
