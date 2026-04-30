package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.StudentModel;


@Repository

public interface StudentRepository extends JpaRepository<StudentModel , Integer>{
    
    //you can write coutom query here
    //this file is responsible for all the database operations
}
