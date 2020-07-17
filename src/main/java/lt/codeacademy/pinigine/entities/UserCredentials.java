package lt.codeacademy.pinigine.entities;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserCredentials {
    private String userName;
    private String password;
}
