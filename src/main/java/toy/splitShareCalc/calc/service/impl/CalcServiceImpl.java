package toy.splitShareCalc.calc.service.impl; 

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import toy.splitShareCalc.calc.dto.RequestCalc;
import toy.splitShareCalc.calc.dto.ResponseCalc;
import toy.splitShareCalc.calc.repository.CalcRepository;
import toy.splitShareCalc.calc.service.CalcService;

import java.util.List;

@RequiredArgsConstructor
@Component
public class CalcServiceImpl implements CalcService {

    private final CalcRepository calcRepository;

    @Override
    public List<ResponseCalc> doCalculation(RequestCalc requestCalc) {
        return null;
    }
}
