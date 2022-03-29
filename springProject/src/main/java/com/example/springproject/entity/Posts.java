package com.example.springproject.entity;


import javax.persistence.*;

@Entity
@Table(name = "posts")
public class Posts {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_pos")
    private int id_pos;

    @Column(name = "post")
    private String post;

    public Posts() {
    }

    public Posts(String post) {
        this.post = post;
    }

    public int getId_pos() {
        return id_pos;
    }

    public void setId_pos(int id_pos) {
        this.id_pos = id_pos;
    }

    public String getPost() {
        return post;
    }

    public void setPost(String post) {
        this.post = post;
    }

    @Override
    public String toString() {
        return "Posts{" +
                "id_pos=" + id_pos +
                ", post='" + post + '\'' +
                '}';
    }
}
