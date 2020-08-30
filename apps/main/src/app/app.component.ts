import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Form } from '@muyarchitech/muyarchi-form';
@Component({
  selector: 'muyarchitech-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'main';
  menuitems : any;
  configforminput : any;
  configforminput1: any;
  configforminput2: any;
  configforminput3: any;
  configforminput4: any;
  configforminput5: any;
  configforminputUserName : any;
  configforminputPassword: any;
  configforminputRepeatPassword: any;
  mregistrationForm: FormGroup;
  constructor() {

  }

  ngOnInit() {
    this.menuitems = [
      {
        "title" : "Our Works",
        "href" : "https://www.google.com",
        "order": "1",
        "icon": "fa fa-fw fa-search",
      },
      {
        "title" : "About Us",
        "href" : "https://in.yahoo.com",
        "order": "1",
        "icon": "fa fa-fw fa-user",
      }
    ];

    // this.configforminput = {
    //   "prefix" : "UserName",
    //   "readonly" : false
    // };
    // this.configforminput1 = {
    //   "suffix" : "UserName",
    //   "readonly" : false
    // }
    // this.configforminput2 = {
    //   "suffix" : "UserName",
    //   "readonly" : true
    // }
    // this.configforminput3 = {
    //   "prefix" : "UserName",
    //   "readonly" : true
    // };

    this.configforminput = {
      "type": "text",
      "label" : "UserName",
      "labelPosition" : "prefix",
      "readonly" : false
    };
    this.configforminput1 = {
      "type": "password",
      "label" : "Password",
      "labelPosition" : "suffix",
      "readonly" : false
    }
    this.configforminput2 = {
      "label" : "UserName",
      "labelPosition" : "prefix",
      "readonly" : true
    }
    this.configforminput3 = {
      "label" : "UserName",
      "labelPosition" : "suffix",
      "readonly" : true
    };
    this.configforminput4 = {
      "type": "textarea",
      "label" : "Comments",
      "labelPosition" : "prefix",
      "readonly" : false
    };
    this.configforminput5 = {
      "type": "textarea",
      "label" : "Comments",
      "labelPosition" : "suffix",
      "readonly" : true
    };



    this.configforminputUserName = {
      "group": "mregistrationForm",
      "name": "email",
      "formcontrolname": "email",
      "type": "text",
      "label" : "Email",
      "labelPosition" : "prefix",
      "readonly" : false,
      "class": "col-md-4 yellow"
    };

    this.configforminputPassword = {
      "group": "emailgroup",
      "name": "password",
      "formcontrolname": "password",
      "type": "password",
      "label" : "Password",
      "labelPosition" : "prefix",
      "readonly" : false,
      "class": "col-md-4"
    }

    this.configforminputRepeatPassword = {
      "group": "repeatpasswordgroup",
      "name": "repeatpassword",
      "formcontrolname": "repeatpassword",
      "type": "password",
      "label" : "Retype Password",
      "labelPosition" : "prefix",
      "readonly" : false,
      "class": "col-md-4 yellow"
    }

    this.mregistrationForm = new FormGroup ({
      email: new FormControl() ,
      password: new FormControl(),
      repeatpassword: new FormControl()
    });
    
    // this.mregistrationForm = new FormGroup ({
    //   emailgroup: new FormGroup({ email: new FormControl() }) ,
    //   passwordgroup: new FormGroup({ password: new FormControl()}),
    //   repeatpasswordgroup: new FormGroup({ repeatpassword: new FormControl() })
    // });
  }

  onmSubmit(): void {
    console.log(this.mregistrationForm.value);
  }

  ngOnChanges(e) {
    console.log('ngChnagr',e);
  }

  emailChange(e) {
    console.log('emailChange',e);
  }

  componentInstance: any = [];
  config: Form = {
    'name': 'ui-components',
    'field': [
      {
        "type": "muyarchitech-form-input",
        "name": "password",
        "label": "test",
      }
    ]
  }

  formCustomEvents(actions: any) {
    console.log(actions);
  }
}
