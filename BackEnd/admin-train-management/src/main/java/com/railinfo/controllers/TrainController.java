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

    // To add Trains
    Logger logger = LoggerFactory.getLogger(TrainController.class);
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/addTrains")
    public ResponseEntity<TrainDetails> addTrain(@RequestBody TrainDetails trainDetails) {
        try {
            System.out.println(trainDetails);
            trainService.addTrain(trainDetails);
            return ResponseEntity.ok(trainDetails);
        } catch (Exception e) {
            e.printStackTrace();

            logger.info("[addTrain] info message added");
            logger.warn("[addTrain] warn message added");
            logger.debug("[addTrain] debug message added");
            logger.trace("[addTrain] trace message added");

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    // To read all the Trains info
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/traininfo")
    public ResponseEntity<List<TrainDetails>> getTrainDetails() {
        List<TrainDetails> list = trainService.getTrainDetails();

        if (list.size() <= 0) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        logger.info("[getTrainDetails] info message added");
        logger.warn("[getTrainDetails] warn message added");
        logger.debug("[getTrainDetails] debug message added");
        logger.trace("[getTrainDetails] trace message added");

        return ResponseEntity.of(Optional.of(list));


    }

    // Find all the Trains by id.
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/traininfo/{trainId}")
    public ResponseEntity<TrainDetails> getTrainById(@PathVariable("trainId") int trainId) {

        try {
            TrainDetails order = trainService.getTrainById(trainId);
            return ResponseEntity.of(Optional.of(order));
        } catch (Exception e) {
            e.printStackTrace();

            logger.info("[getTrainById] info message added");
            logger.warn("[getTrainById] warn message added");
            logger.debug("[getTrainById] debug message added");
            logger.trace("[getTrainById] trace message added");

            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

    }


    // To update the Train Status
    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/traininfo/{trainId}")
    public ResponseEntity<TrainDetails> updateTraininfo(@RequestBody TrainDetails trainDetails, @PathVariable("trainId") int trainId) {
        TrainDetails trainDetails1 = null;
        try {
            trainDetails1 = trainService.updateTraininfo(trainDetails);
            return ResponseEntity.ok().body(trainDetails1);
        } catch (Exception e) {
            e.printStackTrace();

            logger.info("[updateTraininfo] info message added");
            logger.warn("[updateTraininfo] warn message added");
            logger.debug("[updateTraininfo] debug message added");
            logger.trace("[updateTraininfo] trace message added");

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    // To delete the train info
    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/traininfo/{trainId}")
    public ResponseEntity<TrainDetails> deleteTraininfo(@PathVariable("trainId") int trainId) {
        try {
            TrainDetails trainDetails = trainService.getTrainById(trainId);
            trainService.deleteTraininfo(trainId);
            return ResponseEntity.ok().body(trainDetails);
        } catch (Exception e) {
            e.printStackTrace();

            logger.info("[deleteTraininfo] info message added");
            logger.warn("[deleteTraininfo] warn message added");
            logger.debug("deleteTraininfo] debug message added");
            logger.trace("[deleteTraininfo] trace message added");


            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }


}