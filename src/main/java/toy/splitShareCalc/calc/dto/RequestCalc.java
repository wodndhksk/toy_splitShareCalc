package toy.splitShareCalc.calc.dto;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class RequestCalc {
    private List<String> name = new ArrayList<>();
    private BigDecimal totalPrice;
    private String currency;
}
