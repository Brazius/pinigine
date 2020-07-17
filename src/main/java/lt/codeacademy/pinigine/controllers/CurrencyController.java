package lt.codeacademy.pinigine.controllers;

import lt.codeacademy.pinigine.entities.Currency;
import lt.codeacademy.pinigine.repository.CurrencyRepository;
import lt.codeacademy.pinigine.exceptions.CurrencyNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CurrencyController {

    private final CurrencyRepository currencyRepository;

    public CurrencyController(CurrencyRepository currencyRepository) {
        this.currencyRepository = currencyRepository;
    }

    @GetMapping("/currencies")
    public List<Currency> getCurrencies() {
        return currencyRepository.findAll();
    }

    @GetMapping("/{id}")
    public Currency getCurrencyById(@PathVariable Long id){
        return currencyRepository.findById(id)
                .orElseThrow(()-> new CurrencyNotFoundException("Currency with id: " + id + " not found!"));
    }

    @PostMapping("/currencies")
    void addCurrency(@RequestBody Currency currency) {
        currencyRepository.save(currency);
    }

    @PutMapping("/currencies")
    void updateCurrency(@RequestBody Currency currency) {
        currencyRepository.save(currency);
    }

    @DeleteMapping("/currencies/{id}")
    void deleteCurrency(@PathVariable Long id) {
        currencyRepository.deleteById(id);
    }
}
