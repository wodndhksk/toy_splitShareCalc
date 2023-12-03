package toy.splitShareCalc.calc;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import toy.splitShareCalc.calc.dto.RequestCalc;
import toy.splitShareCalc.calc.dto.ResponseCalc;
import toy.splitShareCalc.calc.service.CalcService;

import java.util.List;

@Controller
@Slf4j
@RequiredArgsConstructor
public class CalcController {

    private final CalcService calcService;

    @GetMapping("/pages/calc")
    public String calcMain(Model model) {
        log.info("계산 controller");
        return "pages/calc";
    }

    @PostMapping("/request/calc")
    @ResponseBody
    public List<ResponseCalc> doCalculation(@RequestBody RequestCalc requestCalc) {
        return calcService.doCalculation(requestCalc);
    }
}
