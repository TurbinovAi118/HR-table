package com.example.springproject.entity;

import javax.persistence.*;


@Entity
@Table(name = "sex")
public class Sex {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_sex")
    private int id_sex;

    @Column(name = "sex")
    private String sex;



    public int getId() {
        return id_sex;
    }

    public void setId(int id) {
        this.id_sex = id;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public Sex() {
    }

    public Sex(String sex) {
        this.sex = sex;
    }

    @Override
    public String toString() {
        return "sex{" +
                "id=" + id_sex +
                ", sex='" + sex + '\'' +
                '}';
    }
}
