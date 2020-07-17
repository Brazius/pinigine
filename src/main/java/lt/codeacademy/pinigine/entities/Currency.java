package lt.codeacademy.pinigine.entities;

import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Data
@Table(name="currency")
public class Currency {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;

    private String code;

    private BigDecimal amount;

    private BigDecimal rate;

    public Currency(String name, String code, BigDecimal amount, BigDecimal rate) {
        this.name = name;
        this.code = code;
        this.amount = amount;
        this.rate = rate;
    }

    public Currency() {
    }
}

