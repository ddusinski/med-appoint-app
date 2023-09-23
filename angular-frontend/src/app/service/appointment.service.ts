import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Appointment } from '../model/appointment';
// import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';

@Injectable()
export class AppointmentService {

  private getAppointmentsUrl: string;
  private saveAppointmentsUrl: string;
  private deleteAppointmentsUrl: string;

  constructor(private http: HttpClient) {
    this.getAppointmentsUrl = 'http://localhost:8080/api/appointments/get';
    this.saveAppointmentsUrl = 'http://localhost:8080/api/appointments/add';
    this.deleteAppointmentsUrl = 'http://localhost:8080/api/appointments/delete/';
  }

  public findAll(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.getAppointmentsUrl);
  }

  public save(appointment: Appointment) {
    return this.http.post<Appointment>(this.saveAppointmentsUrl, appointment);
  }

  public delete(appointmentID: number) {
    var deleteURL: string = this.deleteAppointmentsUrl + appointmentID;
    return this.http.delete(deleteURL);
  }
}