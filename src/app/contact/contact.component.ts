import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import * as toastr from "toastr";
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  nameCtrl: FormControl;
  emailCtrl: FormControl;
  messageCtrl: FormControl;
  constructor(private fb: FormBuilder, private db: AngularFireDatabase, private titleService: Title) {
    this.createForm();
  }

  createForm() {
    this.nameCtrl = this.fb.control('', Validators.required);
    this.emailCtrl = new FormControl('', {updateOn: 'blur', validators: [Validators.required, Validators.email]})
    this.messageCtrl = this.fb.control('', Validators.required);

    this.form = this.fb.group({
      name: this.nameCtrl,
      email: this.emailCtrl,
      message: this.messageCtrl
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const {name, email, message} = this.form.value;
      const date = Date();
      const html = `
        <div>From: ${name}</div>
        <div>Email: <a href="mailto:${email}">${email}</a></div>
        <div>Date: ${date}</div>
        <div>Message: ${message}</div>
      `;
      let formRequest = { name, email, message, date, html };
      this.db.list('/messages').push(formRequest);
      this.form.reset();
      toastr.success('Thank you, I will get back to you soon!', 'Success!', {progressBar: true,positionClass: "toast-right-center"})
    } else {
      toastr.error('Something went wrong, please try again.', 'Error!', {progressBar: true,positionClass: "toast-right-center"})
    }
  }

  ngOnInit() {
    this.titleService.setTitle('Tim Almamedov | Contact');
    let test = this.titleService.getTitle();
  }

}
