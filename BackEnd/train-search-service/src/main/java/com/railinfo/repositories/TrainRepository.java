package com.railinfo.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.railinfo.users.TrainDetails;

@Repository
public interface TrainRepository extends MongoRepository<TrainDetails,Integer>
{
   public TrainDetails findById(int trainId);

}

