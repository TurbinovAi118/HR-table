package com.example.springproject.repository;

import com.example.springproject.entity.EmplTypes;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmplTypeRepository extends JpaRepository<EmplTypes, Long> {
}
