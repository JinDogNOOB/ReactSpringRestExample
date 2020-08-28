package com.yck.wob.service;

import java.util.List;

import com.yck.wob.dao.BoardDao;
import com.yck.wob.dto.BoardDTO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BoardService {
    @Autowired
    BoardDao boardDao;

    // 게시판 생성 등등등
    List<BoardDTO> getPermitedBoardList() {
        return boardDao.selectPermitedBoards();
    }
    List<BoardDTO> getBoardList(){
        return boardDao.selectBoards();
    }
    
    boolean requestAddingBoardList(String boardName, String boardDesc, int userNo){
        BoardDTO board = new BoardDTO();
        board.setBoardName(boardName);
        board.setBoardDesc(boardDesc);
        board.setBoardProposer(userNo);
        board.setBoardStatus(0);
        try{
            boardDao.insertBoard(board);
        }catch(Exception e){
            e.printStackTrace();
            return false;
        }
        return true;
    }

    boolean addBoardList(int boardNo){
        BoardDTO board = new BoardDTO();
        board.setBoardNo(boardNo);
        BoardDTO dbBoard = boardDao.selectBoardByNo(board);
        dbBoard.setBoardStatus(20);
        boardDao.updateBoard(dbBoard);

        boardDao.createMainBoard(dbBoard);
        boardDao.createSubBoard(dbBoard);
        return true;

    }

    BoardDTO getBoardInfo(int boardNo){
        BoardDTO board = new BoardDTO();
        board.setBoardNo(boardNo);
        return boardDao.selectBoardByNo(board);
    }




    
    // void requestDelete(){}
}