package Na_datu.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Na_datu.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.List;

/**
 * Entity implementation class for Entity: Ответственный
 */
@Entity(name = "IISNa_datuОтветственный")
@Table(schema = "public", name = "Ответственный")
public class Otvetstvennyj {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ФамилияИ")
    private String фамилияи;

    @Column(name = "Должность")
    private String должность;

    @OneToMany(mappedBy = "otvetstvennyj", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Stazh> stazhs;


    public Otvetstvennyj() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getФамилияИ() {
      return фамилияи;
    }

    public void setФамилияИ(String фамилияи) {
      this.фамилияи = фамилияи;
    }

    public String getДолжность() {
      return должность;
    }

    public void setДолжность(String должность) {
      this.должность = должность;
    }


}