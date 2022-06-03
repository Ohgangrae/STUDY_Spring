package com.example.board.service;

import com.example.board.domain.dao.BoardDAO;
import com.example.board.domain.vo.BoardVO;
import com.example.board.domain.vo.Criteria;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service//해당 클래스가 Service라는 것을 알리기 위해서 붙인다
@RequiredArgsConstructor//final 또는 @NonNull이 붙은 필드만 초기화 생성자로 선언
public class BoardServiceImpl implements BoardService{
    private final BoardDAO boardDAO;
    //    (mapper.xml -> mapper) -> (dao -> service) -> Controller

    @Override
    public void register(BoardVO boardVO) {
        boardDAO.register(boardVO);
    }

    @Override
    public BoardVO read(Long boardBno) {
        return boardDAO.read(boardBno);
    }

    @Override
    public boolean modify(BoardVO boardVO) {
        return boardDAO.modify(boardVO);
    }

    @Override
    public boolean remove(Long boardBno) {
        return boardDAO.remove(boardBno);
    }

    @Override
    public List<BoardVO> getList(Criteria criteria) {
        return boardDAO.getList(criteria);
    }

    @Override
    public int getTotal() { return boardDAO.getTotal(); }
}
