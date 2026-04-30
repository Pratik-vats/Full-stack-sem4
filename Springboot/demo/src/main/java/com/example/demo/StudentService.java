package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.StudentModel;
import com.example.demo.repository.StudentRepository;

@Service
public class StudentService {
    
    @Autowired //it is like wire btw repo and service
    private StudentRepository repository;

    public StudentModel postStudent(StudentModel model){
        return repository.save(model);
    }
    
}
