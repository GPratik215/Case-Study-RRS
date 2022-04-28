package com.railinfo.users;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document
public class TrainDetails {

    //trainId, trainName, trainDay, trainSeat , trainSource , trainDestination


    @Id
    private int trainId;
    @Field
    private String trainName;
    @Field
    private String trainDay;
    @Field
    private int trainSeat;
    @Field
    private String trainSource;
    @Field
    private String trainDestination;

    public TrainDetails(int trainId, String trainName, String trainDay, int trainSeat, String trainSource, String trainDestination) {
        this.trainId = trainId;
        this.trainName = trainName;
        this.trainDay = trainDay;
        this.trainSeat = trainSeat;
        this.trainSource = trainSource;
        this.trainDestination = trainDestination;
    }

    public TrainDetails() {super();}

    public int getTrainId() {
        return trainId;
    }

    public void setTrainId(int trainId) {
        this.trainId = trainId;
    }

    public String getTrainName() {
        return trainName;
    }

    public void setTrainName(String trainName) {
        this.trainName = trainName;
    }

    public String getTrainDay() {
        return trainDay;
    }

    public void setTrainDay(String trainDay) {
        this.trainDay = trainDay;
    }

    public int getTrainSeat() {
        return trainSeat;
    }

    public void setTrainSeat(int trainSeat) {
        this.trainSeat = trainSeat;
    }

    public String getTrainSource() {
        return trainSource;
    }

    public void setTrainSource(String trainSource) {
        this.trainSource = trainSource;
    }

    public String getTrainDestination() {
        return trainDestination;
    }

    public void setTrainDestination(String trainDestination) {
        this.trainDestination = trainDestination;
    }

    @Override
    public String toString() {
        return "TrainDetails{" +
                "trainId=" + trainId +
                ", trainName='" + trainName + '\'' +
                ", trainDay='" + trainDay + '\'' +
                ", trainSeat=" + trainSeat +
                ", trainSource='" + trainSource + '\'' +
                ", trainDestination='" + trainDestination + '\'' +
                '}';
    }
}