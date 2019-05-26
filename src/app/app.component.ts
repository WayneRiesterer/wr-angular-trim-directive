import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  form: FormGroup;
  isSubmitted = false;
  result: string;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      message: ['', Validators.required]
    })
  }

  onSubmit(): void {
    this.isSubmitted = true;
    this.result = this.message;
  }

  get message(): string {
    return this.form.get('message').value;
  }
}
