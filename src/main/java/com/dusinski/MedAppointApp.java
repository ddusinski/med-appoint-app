package com.dusinski;

import com.dusinski.model.Appointment;
import com.dusinski.repository.AppointmentRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;

@SpringBootApplication
public class MedAppointApp {
    public static void main(String[] args) {
        SpringApplication.run(MedAppointApp.class);
    }

    @Bean
    CommandLineRunner init(AppointmentRepository appointmentRepository) {
        return args -> {
            appointmentRepository.save(new Appointment("Gynecologist","Zuzanna", LocalDateTime.of(2023, 7,23,12,15),LocalDateTime.of(2023, 7,23,12,45)));
            appointmentRepository.save(new Appointment("Dentist","Dominik", LocalDateTime.of(2023, 8,20,10,0),LocalDateTime.of(2023, 8,20,10,30)));
            appointmentRepository.save(new Appointment("Speech Therapist","Krzysztof", LocalDateTime.of(2023, 9,11,14,30),LocalDateTime.of(2023, 9,11,15,0)));
            appointmentRepository.save(new Appointment("Pediatrician","Elisabeth", LocalDateTime.of(2023, 10,3,9,15),LocalDateTime.of(2023, 10,3,9,45)));
            appointmentRepository.findAll().forEach(System.out::println);
        };

    }

    @Bean
    public CorsFilter corsFilter() {
        final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        final CorsConfiguration config = new CorsConfiguration();
//        config.setAllowedOrigins(Collections.singletonList("http://localhost:4200")); // Provide list of origins if you want multiple origins
        config.setAllowedOrigins(Arrays.asList("http://localhost:4200","http://localhost:8081")); // Provide list of origins if you want multiple origins
        config.setAllowedHeaders(Arrays.asList("Origin", "Content-Type", "Accept"));
        config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "OPTIONS", "DELETE", "PATCH"));
        config.setAllowCredentials(true);
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }

}

