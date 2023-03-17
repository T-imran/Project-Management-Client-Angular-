import { Component, ViewChild } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {formatDate} from "@angular/common";
import {AddEditFormComponent} from "../add-edit-form/add-edit-form.component";
import {TaskService} from "../service/taskService/task.service";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {resolve} from "@angular/compiler-cli";
import {LoginComponent} from "../login/login.component";
import {LoginService} from "../service/loginService/login.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent {
  displayedColumns: string[] = [
    'id',
    'taskTitle',
    'taskDesc',
    'taskStartDate',
    'taskEndDate',
    'totalHour',
    'status',
    'progress',
    'action'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private _dialogue: MatDialog, public taskService:TaskService) {}

  ngOnInit():void{
    this.getTaskList();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openAddEditFrom(){
    this._dialogue.open(AddEditFormComponent);
  }

 getTaskList(){
    this.taskService.getTask().subscribe({
      next:(res) =>{
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.sort=this.sort;
          this.dataSource.paginator= this.paginator;
      },
      error:(err)=>{
        console.error(err);
      }
    })
  }

  deleteTask(id:number){
    this.taskService.deleteTask(id).subscribe({
      next: (res)=>{
        this.getTaskList();
      },
      error:console.log
    })
  }

}
