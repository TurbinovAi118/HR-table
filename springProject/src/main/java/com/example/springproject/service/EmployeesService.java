package com.example.springproject.service;

import com.example.springproject.entity.Employees;
import com.example.springproject.repository.EmployeesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeesService {

    @Autowired
    private final EmployeesRepository employeesRepository;

    public EmployeesService(EmployeesRepository employeesRepository) {
        this.employeesRepository = employeesRepository;
    }

    public void createEmployee(Employees employees) {
        employeesRepository.save(employees);
    }

    public List<Employees> findAllEmployees(){
        return employeesRepository.findAll();
    }

    public Optional<Employees> getCurEmpl(int id_empl){return employeesRepository.getCurEmpl(id_empl);}

    public Optional<Employees> deleteEmployeesById(int id_empl) {return employeesRepository.deleteEmployeesById(id_empl);}
}
