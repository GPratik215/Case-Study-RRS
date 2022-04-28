package com.railinfo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.railinfo.repositories.TrainRepository;
import com.railinfo.users.TrainDetails;

import java.util.List;

@Component
public class TrainService {

    @Autowired
    private TrainRepository trainRepository;

    public void addTrain(TrainDetails trainDetails) {
        System.out.println(trainDetails);
        trainRepository.save(trainDetails);
        System.out.println("Added Successfully");
    }

    public List<TrainDetails> getTrainDetails() {
        return trainRepository.findAll();
    }

    public TrainDetails getTrainById(int trainId) {
        return trainRepository.findById(trainId);
    }

    public TrainDetails updateTraininfo(TrainDetails trainDetails){
        return trainRepository.save(trainDetails);}

    public void deleteTraininfo(int trainId){
        trainRepository.deleteById(trainId);}


}

