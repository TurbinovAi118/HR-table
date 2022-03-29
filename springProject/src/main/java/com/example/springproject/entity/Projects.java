package com.example.springproject.entity;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@Entity
@Table(name = "projects")
public class Projects {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_project")
    private int id_project;

    @Column(name = "name")
    private String name;

    @Column(name = "start_date")
    private Date start_date;

    @Column(name = "end_date")
    private Date end_date;

    @Column(name = "commentary")
    private String commentary;

    @ManyToMany(cascade ={CascadeType.PERSIST,CascadeType.DETACH,CascadeType.MERGE,CascadeType.REFRESH})
    @JoinTable(
            name = "empl_prjct",
            joinColumns = @JoinColumn(name = "id_project"),
            inverseJoinColumns = @JoinColumn(name = "id_manager"))
    private List<Employees> empl;

    public Projects() {
    }

    public Projects(String name, Date start_date) {
        this.name = name;
        this.start_date = start_date;
    }

    public Projects(String name, Date start_date, String commentary) {
        this.name = name;
        this.start_date = start_date;
        this.commentary = commentary;
    }

    public Projects(String name, Date start_date, Date end_date) {
        this.name = name;
        this.start_date = start_date;
        this.end_date = end_date;
    }

    public Projects(String name, Date start_date, Date end_date, String commentary) {
        this.name = name;
        this.start_date = start_date;
        this.end_date = end_date;
        this.commentary = commentary;
    }

    public void addEmplToProject(Employees employees){
        if(empl == null){
            empl = new ArrayList<>();
        }
        empl.add(employees);
    }

    public List<Employees> getEmpl() {
        return empl;
    }

    public void setEmpl(List<Employees> empl) {
        this.empl = empl;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getStart_date() {
        return start_date;
    }

    public void setStart_date(Date start_date) {
        this.start_date = start_date;
    }

    public Date getEnd_date() {
        return end_date;
    }

    public void setEnd_date(Date end_date) {
        this.end_date = end_date;
    }

    public String getCommentary() {
        return commentary;
    }

    public void setCommentary(String commentary) {
        this.commentary = commentary;
    }

    @Override
    public String toString() {
        return "Projects{" +
                "id_project=" + id_project +
                ", name='" + name + '\'' +
                ", start_date=" + start_date +
                ", end_date=" + end_date +
                ", commentary='" + commentary + '\'' +
                '}';
    }
}
