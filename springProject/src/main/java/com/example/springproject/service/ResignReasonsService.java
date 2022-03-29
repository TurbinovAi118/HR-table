package com.example.springproject.service;

import com.example.springproject.entity.ResignReasons;
import com.example.springproject.repository.ResignReasonsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ResignReasonsService {

    @Autowired
    private final ResignReasonsRepository resignReasonsRepository;

    public ResignReasonsService(ResignReasonsRepository resignReasonsRepository) {
        this.resignReasonsRepository = resignReasonsRepository;
    }

    public void createReason(ResignReasons resignReasons) {
        resignReasonsRepository.save(resignReasons);
    }

    public List<ResignReasons> findAllReasons(){
        return resignReasonsRepository.findAllReasons();
    }

    public Optional<ResignReasons> findCurReason(int id_reason){
        return resignReasonsRepository.findCurReason(id_reason);
    }

    public void deleteCurReason(int id_reason){
        resignReasonsRepository.deleteCurReason(id_reason);
    }




}
