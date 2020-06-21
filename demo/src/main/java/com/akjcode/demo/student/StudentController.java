package com.akjcode.demo.student;

import java.util.Arrays;
import java.util.List;
import java.util.UUID;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.akjcode.demo.student.Student.Gender;

@RestController
@RequestMapping("/students")
public class StudentController {
	
	@GetMapping
	public List<Student> getAllStudents() {
		return Arrays.asList(
				new Student(UUID.randomUUID(), "Abdul", "Kather", "abdul2020@gmail.com", Gender.MALE),
				new Student(UUID.randomUUID(), "Raja", "Sekar", "raja2020@gmail.com", Gender.MALE),
				new Student(UUID.randomUUID(), "kamali", "kamali", "kamali2020@gmail.com", Gender.FEMALE)
		);
	}

}
