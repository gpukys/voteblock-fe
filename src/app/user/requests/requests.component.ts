import { MatSnackBar } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PollsService } from '../polls/polls.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

  form = this.fb.group({
    name: ['', [Validators.required]],
    choices: [[]]
  });

  choices = [];

  constructor(
    private fb: FormBuilder,
    private pollService: PollsService,
    private notification: MatSnackBar
  ) { }

  ngOnInit() {
  }

  submitRequest() {
    const request = this.form.getRawValue();
    request.choices = this.choices.map(e => e.item);
    this.pollService.submitPollRequest(request).subscribe(res => {
      this.notification.open('Užklausa sėkmingai pateikta', undefined, {duration: 3000});
      this.resetFields();
    });
  }

  private resetFields() {
    this.form.get('name').setValue('');
    this.form.get('choices').setValue([]);
    this.choices = [];
    this.form.markAsUntouched();
  }

}
