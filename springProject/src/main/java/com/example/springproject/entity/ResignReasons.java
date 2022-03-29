package com.example.springproject.entity;


import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "resign_reasons")
public class ResignReasons {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_reason")
    private int id_reason;

    @Column(name = "reason")
    private String reason;

    @ManyToMany(cascade ={CascadeType.PERSIST,CascadeType.DETACH,CascadeType.MERGE,CascadeType.REFRESH})
    @JoinTable(
            name = "empl_resign",
            joinColumns = @JoinColumn(name = "id_reason"),
            inverseJoinColumns = @JoinColumn(name = "id_empl"))
    private List<Employees> empl;

    public ResignReasons() {
    }



    public void addEmplToReason(Employees employees){
        if (empl == null){
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

    public ResignReasons(String reason) {
        this.reason = reason;
    }

    public int getId_reason() {
        return id_reason;
    }

    public void setId_reason(int id_reason) {
        this.id_reason = id_reason;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    @Override
    public String toString() {
        return "ResignReasons{" +
                "id_reason=" + id_reason +
                ", reason='" + reason + '\'' +
                '}';
    }
}
