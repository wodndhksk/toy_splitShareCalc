package toy.splitShareCalc.calc.service;

import org.springframework.stereotype.Service;
import toy.splitShareCalc.calc.dto.RequestCalc;
import toy.splitShareCalc.calc.dto.ResponseCalc;

import java.util.List;

@Service
public interface CalcService {
    List<ResponseCalc> doCalculation(RequestCalc requestCalc);

}
