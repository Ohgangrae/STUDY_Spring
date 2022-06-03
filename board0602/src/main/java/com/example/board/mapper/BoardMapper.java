//Mapper 인터페이스는 Mapping 파일에 기재된 SQL을 호출하기 위한 인터페이스이다.
//Mapper 인터페이스에는 쿼리문과 연결된 메소드들이 있다.
package com.example.board.mapper;

import com.example.board.domain.vo.BoardVO;
import com.example.board.domain.vo.Criteria;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper     //mybatis연결등록(xml id 매핑)
// @Mapper에 작성한 메소드이름과 Mapper.xml에 작성한 Sql id는 일치해야 한다.

//    (mapper.xml -> mapper) -> dao -> service -> Controller
public interface BoardMapper {
//    게시글 목록
    public List<BoardVO> getList(Criteria criteria);
//    List<BoardVO>은 getList라는 기능을 사용했을때 리턴값
//    getList라는 기능을 사용하기 위해 필요한 것이 ()안에 있다
//    Criteria는 페이징 넘버에 필요한것
//    리턴값이 List<BoardVO>인 이유는 게시글 목록을 불러오려면 (boardBno, boardTitle, boardContent,
//    boardWriter, boardRegisterDate, boardUpdateDate) 이 값들이 List형식으로 여러개 있어야 하기 때문이다.

//    게시글 등록
    public void insert(BoardVO boardVO);
//    db에 등록만 하면 되기 때문에 리턴값은 없다(void)
//    insert 즉 게시글 등록을 하기 위해 필요한 것은 (BoardVO boardVO) 즉 BoardVO 값들이다.

//    게시글 상세보기
    public BoardVO get(Long bno);
//    상세보기 페이지는 (boardBno, boardTitle, boardContent,
//    boardWriter, boardRegisterDate, boardUpdateDate) 값들을 리턴하고
//    bno가 필요하다 bno은 게시글의 중복숫자가 나올 수 없다.

//    게시글 삭제
    public int delete(Long bno);
    // int를 쓴 이유는?????????????????????????????????????

//    게시글 수정
    public int update(BoardVO boardVO);
    

//    게시글 전체 개수
    public int getTotal();
}
















