package com.example.springproject.controller;



import com.example.springproject.entity.ResignReasons;

import com.example.springproject.service.ResignReasonsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class ResignRestController {

    @Autowired
    private ResignReasonsService resignReasonsService;

    @GetMapping("/resign_reasons")
    public List<ResignReasons> findAllReasons() {
        return resignReasonsService.findAllReasons();
    }

    @GetMapping("/resign_reasons/{id_reason}")
    public Optional<ResignReasons> findCurReason(@PathVariable int id_reason) {
        return resignReasonsService.findCurReason(id_reason);
    }

    @PostMapping("/resign_reasons")
    public ResignReasons addNewReason(@RequestBody ResignReasons resignReasons){
        resignReasonsService.createReason(resignReasons);
        return resignReasons;
    }

    @PutMapping("/resign_reasons")
    public ResignReasons updateReason(@RequestBody ResignReasons resignReasons){
        resignReasonsService.createReason(resignReasons);
        return resignReasons;
    }

    @DeleteMapping("/resign_reasons/{id_reason}")
    public Optional<ResignReasons> deleteResignReason(@PathVariable int id_reason){

        Optional<ResignReasons> resignReasons = resignReasonsService.findCurReason(id_reason);

        resignReasonsService.deleteCurReason(id_reason);
        return resignReasonsService.findCurReason(id_reason);
    }
}