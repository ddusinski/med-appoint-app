package com.dusinski.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AngularController {

    @GetMapping
    public String getHomePage(){
        return "index";
    }
}
