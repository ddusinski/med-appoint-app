package com.dusinski.controller;

import com.dusinski.model.Appointment;
import com.dusinski.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/appointments")
public class AppointmentController {

    @Autowired
    AppointmentRepository appointmentRepository;

    @GetMapping
    public String sayHello() {
        return "Welcome to Medical Appointment App";
    }

    @GetMapping(path = "/get")
    public Iterable<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }

    @DeleteMapping("/delete/{id}")
    public void deleteAppointment(@PathVariable Long id) {
        appointmentRepository.deleteById(id);
    }
}
