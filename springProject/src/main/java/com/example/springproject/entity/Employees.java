package com.example.springproject.entity;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "employees")
public class Employees {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_empl;

    @Column(name = "name")
    private String emplName;

    @Column(name = "id_sex")
    private int id_sex;

    @Column(name = "id_staff_type")
    private int id_staff_type;

    @Column(name = "id_empl_type")
    private int id_empl_type;

    @Column(name = "current_salary")
    private int current_salary;

    @Column(name = "birth_date")
    private Date birth_date = new Date();

    @Column(name = "hire_date")
    private Date hire_date;

    @Column(name = "fire_date")
    private Date fire_date;

    @Column(name = "id_loc")
    private int id_loc;

    @Column(name = "id_course")
    private int id_course;

    @Column(name = "id_grade")
    private int id_grade;

    @Column(name = "id_post")
    private int id_post;

    @ManyToMany(cascade ={CascadeType.PERSIST,CascadeType.DETACH,CascadeType.MERGE,CascadeType.REFRESH})
    @JoinTable(
            name = "empl_resign",
            joinColumns = @JoinColumn(name = "id_empl"),
            inverseJoinColumns = @JoinColumn(name = "id_reason"))
    private List<ResignReasons> reasons;

    @ManyToMany(cascade ={CascadeType.PERSIST,CascadeType.DETACH,CascadeType.MERGE,CascadeType.REFRESH})
    @JoinTable(
            name = "empl_prjct",
            joinColumns = @JoinColumn(name = "id_manager"),
            inverseJoinColumns = @JoinColumn(name = "id_project"))
    private List<Projects> prjct;




    public Employees() {
    }

    public Employees(String emplName, int id_sex, int id_staff_type, int id_empl_type, int current_salary, Date birth_date, Date hire_date, Date fire_date, int id_loc, int id_course, int id_grade, int id_post) {
        this.emplName = emplName;
        this.id_sex = id_sex;
        this.id_staff_type = id_staff_type;
        this.id_empl_type = id_empl_type;
        this.current_salary = current_salary;
        this.birth_date = birth_date;
        this.hire_date = hire_date;
        this.fire_date = fire_date;
        this.id_loc = id_loc;
        this.id_course = id_course;
        this.id_grade = id_grade;
        this.id_post = id_post;
    }

    public Employees(String emplName, int id_sex, int id_staff_type, Date birth_date, Date hire_date, int id_loc, int id_course, int id_grade, int id_post) {
        this.emplName = emplName;
        this.id_sex = id_sex;
        this.id_staff_type = id_staff_type;
        this.birth_date = birth_date;
        this.hire_date = hire_date;
        this.id_loc = id_loc;
        this.id_course = id_course;
        this.id_grade = id_grade;
        this.id_post = id_post;
    }

    public void addProjectToEmpl(Projects projects){
        if (prjct == null){
            prjct = new ArrayList<>();
        }
        prjct.add(projects);
    }

    public void addReasonToEmpl(ResignReasons resignReasons){
        if (reasons == null){
            reasons = new ArrayList<>();
        }
        reasons.add(resignReasons);
    }

    public List<ResignReasons> getReasons() {
        return reasons;
    }

    public void setReasons(List<ResignReasons> reasons) {
        this.reasons = reasons;
    }

    public List<Projects> getPrjct() {
        return prjct;
    }

    public void setPrjct(List<Projects> prjct) {
        this.prjct = prjct;
    }

    public int getId_empl() {
        return id_empl;
    }

    public String getEmplName() {
        return emplName;
    }

    public int getId_sex() {
        return id_sex;
    }

    public int getId_staff_type() {
        return id_staff_type;
    }

    public int getId_empl_type() {
        return id_empl_type;
    }

    public int getCurrent_salary() {
        return current_salary;
    }

    public Date getBirth_date() {
        return birth_date;
    }

    public Date getHire_date() {
        return hire_date;
    }

    public Date getFire_date() {
        return fire_date;
    }

    public int getId_loc() {
        return id_loc;
    }

    public int getId_course() {
        return id_course;
    }

    public int getId_grade() {
        return id_grade;
    }

    public int getId_post() {
        return id_post;
    }

    public void setEmplName(String emplName) {
        this.emplName = emplName;
    }

    public void setId_sex(int id_sex) {
        this.id_sex = id_sex;
    }

    public void setId_staff_type(int id_staff_type) {
        this.id_staff_type = id_staff_type;
    }

    public void setId_empl_type(int id_empl_type) {
        this.id_empl_type = id_empl_type;
    }

    public void setCurrent_salary(int current_salary) {
        this.current_salary = current_salary;
    }

    public void setBirth_date(Date birth_date) {
        this.birth_date = birth_date;
    }

    public void setHire_date(Date hire_date) {
        this.hire_date = hire_date;
    }

    public void setFire_date(Date fire_date) {
        this.fire_date = fire_date;
    }

    public void setId_loc(int id_loc) {
        this.id_loc = id_loc;
    }

    public void setId_course(int id_course) {
        this.id_course = id_course;
    }

    public void setId_grade(int id_grade) {
        this.id_grade = id_grade;
    }

    public void setId_post(int id_post) {
        this.id_post = id_post;
    }

    public List<ResignReasons> getResignReasons() {
        return reasons;
    }

    public void setResignReasons(List<ResignReasons> resignReasons) {
        this.reasons = reasons;
    }
}
