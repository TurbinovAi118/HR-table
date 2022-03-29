package com.example.springproject.service;

import com.example.springproject.entity.Posts;
import com.example.springproject.repository.PostsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostService {

    @Autowired
    private final PostsRepository postsRepository;

    public PostService(PostsRepository postsRepository) {
        this.postsRepository = postsRepository;
    }


    public void createPost(Posts posts){ postsRepository.save(posts); }
}
