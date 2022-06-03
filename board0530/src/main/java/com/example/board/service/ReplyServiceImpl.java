package com.example.board.service;

import com.example.board.domain.dao.BoardDAO;
import com.example.board.domain.vo.BoardVO;
import com.example.board.domain.vo.Criteria;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

//@Service
//@RequiredArgsConstructor
//public class ReplyServiceImpl implements ReplyService{
//    private final ReplyDAO replyDAO;
//
//    @Override
//    public void register(ReplyDAO replyVO) {
//        replyDAO.register(replyVO);
//    }
//
//    @Override
//    public ReplyDAO read(Long boardBno) {
//        return boardDAO.read(boardBno);
//    }
//
//    @Override
//    public boolean modify(ReplyDAO boardVO) {
//        return boardDAO.modify(boardVO);
//    }
//
//    @Override
//    public boolean remove(Long boardBno) {
//        return boardDAO.remove(boardBno);
//    }
//
//    @Override
//    public List<ReplyDAO> getList(Criteria criteria) {
//        return boardDAO.getList(criteria);
//    }
//
//    @Override
//    public int getTotal() { return boardDAO.getTotal(); }
//}

