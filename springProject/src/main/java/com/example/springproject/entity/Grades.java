package com.example.springproject.entity;


import javax.persistence.*;

@Entity
@Table(name = "grades")
public class Grades {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_grade")
    private int id_grade;

    @Column(name = "grade")
    private String grade;

    public Grades() {
    }

    public Grades(String grade) {
        this.grade = grade;
    }

    public int getId_grade() {
        return id_grade;
    }

    public void setId_grade(int id_grade) {
        this.id_grade = id_grade;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    @Override
    public String toString() {
        return "Grades{" +
                "id_grade=" + id_grade +
                ", grade='" + grade + '\'' +
                '}';
    }
}
