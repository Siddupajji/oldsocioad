import {
  Component,
  OnInit,
  ElementRef,
  Renderer2,
  HostListener,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, AfterViewInit {
  [x: string]: any;

  @ViewChild('dropdown') dropdown!: ElementRef;
  @ViewChild('services') services!: ElementRef;
  @ViewChild('maindrop')
  main!: ParentNode;

  public yo: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngAfterViewInit(): void {
    const mychildren = (<HTMLElement>document.querySelector('.maindrop'))
      .children;
    for (let i = 0; i < mychildren.length; i++) {

      mychildren[i].addEventListener('click', () => {
        for (let j = 0; j < mychildren.length; j++) {
          console.log(mychildren[j]);
          mychildren[j].classList.remove('colorit');
        }
        mychildren[i].classList.add('colorit');
      });
    }
  }
  slowDown(){
    const x = (<HTMLElement>document.getElementById('dropdownnav'))
    if(x.style.opacity ===  "0"){
      x.style.opacity = "1"
    } else{
      x.style.opacity = "0"
    }
  }


  onServices() {
    this.yo = !this.yo;
  }

  // @HostListener('window:scroll') function() {
  //   this.renderer.removeChild(
  //     this.services.nativeElement,
  //     this.dropdown.nativeElement
  //   );
  // }

  ngOnInit(): void {}
}
