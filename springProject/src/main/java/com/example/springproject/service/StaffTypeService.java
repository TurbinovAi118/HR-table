package com.example.springproject.service;

import com.example.springproject.entity.StaffTypes;
import com.example.springproject.repository.StaffTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StaffTypeService {

    @Autowired
    private final StaffTypeRepository staffTypeRepository;

    public StaffTypeService(StaffTypeRepository staffTypeRepository) {
        this.staffTypeRepository = staffTypeRepository;
    }

    public void createStaffType(StaffTypes staffTypes){ staffTypeRepository.save(staffTypes);}
}
