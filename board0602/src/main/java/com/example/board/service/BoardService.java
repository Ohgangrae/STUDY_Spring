package com.example.board.service;

import com.example.board.domain.vo.BoardVO;
import com.example.board.domain.vo.Criteria;
import org.springframework.stereotype.Service;

import java.util.List;
//    mapper.xml -> mapper -> dao -> service -> Controller

@Service
//해당 클래스가 Service라는 것을 알리기 위해서 붙인다
public interface BoardService {

    public void register(BoardVO boardVO);          //등록
    public BoardVO read(Long boardBno);             //상세보기
    public boolean modify(BoardVO boardVO);         //수정
    public boolean remove(Long boardBno);           //삭제
    public List<BoardVO> getList(Criteria criteria);//목록
    public int getTotal();                          //전체개수
}
