import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnChanges, OnInit, Type, ViewContainerRef, Output,EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../model/field-interface';
//import { FieldConfig } from '../model/field-config.interface';

@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements OnChanges, OnInit {
    @Input()
    config: Field;
    
    @Input()
    group: FormGroup;
   
    @Input()
    componentFactoryInstance: any;
   
    @Input()
    submitted: boolean;
   
    @Output()
    creationEvent: EventEmitter<any> = new EventEmitter<any>();

    component: any = {};
    constructor(
      private resolver: ComponentFactoryResolver,
      private container: ViewContainerRef,
    ) { }
  
    ngOnChanges() {
      if (this.component && this.component.instance) {
        this.component.instance.config = this.config;
        this.component.instance.group = this.group;
        this.component.instance.submitted = this.submitted;
        if (this.component.instance._changeDetectorRef) {
          this.component.instance._changeDetectorRef.markForCheck();
        }
      }
    }
  
    ngOnInit() {
      const component = this.componentFactoryInstance[this.config.type];
      if (component) {
        const factory = this.resolver.resolveComponentFactory<any>(component);
        this.component = this.container.createComponent(factory);
        this.component.instance.config = this.config;
        this.component.instance.group = this.group;
        this.component.instance.submitted = this.submitted;
        this.creationEvent.emit({ name: this.config.name, componentRef: this.component });
      } else {
        const supportedTypes = Object.keys(this.componentFactoryInstance).join(', ');
        throw new Error(
          `Trying to use an unsupported type (${this.config.type}).
          Supported types: ${supportedTypes}`
        );
      }
    }
  }
  
