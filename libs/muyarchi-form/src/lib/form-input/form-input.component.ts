import { Component, OnInit, Input,ViewChild,EventEmitter,ElementRef, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'muyarchitech-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {
  @Input()
  config: any;
  @Input()
  group: FormGroup;
  @ViewChild('domInput', { static: false }) domInput: ElementRef;
  @Output() changeEvent = new EventEmitter();

  constructor() { 

  }

  ngOnInit(): void {
    console.log(this.config);
    console.log(this.group);
  }

  change(e: any) {
    this.config.value = e.target.value;
    let lblvalue = this.domInput.nativeElement.value;
    console.log(lblvalue);
    this.changeEvent.emit({ val: lblvalue, instance: this });
    //console.log(this);
  }
}
