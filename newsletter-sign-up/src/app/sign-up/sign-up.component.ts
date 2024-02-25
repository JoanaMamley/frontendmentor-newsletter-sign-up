import { Component, ElementRef, EventEmitter, HostListener, Output, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  imageUrl: string = 'illustration-sign-up-mobile.svg'; // Set default image path
  signUpForm: FormGroup;
  submitClicked = false;
  @Output() submitEvent = new EventEmitter<boolean>();

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setImageBasedOnWidth();
  }

  setImageBasedOnWidth() {
    const screenWidth = window.innerWidth;
    const imgElement = this.el.nativeElement.querySelector('.responsive-image');
    
    if (screenWidth < 1440) {
      this.renderer.setAttribute(imgElement, 'src', 'illustration-sign-up-mobile.svg');
    } else {
      this.renderer.setAttribute(imgElement, 'src', 'illustration-sign-up-desktop.svg');
    }
  }

  // Call setImageBasedOnWidth() initially to set the image based on the initial screen size
  ngOnInit() {
    this.setImageBasedOnWidth();
    this.signUpForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email])
    })
  }

  onSubmit(){
    if(this.signUpForm.valid){
      this.submitEvent.emit(true);
    }else{
      this.submitClicked = true;
    }
    this.signUpForm.reset();
  }
}
