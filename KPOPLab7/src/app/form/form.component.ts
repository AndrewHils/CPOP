// src/app/form/form.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormData } from '../data.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  form: FormGroup;
  submittedData: FormData | undefined;  // Add this line
  formData: FormData = new FormData();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      organization: this.fb.group({
        name: ['', Validators.required],
        city: ['', Validators.required],
        address: ['', Validators.required],
      }),
      contactPerson: this.fb.group({
        name: ['', Validators.required],
        phone: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
      }),
      objectInfo: this.fb.group({
        name: ['', Validators.required],
        usageArea: ['', Validators.required],
      }),
    });
  }

  onSubmit() {
    console.log('Form submitted:', this.form.value);
    this.submittedData = this.form.value;
  }
}
