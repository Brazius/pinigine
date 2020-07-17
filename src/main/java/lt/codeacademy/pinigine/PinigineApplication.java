package lt.codeacademy.pinigine;

import lt.codeacademy.pinigine.entities.Currency;
import lt.codeacademy.pinigine.entities.User;
import lt.codeacademy.pinigine.repository.CurrencyRepository;
import lt.codeacademy.pinigine.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.math.BigDecimal;

@SpringBootApplication
public class PinigineApplication {

	@Autowired
	private CurrencyRepository currencyRepository;

	@Autowired
	private UserRepository userRepository;

	public static void main(String[] args) {
		SpringApplication.run(PinigineApplication.class, args);
	}

	@Bean
	CommandLineRunner runner() {
		return args -> {
//            Save demo data after start
			userRepository.save(new User("admin", "$2a$04$KNLUwOWHVQZVpXyMBNc7JOzbLiBjb9Tk9bP7KNcPI12ICuvzXQQKG"));


			currencyRepository.save(new Currency("US Dolar", "USD", new BigDecimal(1000), new BigDecimal(3.92)));
			currencyRepository.save(new Currency("Euro", "EUR", new BigDecimal(3000), new BigDecimal(4.52)));
		};
	}
}
