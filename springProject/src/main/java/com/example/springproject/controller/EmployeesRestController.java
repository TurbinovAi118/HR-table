package com.example.springproject.controller;


import com.example.springproject.entity.Employees;
import com.example.springproject.service.EmployeesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class EmployeesRestController {

    @Autowired
    private EmployeesService employeeService;

    @GetMapping("/employees")
        public List<Employees> showAllEmployees() {
        List<Employees> findAllEmployees = employeeService.findAllEmployees();
        return findAllEmployees;
    }

    @GetMapping("/employees/{id}")
    public Optional<Employees> getEmployee(@PathVariable int id) {
        Optional<Employees> employee = employeeService.getCurEmpl(id);
        return employee;
    }
    @PostMapping("/employees")
    public Employees addNewEmployee(@RequestBody Employees employee){
        employeeService.createEmployee(employee);
        return employee;
    }

    @PutMapping("/employees")
    public Employees updateEmployee(@RequestBody Employees employee){
        employeeService.createEmployee(employee);
        return employee;
    }

    @DeleteMapping("/employees/{id}")
    public String deleteEmployee(@PathVariable int id){

        Optional<Employees> employee = employeeService.getCurEmpl(id);

        employeeService.deleteEmployeesById(id);
        return "Employee with ID = " + id + " was deleted";
    }
}