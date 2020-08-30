import { Component, EventEmitter, Input, OnChanges, OnInit, 
    Output,ComponentFactoryResolver,Compiler,ChangeDetectorRef } from '@angular/core';
//import {ActivatedRoute} from '@angular/router'
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Field,Form } from '../model/field-interface';
import {} from '@muyarchitech/muyarchi-form'

@Component({
  exportAs: 'dynamicForm',
  selector: 'dynamic-form',
  styleUrls: [],
  template: `
    <form
      class="dynamic-form"
      [formGroup]="form"
      (submit)="handleSubmit($event)">
      <ng-container
        *ngFor="let field of config;"
        dynamicField
        [config]="field"
        [group]="form">
      </ng-container>
    </form>
  `
})
export class DynamicFormComponent implements OnChanges, OnInit {
  @Input()
  config: Form;

  @Output()
  submit: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  formCustomEvents: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  componentInstance = [];

  form: FormGroup;
  componentFactoryInstance = {};

  get fieldConfigs() { return this.config.field; }
  get changes() { return this.form.valueChanges; }
  get valid() { return this.form.valid; }
  get value() { return this.form.value; }

  constructor(private fb: FormBuilder,
    private resolver: ComponentFactoryResolver,
    private compiler: Compiler,
    //private route: ActivatedRoute,
    private _changeDetectorRef: ChangeDetectorRef) {}

    ngOnInit() {
        
        this.form = this.createGroup();
        this.createComponentFactoryReference();
        this.formCustomEvents.emit({ 'type': 'FORM_CREATED', 'id': this.form });
    }

    createComponentFactoryReference() {
        // const factory = this.resolver.resolveComponentFactory(this.route.component as Type<any>);
        // // Access the private ngModule property.
        // const ngModuleRef: NgModuleRef<any> = (factory as any).ngModule;
        
        this.resolver['_factories'].forEach((element, reference) => {
          if (element && element.selector && reference) {
            this.componentFactoryInstance[element.selector] = reference;
          }
        });
    }

    createGroup() {
        const group = this.fb.group({});
        this.fieldConfigs.forEach(control => group.addControl(control.name, this.createControl(control)));
        return group;
    }

    createControl(config: Field) {
        const { disabled, validation, value } = config, validator = [];
        if (validation) {
            if (validation.required) {
              validator.push(Validators.required);
            }
          }
          return this.fb.control({ disabled, value }, validator); // validation
    }

    ngOnChanges() {
        if (this.form) {
          const controls = Object.keys(this.form.controls);
          const configControls = this.fieldConfigs.map((item) => item.name);
    
          controls
            .filter((control) => !configControls.includes(control))
            .forEach((control) => this.form.removeControl(control));
    
          configControls
            .filter((control) => !controls.includes(control))
            .forEach((name) => {
              const config = this.config.field.find((control) => control.name === name);
              this.form.addControl(name, this.createControl(config));
            });
    
        }
      }

      handleSubmit(event: Event) {
        event.preventDefault();
        event.stopPropagation();
        this.submit.emit(this.value);
      }
}
