import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-janitor-check-in-editor',
  templateUrl: './janitor-check-in-editor.component.html',
  styleUrls: ['./janitor-check-in-editor.component.scss']
})
export class JanitorCheckInEditorComponent implements OnInit {

  form: FormGroup;

  @Input() editMode = false;
  @Output() saveMasterTrainData = new EventEmitter<any>();
  @Output() deleteMasterTrainData = new EventEmitter<any>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      trainNo: null,
      deptDate: null,
      deptTime: null,
      arrDate: null,
      arrTime: null,
      resCoachNo: null,
      janitorNo: null,
      contractorName: null,
      remark: null
    })
  }

  onSaveMasterTrainData() {
    const data = {...this.form.getRawValue()};
    this.saveMasterTrainData.emit(data);
  }

  onDeleteMasterTrainData() {
    //TODO: Emit event to container to delete the record
  }

  //TODO: Implement a model file for Janitor
  patchFormValue(trainData: any): void {
    this.form.patchValue({...trainData});
  }
}
