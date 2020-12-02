import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-item-from',
  templateUrl: './add-item-from.component.html',
  styleUrls: ['./add-item-from.component.scss']
})
export class AddItemFromComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(from : NgForm){
    console.log(from);
  }
}
