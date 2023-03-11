import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {TaskService} from "../service/taskService/task.service";
import {DialogRef} from "@angular/cdk/dialog";

@Component({
  selector: 'app-add-edit-form',
  templateUrl: './add-edit-form.component.html',
  styleUrls: ['./add-edit-form.component.css']
})

export class AddEditFormComponent {
    taskForm: FormGroup;
    constructor(private _fb: FormBuilder, private _taskService: TaskService, private _dialogRef:DialogRef<AddEditFormComponent>) {
      this.taskForm = this._fb.group({
        taskTitle: '',
        taskDesc: '',
        taskStartDate: '',
        taskEndDate: '',
        totalHour: '',
        status:'',
      })
    }

    onSubmit(){
      if (this.taskForm.valid){
        console.log(this.taskForm.value);
      this._taskService.addTask(this.taskForm.value).subscribe({
        next:(val:any)=>{
        alert("task added")
          this._dialogRef.close();
        }
      })
        error:(err:any)=>{
        console.error(err);
        }
      }
    }
}

