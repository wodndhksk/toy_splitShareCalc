package toy.splitShareCalc.calc;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@Slf4j
@RequestMapping("pages")
public class CalcController {

    @GetMapping("/calc")
    public String calcMain(Model model) {
        log.info("계산 controller");
        return "pages/calc";
    }
}
