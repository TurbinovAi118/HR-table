package com.example.springproject.service;

import com.example.springproject.entity.Grades;
import com.example.springproject.repository.GradeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GradeService {

    @Autowired
    private final GradeRepository gradeRepository;

    public GradeService(GradeRepository gradeRepository) {
        this.gradeRepository = gradeRepository;
    }

    public void createGrade(Grades grades){ gradeRepository.save(grades); }
}
