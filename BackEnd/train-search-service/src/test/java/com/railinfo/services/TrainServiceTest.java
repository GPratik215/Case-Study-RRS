package com.railinfo.services;

import com.railinfo.repositories.TrainRepository;
import com.railinfo.users.TrainDetails;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class TrainServiceTest {

    @InjectMocks
    TrainService trainService;

    @Mock
    TrainRepository trainRepository;

    @Mock
    TrainService trainService1;

    @Test
    public void getTrainDetailsTest()
    {
        List<TrainDetails> list = new ArrayList<TrainDetails>();
        TrainDetails trainOne = new TrainDetails(123,"ABC Express","Sunday",150,"Delhi","Nagpur");
        TrainDetails trainTwo = new TrainDetails(456,"DEF Express","Friday",785,"Mumbai","Pune");
        TrainDetails trainThree = new TrainDetails(789,"FGH Express","Saturday",380,"Ajmer","Raipur");

        list.add(trainOne);
        list.add(trainTwo);
        list.add(trainThree);

        when(trainRepository.findAll()).thenReturn(list);

        List<TrainDetails> trainList = trainService.getTrainDetails();

        assertEquals(3,trainList.size());
        verify(trainRepository,times(1)).findAll();
    }

    @Test
    public void getTrainByIdTest(){

        when(trainRepository.findById(1)).thenReturn(new TrainDetails(1,"Akbar Express","Friday",721,"Lahore","Karachi"));

        TrainDetails trainDetails = trainRepository.findById(1);


        assertEquals("Akbar Express","Akbar Express", trainDetails.getTrainName());
        assertEquals("Friday","Friday", trainDetails.getTrainDay());
        assertEquals(721,721, trainDetails.getTrainSeat());
        assertEquals("Lahore","Lahore", trainDetails.getTrainSource());
        assertEquals("Karachi","Karachi", trainDetails.getTrainDestination());

    }


}