package Na_datu.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Na_datu.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: Документ
 */
@Entity(name = "IISNa_datuДокумент")
@Table(schema = "public", name = "Документ")
public class Dokument {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "Тип")
    private String тип;

    @Column(name = "Фамилия")
    private String фамилия;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Otvetstvennyj")
    @Convert("Otvetstvennyj")
    @Column(name = "Ответственный", length = 16, unique = true, nullable = false)
    private UUID _otvetstvennyjid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Otvetstvennyj", insertable = false, updatable = false)
    private Otvetstvennyj otvetstvennyj;


    public Dokument() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public String getТип() {
      return тип;
    }

    public void setТип(String тип) {
      this.тип = тип;
    }

    public String getФамилия() {
      return фамилия;
    }

    public void setФамилия(String фамилия) {
      this.фамилия = фамилия;
    }


}