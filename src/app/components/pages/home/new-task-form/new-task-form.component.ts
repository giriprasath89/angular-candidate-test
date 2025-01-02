import { Component } from '@angular/core';
import { InputComponent } from '../../../ui/input/input.component';
import { CheckboxComponent } from '../../../ui/checkbox/checkbox.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppService } from '../../../../app.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-new-task-form',
  standalone: true,
  imports: [
    InputComponent,
    CheckboxComponent,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  templateUrl: './new-task-form.component.html',
  styleUrl: './new-task-form.component.scss'
})
export class NewTaskFormComponent {

  constructor(private appService: AppService) {

  }
  TaskForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    terms: new FormControl('', [
      Validators.required
    ])
    // add controls
  });

  onSubmit() {
    if (!this.TaskForm.valid) {
      alert('Please fill all fields');
      return;
    }
    if (!this.TaskForm.value.terms) {
      alert('Please accept the terms and conditions');
      return;
    }
    this.appService.addTasks(this.TaskForm.value);
    alert('Task Created successfully');
    this.TaskForm.controls['name'].reset()
  }
}
