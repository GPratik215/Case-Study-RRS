package com.railinfo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class TrainSearchApplication {

	public static void main(String[] args) {
		SpringApplication.run(TrainSearchApplication.class, args);
	}

}