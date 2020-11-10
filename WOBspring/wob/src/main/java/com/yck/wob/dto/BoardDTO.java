package com.yck.wob.dto;

public class BoardDTO extends IndexDTO{
    private int boardNo;
    private String boardName;
    private String boardDesc;
    private int boardProposer;
    private int boardStatus;

    public int getBoardNo() {
        return boardNo;
    }

    public void setBoardNo(int boardNo) {
        this.boardNo = boardNo;
    }

    public String getBoardName() {
        return boardName;
    }

    public void setBoardName(String boardName) {
        this.boardName = boardName;
    }

    public String getBoardDesc() {
        return boardDesc;
    }

    public void setBoardDesc(String boardDesc) {
        this.boardDesc = boardDesc;
    }

    public int getBoardProposer() {
        return boardProposer;
    }

    public void setBoardProposer(int boardProposer) {
        this.boardProposer = boardProposer;
    }

    public int getBoardStatus() {
        return boardStatus;
    }

    public void setBoardStatus(int boardStatus) {
        this.boardStatus = boardStatus;
    }

    
}