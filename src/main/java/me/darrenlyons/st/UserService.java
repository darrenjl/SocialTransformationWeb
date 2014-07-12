package me.darrenlyons.st;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository repository;

    @Value("${name}")
    private String name;

    public void playWithRepo(){
        // save a couple of Users
        repository.save(new User("Jack", "Bauer"));
        repository.save(new User("Chloe", "O'Brian"));
        repository.save(new User("Kim", "Bauer"));
        repository.save(new User("David", "Palmer"));
        repository.save(new User("Michelle", "Dessler"));

        // fetch all Users
        Iterable<User> Users = repository.findAll();
        System.out.println("Users found with findAll():");
        System.out.println("-------------------------------");
        for (User User : Users) {
            System.out.println(User);
        }
        System.out.println();

        // fetch an individual User by ID
        User User = repository.findOne(1L);
        System.out.println("User found with findOne(1L):");
        System.out.println("--------------------------------");
        System.out.println(User);
        System.out.println();

        // fetch Users by last name
        List<User> bauers = repository.findByLastName("Bauer");
        System.out.println("User found with findByLastName('Bauer'):");
        System.out.println("--------------------------------------------");
        for (User bauer : bauers) {
            System.out.println(bauer);
        }

        System.out.println("name = " + name);

    }
}
