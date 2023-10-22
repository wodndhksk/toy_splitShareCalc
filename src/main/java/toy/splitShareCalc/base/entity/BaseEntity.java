//package toy.splitShareCalc.base.entity;
//
//import jakarta.persistence.Column;
//import jakarta.persistence.EntityListeners;
//import jakarta.persistence.MappedSuperclass;
//import lombok.Getter;
//import org.springframework.data.annotation.CreatedBy;
//import org.springframework.data.annotation.CreatedDate;
//import org.springframework.data.annotation.LastModifiedBy;
//import org.springframework.data.annotation.LastModifiedDate;
//import org.springframework.data.jpa.domain.support.AuditingEntityListener;
//
//import java.time.LocalDateTime;
//
//@EntityListeners(AuditingEntityListener.class)
//@MappedSuperclass
//@Getter
//public class BaseEntity {
//    @CreatedDate
//    @Column(updatable = false)
//    private LocalDateTime regDate;
//
//    @LastModifiedDate
//    private LocalDateTime modDate;
//
//    @CreatedBy
//    @Column(updatable = false)
//    private String regUser;
//
//    @LastModifiedBy
//    private String modUser;
//}
