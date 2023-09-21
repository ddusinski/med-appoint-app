import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentServiceService } from '../appointment-service.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  appointments: Appointment[];

  constructor(private appointmentService: AppointmentServiceService) {
  }

  ngOnInit() {
    this.appointmentService.findAll().subscribe(data => {
      this.appointments = data;
    });
  }
}