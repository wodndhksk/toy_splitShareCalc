package toy.splitShareCalc.calc;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;


@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ToString(of = {})
public class Calc {
    @Id
    @GeneratedValue
    @Column(name = "calc_id")
    private Long id;

    @Column(length = 70, name = "title")
    private String title;


}
