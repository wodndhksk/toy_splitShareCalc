package toy.splitShareCalc.calc;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QCalc is a Querydsl query type for Calc
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QCalc extends EntityPathBase<Calc> {

    private static final long serialVersionUID = 156449002L;

    public static final QCalc calc = new QCalc("calc");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath name = createString("name");

    public QCalc(String variable) {
        super(Calc.class, forVariable(variable));
    }

    public QCalc(Path<? extends Calc> path) {
        super(path.getType(), path.getMetadata());
    }

    public QCalc(PathMetadata metadata) {
        super(Calc.class, metadata);
    }

}

