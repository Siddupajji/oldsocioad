import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmailserviceService } from '../emailservice.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private em: EmailserviceService) { }
  socioform = new FormGroup({
      uname: new FormControl(''),
      email: new FormControl(''),
      company: new FormControl(''),
      number: new FormControl(''),
      message:new FormControl('')
  })

  foods = [
    { id:1, select:true, name:"dumpling"},
    { id:2, select:true, name:"sandwitch"},
    { id:3, select:true, name:"burger"}

  ]
  do(newdata:any){
      let updatednewdata ={
        id: 4,
        select:true,
        name:newdata
      }
      this.foods.push(updatednewdata)
  }



 onSubmit(){
   const companydata = this.socioform.value
   this.em.mypostemailrequrest('http://localhost:9000/sendMail', companydata).subscribe(data =>{
     let res:any = data
   })
   this.socioform.reset()
 }
  ngOnInit(): void {
  }

}
