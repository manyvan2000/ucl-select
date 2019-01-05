import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ucl-select';
  options = [{id:1, description:'abcd'}, 
    {id:2, description:'efgh'}, 
    {id:3, description:'ijkl'}, 
    {id:4, description:'mnop'}, 
    {id:5, description:'qrst'}, 
  ]; 
  selectedOption = this.options[2]; 
}
