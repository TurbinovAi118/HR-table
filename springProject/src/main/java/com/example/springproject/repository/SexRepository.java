package com.example.springproject.repository;

import com.example.springproject.entity.Sex;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SexRepository extends JpaRepository<Sex, Long> {
}
