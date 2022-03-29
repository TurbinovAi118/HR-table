package com.example.springproject.repository;

import com.example.springproject.entity.ResignReasons;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;


import java.util.List;
import java.util.Optional;


public interface ResignReasonsRepository extends JpaRepository<ResignReasons, Long> {


    @Query(value = "select * from resign_reasons", nativeQuery = true)
    List<ResignReasons> findAllReasons();

    @Query(value = "select * from resign_reasons where id_reason = ?1", nativeQuery = true)
    Optional<ResignReasons> findCurReason(int id_reason);
    


    @Query(value = "delete from resign_reasons where id_reason = ?1", nativeQuery = true)
    void deleteCurReason(int id_reason);


}
