import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicForm } from "./component/basic-form/basic-form";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, BasicForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('basicCustomValidationForm');
}
