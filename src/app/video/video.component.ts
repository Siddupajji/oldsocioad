
import { WebComponent } from './../web/web.component';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import {
  NgbModal,
  ModalDismissReasons,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
})


export class VideoComponent implements OnInit {

  change!:HTMLInputElement
  constructor(private ngmodal: NgbModal, private fb: FormBuilder) {}

  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  isEditable = false;
  isLinear = true;
  images
  values : Array<string> = ['apple', 'banana']

  open(webcontent: any) {
    let options: NgbModalOptions = {
      size: 'md',
      centered: true,
      animation: true,

    };
    this.ngmodal.open(webcontent, options);

  }
  app(appcontent: any) {
    let options: NgbModalOptions = {
      size: 'md',
      centered: true,
      animation: true,
    };
    this.ngmodal.open(appcontent, options);
  }

  opendialog = `Construct monumental mobile solutions, from brainstorming to post-delivery support with the dedicated mobile team.`;
  appdialog = `As one of the world's largest ITService Providers, our deep pool of certified engineers and IT staff are ready to help you to keep your IT business safe & ensure high availability.`;



  ngOnInit(): void {

    this.firstFormGroup = this.fb.group({
      fname: new FormControl('', Validators.required),
      contact:new FormControl('', Validators.required),
      website:new FormControl(''),
      price:new FormControl(''),

    })



    this.secondFormGroup = this.fb.group({
      fname: new FormControl('', Validators.required),
      contact:new FormControl('', Validators.required),
      applicationType:new FormControl(''),
      price1:new FormControl('')
    })




    const languagearray: Array<string> = ['FRONTEND', 'BACKEND', 'DATABASE']
    let myimagearray: Array<string> = [`<span style = "color:black; margin-top: 45px; font-size: 25px; font-weight: 800; ">
   HTML
    </span>`, `<span style = "color:black; margin-bottom: -45px; font-size: 25px; font-weight: 800;">
   Node Js
      </span>`, `<span style = "color:black; margin-bottom: -45px; font-size: 25px; font-weight: 800; ">
     Sql
        </span>`]
    const secondimagearray: Array<string> = [`<span style = "color:black; margin-top: 45px; font-size: 25px; font-weight: 800; transition: opacity 1s">
    CSS
    </span>`,
    `<span style = "color:black; margin-bottom: -45px; font-size: 25px; font-weight: 800; ">
   Php
    </span>`, `<span style = "color:black; margin-top: 45px; font-size: 25px; font-weight: 800; ">
    Json Server
      </span>`]
    const thirdimagearray = [`<span style = "color:black; margin-top: 45px; font-size: 25px; font-weight: 800; ">
   Javascript
    </span>`, `<span style = "color:black; margin-top: 45px; font-size: 25px; font-weight: 800; ">
  Express
    </span>`, `<span style = "color:black; margin-top: 45px; font-size: 25px; font-weight: 800; ">
    MongoDB
      </span>`]
    const fourthimagearray = [`<span style = "color:black; margin-top: 45px; font-size: 25px; font-weight: 800; ">
    Angular
    </span>`, `<span style = "color:black; margin-top: 45px; font-size: 25px; font-weight: 800; ">
  Springboot
    </span>`,`<span style = "color:black; margin-top: 45px; font-size: 25px; font-weight: 800; ">
   MariaDB
      </span>` ]
    const carousel = document.getElementById("mainpos")  as HTMLElement
    const carousel1 = document.getElementById("mainpos1") as HTMLElement
    const carousel2 = document.getElementById("mainpos2") as HTMLElement
    const carousel3 = document.getElementById("mainpos3") as HTMLElement
    const languages = document.getElementById('title') as HTMLElement
    let index = 0

    function loopone(){
      carousel.innerHTML = myimagearray[index]
      carousel1.innerHTML = secondimagearray[index]
      carousel2.innerHTML = thirdimagearray[index]
      carousel3.innerHTML =  fourthimagearray[index]
      languages.innerHTML = languagearray[index]
        index++
        if(index >= myimagearray.length && index >= secondimagearray.length
          && index >= thirdimagearray.length && index >= fourthimagearray.length && index >= languagearray.length){
          index =0
        }
    }
    setInterval(loopone, 3000)

    this.firstFormGroup.get('fname')?.valueChanges.subscribe((data) => {
      console.log(data)
    })
  }

  onSubmit(){
      console.log(this.firstFormGroup.value)
  }


secondsubmit(){
  console.log(this.secondFormGroup.value)
}

// showchange(){
//   this.firstFormGroup.valueChanges.subscribe((data) => {
//     console.log(data)
//   })
// }
  //
}

//

























// const scriptURL = 'https://script.google.com/macros/s/AKfycbz4sjga7DojYlYLbJhIfWOJZP0Y5wvaxABBuetUzxej1AYgF6BtojLVfw4af1qdM6Py6w/exec'
//     const form = document.getElementById('formdata')?.addEventListener('submit', e => {
//       e.preventDefault()
//       fetch(scriptURL, { method: 'POST',
//       mode: 'no-cors',
//       body: new FormData(form as unknown as HTMLFormElement)})
//         .then(response => console.log('Success!', response)).then(html => {
//           alert("Succesfully Submitted")
//         })
//         .catch(error => console.error('Error!', error.message))
//     })
