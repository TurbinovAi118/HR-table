package com.example.springproject.entity;


import javax.persistence.*;

@Entity
@Table(name = "locations")
public class Locations {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_loc")
    private int id_loc;

    @Column(name = "loc")
    private String loc;

    public Locations() {
    }

    public Locations(String loc) {
        this.loc = loc;
    }

    public int getId_loc() {
        return id_loc;
    }

    public void setId_loc(int id_loc) {
        this.id_loc = id_loc;
    }

    public String getLoc() {
        return loc;
    }

    public void setLoc(String loc) {
        this.loc = loc;
    }

    @Override
    public String toString() {
        return "Locations{" +
                "id_loc=" + id_loc +
                ", loc='" + loc + '\'' +
                '}';
    }
}
