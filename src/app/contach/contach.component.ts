import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-contach',
  templateUrl: './contach.component.html',
  styleUrls: ['./contach.component.css']
})
export class ContachComponent implements OnInit {

  messageForm:FormGroup;
  submitted=false;
  success=false;
  constructor(private formBuilder:FormBuilder) {
    this.messageForm=this.formBuilder.group({

      name:['',Validators.required],
      message:['',Validators.required]

    })
    
   }


   OnSubmit(){
     this.submitted=true;

     if(this.messageForm.invalid){
       return;
     }

     this.success=true;
   }

  ngOnInit() {
  }

}
