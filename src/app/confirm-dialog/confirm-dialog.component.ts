import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  @Input() issueNo : number | null = null;
  @Output() confirm = new EventEmitter<boolean>();

  agree(){
    this.confirm.emit(true);
    this.issueNo = null;
  }

  disagree(){
    this.confirm.emit(false);
    this.issueNo = null;
  }

}
