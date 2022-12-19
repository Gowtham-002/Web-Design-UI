package com.backend.demo.repository;

import com.backend.demo.entiry.EmployeeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface  EmployeeRepository extends JpaRepository<EmployeeEntity, Long> {
}
