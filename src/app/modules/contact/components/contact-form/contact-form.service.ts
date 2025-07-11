import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  constructor() { }

  submitForm(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}
