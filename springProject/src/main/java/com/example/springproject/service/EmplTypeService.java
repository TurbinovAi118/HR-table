package com.example.springproject.service;

import com.example.springproject.entity.EmplTypes;
import com.example.springproject.repository.EmplTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmplTypeService {

    @Autowired
    private final EmplTypeRepository emplTypeRepository;

    public EmplTypeService(EmplTypeRepository emplTypeRepository) {
        this.emplTypeRepository = emplTypeRepository;
    }

    public void createEmplType(EmplTypes emplTypes) { emplTypeRepository.save(emplTypes); }
}
