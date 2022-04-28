package com.railinfo.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.railinfo.services.TrainService;
import com.railinfo.users.TrainDetails;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class TrainController {

    @Autowired
    private TrainService trainService;

    // To read all the Trains info
    Logger logger = LoggerFactory.getLogger(TrainController.class);
    @GetMapping("/traininfo")
    public ResponseEntity<List<TrainDetails>> getTrainDetails() {
        List<TrainDetails> list = trainService.getTrainDetails();

        if (list.size() <= 0) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        logger.info("[traininfo] info message added");
        logger.warn("[traininfo] warn message added");
        logger.debug("traininfo] debug message added");
        logger.trace("[traininfo] trace message added");

        return ResponseEntity.of(Optional.of(list));

    }

    // Find all the Trains by id.
    @GetMapping("/traininfo/{trainId}")
    public ResponseEntity<TrainDetails> getTrainById(@PathVariable("trainId") int trainId) {

        try {
            TrainDetails order = trainService.getTrainById(trainId);
            return ResponseEntity.of(Optional.of(order));
        } catch (Exception e) {
            e.printStackTrace();

            logger.info("[traininfo/trainId] info message added");
            logger.warn("[traininfo/trainId] warn message added");
            logger.debug("traininfo/trainId] debug message added");
            logger.trace("[traininfo/trainId] trace message added");

            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

    }

}
