import { Component, EventEmitter, NgModule, Output, output } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-component',
  standalone: true,
  imports: [MatInputModule,MatButtonModule,CommonModule,FormsModule,RouterLink],
  templateUrl: './search-component.component.html',
  styleUrl: './search-component.component.scss'
})

export class SearchComponentComponent {
  @Output() search = new EventEmitter<string>();


  text = "";
  OnSearch(){
    console.log("Search on Called");
    this.search.emit(this.text);
  }

  InputSearchChange(event:any){
    console.log("Input Search Change Called",event.target.value);
    this.text = event.target.value;
  }

  onTyping(event:any){
    console.log("On Typing Called",this.text);  
  }
}
