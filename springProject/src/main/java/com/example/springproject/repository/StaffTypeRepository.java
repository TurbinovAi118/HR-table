package com.example.springproject.repository;

import com.example.springproject.entity.StaffTypes;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StaffTypeRepository extends JpaRepository<StaffTypes, Long> {
}
