import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
import { FormInputComponent } from './form-input/form-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFieldDirective } from './dynamic-field/dynamic-field.directive';
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';

@NgModule({
  imports: [CommonModule,FormsModule, ReactiveFormsModule],
  declarations: [TopNavComponent, FormInputComponent,  DynamicFieldDirective,DynamicFormComponent],
  exports: [TopNavComponent, FormInputComponent,DynamicFormComponent],
  entryComponents: [FormInputComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MuyarchiFormModule {}
