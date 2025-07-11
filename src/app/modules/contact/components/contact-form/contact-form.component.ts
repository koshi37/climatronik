import { Component, inject } from '@angular/core';
import { ContactFormService } from './contact-form.service';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.less'
})
export class ContactFormComponent {
  
  contactFormService = inject(ContactFormService);

  contactForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  submitForm() {
    this.contactFormService.submitForm(
      this.contactForm.value.firstName ?? '',
      this.contactForm.value.lastName ?? '',
      this.contactForm.value.email ?? ''
    );
  }
}
