import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-janitor-register-editor',
  templateUrl: './janitor-register-editor.component.html',
  styleUrls: ['./janitor-register-editor.component.scss']
})
export class JanitorRegisterEditorComponent implements OnInit {

  form: FormGroup;

  @Input() editMode = false;
  @Output() saveJanitor = new EventEmitter<any>();
  @Output() deleteJanitor = new EventEmitter<any>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      name: null,
      contactNo: null,
      dob: null,
      aadhaarNumber: null,
      qualification: null,
      designation: null,
      contractor: null,
      photo: null,
      remark: null
    })
  }

  onSaveJanitor() {
    const data = {...this.form.getRawValue()};
    this.saveJanitor.emit(data);
  }

  onDeleteJanitor() {
    //TODO: Emit event to container to delete the record
  }

  //TODO: Implement a model file for Janitor
  patchFormValue(janitor: any): void {
    this.form.patchValue({...janitor});
  }
}
