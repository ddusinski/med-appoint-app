import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from '../model/appointment';
import { AppointmentService } from '../service/appointment.service';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent {

  appointment: Appointment;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appointmentService: AppointmentService) {
    this.appointment = new Appointment();
  }

  onSubmit() {
    this.appointmentService.save(this.appointment).subscribe(result => this.gotoAppointmentList());
  }

  gotoAppointmentList() {
    this.router.navigate(['/appointments']);
  }
}
