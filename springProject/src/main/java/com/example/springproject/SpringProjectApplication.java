package com.example.springproject;

import com.example.springproject.entity.Employees;
import com.example.springproject.entity.Grades;
import com.example.springproject.entity.ResignReasons;
import com.example.springproject.service.EmployeesService;
import com.example.springproject.service.GradeService;
import com.example.springproject.service.ResignReasonsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;

@SpringBootApplication
public class SpringProjectApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringProjectApplication.class, args);
    }



}
