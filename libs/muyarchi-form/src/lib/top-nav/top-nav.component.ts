import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'muyarchitech-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  topNav: FormGroup;
  @Input()
  title: any;
  @Input()
  menuitems: any;

  constructor() { 

  }

  ngOnInit(): void {
    console.log(this.menuitems);
  }
}
