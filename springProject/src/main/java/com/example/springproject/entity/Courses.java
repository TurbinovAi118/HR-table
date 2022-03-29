package com.example.springproject.entity;


import javax.persistence.*;

@Entity
@Table(name = "courses")
public class Courses {

    @Id
    @Column(name = "id_course")
    private int id_course;

    @Column(name = "name")
    private String name;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "id_manager")
    private Employees foreignEmpl;
}
