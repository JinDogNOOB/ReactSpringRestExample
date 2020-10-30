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
    /** 
     * status 20~30의 게시판을 가져온다
    */
    public List<BoardDTO> getPermitedBoardList() {
        return boardDao.selectPermitedBoards();
    }
    public List<BoardDTO> getBoardList(){
        return boardDao.selectBoards();
    }
    /**
     * 게시판 생성 요청 
     * @param boardName
     * @param boardDesc
     * @param userNo
     * @return boardStatus가 0인 게시판 정보 생성(허가필요)
     */
    public boolean askToAddingBoard(String boardName, String boardDesc, int userNo){
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

    /**
     * 허가가 필요한 게시판을 실제 생성 - create 테이블까지 해줌
     * @param boardNo 요청게시판의 boardNo
     * @return
     */
    public boolean createAskedBoard(int boardNo){
        BoardDTO board = new BoardDTO();
        board.setBoardNo(boardNo);
        BoardDTO dbBoard = boardDao.selectBoardByNo(board);
        dbBoard.setBoardStatus(20);
        boardDao.updateBoard(dbBoard);

        boardDao.createMainBoard(dbBoard);
        boardDao.createSubBoard(dbBoard);
        return true;
    }
    /**
     * Admin용
     * 그냥 게시판정보랑 실제 post sub 테이블 생성
     * 야야야야야야 이거 create 테이블할때 boardNo 필수니까 
     * 일단 select를 하든 생긴거에서 바로 boardNo를 받아오든해서 다음으로 넘어가라 아아아아
     * 이거 수정필요 아아아아아 
     * @return
     */
    public boolean createBoard(String boardName, String boardDesc, int userNo){
        BoardDTO board = new BoardDTO();
        board.setBoardName(boardName);
        board.setBoardDesc(boardDesc);
        board.setBoardProposer(userNo);
        board.setBoardStatus(20);
        try{
            boardDao.insertBoard(board);
            boardDao.createMainBoard(board);
            boardDao.createSubBoard(board);
        }catch(Exception e){
            e.printStackTrace();
            return false;
        }
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