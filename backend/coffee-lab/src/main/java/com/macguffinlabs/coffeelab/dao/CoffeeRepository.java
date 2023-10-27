package com.macguffinlabs.coffeelab.dao;

import com.macguffinlabs.coffeelab.entity.Coffee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CoffeeRepository extends JpaRepository<Coffee, Long> {

}
