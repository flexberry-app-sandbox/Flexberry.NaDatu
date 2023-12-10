package Na_datu.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Na_datu.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Стаж
 */
@Entity(name = "IISNa_datuСтаж")
@Table(schema = "public", name = "Стаж")
public class Stazh {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Стаж")
    private Integer стаж;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Otvetstvennyj")
    @Convert("Otvetstvennyj")
    @Column(name = "Ответственный", length = 16, unique = true, nullable = false)
    private UUID _otvetstvennyjid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Otvetstvennyj", insertable = false, updatable = false)
    private Otvetstvennyj otvetstvennyj;


    public Stazh() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getСтаж() {
      return стаж;
    }

    public void setСтаж(Integer стаж) {
      this.стаж = стаж;
    }


}