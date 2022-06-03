//테이블의 컬럼값과 BoardVO는 같아야한다.
//Value Object

package com.example.board.domain.vo;

import lombok.Data;
import org.springframework.stereotype.Component;

@Component  //해당객체를Spring에서관리하도록설정
@Data       // getter,setter,toString,equals,hashCode등을자동으로생성해준다. 롬복에 있는것
public class BoardVO {
    private Long boardBno;
    private String boardTitle;
    private String boardContent;
    private String boardWriter;
    private String boardRegisterDate;
    private String boardUpdateDate;
}
