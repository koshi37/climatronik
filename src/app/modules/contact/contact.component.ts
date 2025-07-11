import { Component } from '@angular/core';
import { ContactFormComponent } from "./components/contact-form/contact-form.component";
import { ContactInfoComponent } from "./components/contact-info/contact-info.component";

@Component({
  selector: 'app-contact',
  imports: [ContactFormComponent, ContactInfoComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.less'
})
export class ContactComponent {

}
