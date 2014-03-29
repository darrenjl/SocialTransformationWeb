package hello;

import java.util.Arrays;
import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableAutoConfiguration
@ComponentScan
public class Application {

    public static void main(String[] args) {
        ApplicationContext ctx = SpringApplication.run(Application.class, args);

        System.out.println("Let's inspect the beans provided by Spring Boot:");

        String[] beanNames = ctx.getBeanDefinitionNames();
        Arrays.sort(beanNames);
        for (String beanName : beanNames) {
            System.out.println(beanName);
        }

        UserRepository repository = ctx.getBean(UserRepository.class);

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

        
        
    }

}