//Data Access Object
//dao 쓰는 이유??

package com.example.board.domain.dao;

import com.example.board.domain.vo.BoardVO;
import com.example.board.domain.vo.Criteria;
import com.example.board.mapper.BoardMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository                 //dao라는 걸  인식시켜주기 위해서
@RequiredArgsConstructor    // final 또는 @NonNull이 붙은필드만 초기화 생성자로 선언
public class BoardDAO {
    private final BoardMapper boardMapper;
//    mapper와 연결해주기 위해 객체선언 / 값변경을 안하기 위해 final
//    mapper.xml -> (mapper -> dao) -> service -> Controller

//    BoardDao에서 메소드 명을 바꿔준다.
//    이유는는?

    public List<BoardVO> getList(Criteria criteria) {
        return boardMapper.getList(criteria);
    }

    public void register(BoardVO boardVO) {
        boardMapper.insert(boardVO);
    }

    public BoardVO read(Long bno) {
        return boardMapper.get(bno);
    }

    public boolean remove(Long bno) {
        return boardMapper.delete(bno) != 0;
    }

    public boolean modify(BoardVO boardVO) {
        return boardMapper.update(boardVO) != 0;
    }

    public int getTotal() {
        return boardMapper.getTotal();
    }
}




