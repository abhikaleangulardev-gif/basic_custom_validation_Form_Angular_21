import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Uppercase } from '../../custom-validation-form/uppercase.validator';
import { LowerCase } from '../../custom-validation-form/lowercase.validator';
import { TitleCase } from '../../custom-validation-form/titlecase.validator';
import { AlphabetOnly } from '../../custom-validation-form/alphabetonly.validator';

@Component({
  selector: 'app-basic-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './basic-form.html',
  styleUrl: './basic-form.css',
})
export class BasicForm implements OnInit {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initialForm();
  }

  initialForm() {
    this.myForm = this.fb.group({
      username: this.fb.control('', [Validators.required, Uppercase.validate]),
      moviename: this.fb.control('', [Validators.required, LowerCase.validate]),
      fullname: this.fb.control('', [Validators.required, TitleCase.validate]),
      subjectname: this.fb.control('', [Validators.required,AlphabetOnly.validate]),
    })
  }

  onSubmit() {
    console.log(this.myForm);
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    }
  }
}
