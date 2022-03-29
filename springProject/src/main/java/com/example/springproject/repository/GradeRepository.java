package com.example.springproject.repository;

import com.example.springproject.entity.Grades;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GradeRepository extends JpaRepository<Grades, Long> {
}
