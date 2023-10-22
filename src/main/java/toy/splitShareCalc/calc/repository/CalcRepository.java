package toy.splitShareCalc.calc.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import toy.splitShareCalc.calc.Calc;

public interface CalcRepository extends JpaRepository<Calc, Long> {
}
