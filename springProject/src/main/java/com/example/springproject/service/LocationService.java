package com.example.springproject.service;

import com.example.springproject.entity.Locations;
import com.example.springproject.repository.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LocationService {

    @Autowired
    private final LocationRepository locationRepository;

    public LocationService(LocationRepository locationRepository) {
        this.locationRepository = locationRepository;
    }

    public void createLocation(Locations locations){ locationRepository.save(locations); }
}
