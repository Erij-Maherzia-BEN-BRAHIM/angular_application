import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-microsoft-word',
  templateUrl: './microsoft-word.component.html',
  styleUrls: ['./microsoft-word.component.css']
})
export class MicrosoftWordComponent implements OnInit {
  
  bgColor ;
  color;
  size;
   font;
  constructor() { }

  ngOnInit(): void {
  }

}
