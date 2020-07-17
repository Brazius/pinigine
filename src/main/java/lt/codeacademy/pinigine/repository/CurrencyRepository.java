package lt.codeacademy.pinigine.repository;

import lt.codeacademy.pinigine.entities.Currency;
import org.springframework.data.jpa.repository.JpaRepository;


public interface CurrencyRepository extends JpaRepository<Currency, Long> {

}
