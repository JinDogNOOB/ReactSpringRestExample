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
    public List<BoardDTO> getPermitedBoardList() {
        return boardDao.selectPermitedBoards();
    }
    public List<BoardDTO> getBoardList(){
        return boardDao.selectBoards();
    }
    
    public boolean askToAddingBoardList(String boardName, String boardDesc, int userNo){
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

    public boolean addBoardList(int boardNo){
        BoardDTO board = new BoardDTO();
        board.setBoardNo(boardNo);
        BoardDTO dbBoard = boardDao.selectBoardByNo(board);
        dbBoard.setBoardStatus(20);
        boardDao.updateBoard(dbBoard);

        boardDao.createMainBoard(dbBoard);
        boardDao.createSubBoard(dbBoard);
        return true;

    }

    public BoardDTO getBoardInfo(int boardNo){
        BoardDTO board = new BoardDTO();
        board.setBoardNo(boardNo);
        return boardDao.selectBoardByNo(board);
    }

    public BoardDTO getBoardInfoByName(String boardName){
        BoardDTO board = new BoardDTO();
        return boardDao.selectBoardByName(board);
    }




    
    // void requestDelete(){}
}