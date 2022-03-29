package com.example.springproject.service;

import com.example.springproject.repository.SexRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SexService {

    @Autowired
    private final SexRepository sexRepository;

    public SexService(SexRepository sexRepository) {
        this.sexRepository = sexRepository;
    }


}
