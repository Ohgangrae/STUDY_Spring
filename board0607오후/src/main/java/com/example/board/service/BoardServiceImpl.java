package com.example.board.service;

import com.example.board.domain.dao.BoardDAO;
import com.example.board.domain.vo.BoardVO;
import com.example.board.domain.vo.Criteria;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BoardServiceImpl implements BoardService {
    private final BoardDAO boardDAO;

    @Override
//    하나의 트랜잭션의 여러 개의 DML이 있을 경우 한 개라도 오류 시 전체 ROLLBACK
    @Transactional(rollbackFor = Exception.class)

    public void register(BoardVO boardVO) {
//        게시글 추가
        boardDAO.register(boardVO);
//        게시글에 업로드된 첨부파일 정보 중 게시글 번호를 따로 추가
        boardVO.getFilelist().forEach(fileVO -> {
            fileVO.setBoardBno(boardVO.getBoardBno());
            fileDAO.register(fileVO);
        });

    }

    @Override
    public BoardVO read(Long boardBno) {
        return boardDAO.read(boardBno);
    }

    @Override
    public boolean modify(BoardVO boardVO) {
        fileDAO.remove();
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
    public int getTotal() {
        return boardDAO.getTotal();
    }
}
