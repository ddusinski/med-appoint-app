import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Appointment } from '../app/appointment';
// import { Observable } from 'rxjs/Observable';
import { Observable } from '../../node_modules/rxjs';

@Injectable()
export class AppointmentServiceService {

  private appointmentsUrl: string;

  constructor(private http: HttpClient) {
    this.appointmentsUrl = 'http://localhost:8080/api/appointments/get';
  }

  public findAll(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.appointmentsUrl);
  }

  public save(appointment: Appointment) {
    return this.http.post<Appointment>(this.appointmentsUrl, appointment);
  }

  public delete(appointment: Appointment){
    return this.http.delete<Appointment>(this.appointmentsUrl);
  }
}