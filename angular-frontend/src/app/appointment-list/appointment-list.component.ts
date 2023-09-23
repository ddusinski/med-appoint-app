import { Component, OnInit } from '@angular/core';
import { Appointment } from '../model/appointment';
import { AppointmentService } from '../service/appointment.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
})
export class AppointmentListComponent implements OnInit {

  appointments: Appointment[];

  constructor(private appointmentService: AppointmentService) {
  }

  ngOnInit() {
    this.appointmentService.findAll().subscribe(data => {
      this.appointments = data;
    });
  };

  deleteAppointment(id: number) {
    this.appointmentService.delete(id).subscribe((data) => {
      this.ngOnInit();
    });
    // this.appointments = this.appointments.filter(item => item.id != id);
  };
}