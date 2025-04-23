import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule], 
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  isvisible: boolean = false
 
  isActive: boolean = false

  anyOne : boolean | undefined

ngOnInit(): void {

  const localUser = localStorage.getItem('loginUser')
  if (localUser != null) {
    this.anyOne = true
  }
}


  showList() {
    this.isvisible = !this.isvisible
    this.isActive = false
  } 

  showBreed() {
    this.isActive = !this.isActive
    this.isvisible = false
  }

  @Output() headerOut = new EventEmitter<any>()

  clickToHide() {
    this.isvisible = false
    this.isActive = false
    this.headerOut.emit()
  }
}
