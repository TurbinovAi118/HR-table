package com.example.springproject.entity;

import javax.persistence.*;

@Entity
@Table(name = "empl_types")
public class EmplTypes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_type")
    private int id_type;

    @Column(name = "type")
    private String type;

    public EmplTypes() {
    }

    public EmplTypes(String type) {
        this.type = type;
    }

    public int getId_type() {
        return id_type;
    }

    public void setId_type(int id_type) {
        this.id_type = id_type;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return "EmplTypes{" +
                "id_type=" + id_type +
                ", type='" + type + '\'' +
                '}';
    }
}
