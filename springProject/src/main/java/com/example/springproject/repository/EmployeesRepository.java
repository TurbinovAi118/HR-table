package com.example.springproject.repository;

import com.example.springproject.entity.Employees;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface EmployeesRepository extends JpaRepository<Employees, Long> {

    @Query(value = "select * from employees", nativeQuery = true)
    List<Employees> findAllEmployees();

    @Query(value = "select e from employees e where e.id_empl = ?1", nativeQuery = true)
    Optional<Employees> getCurEmpl(int id_empl);

    @Query(value = "delete from employees where id_empl = ?1", nativeQuery = true)
    Optional<Employees> deleteEmployeesById(int id_empl);
}
