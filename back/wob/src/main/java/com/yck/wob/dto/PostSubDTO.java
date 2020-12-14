package com.yck.wob.dto;

public class PostSubDTO {
    private int postSubNo;
    private int postSubParentNo;
    private int postNo;
    private int boardNo;
    private String postSubDesc;
    private int postSubOwner;


    
    public int getPostSubNo() {
        return postSubNo;
    }

    public void setPostSubNo(int postSubNo) {
        this.postSubNo = postSubNo;
    }

    public int getPostSubParentNo() {
        return postSubParentNo;
    }

    public void setPostSubParentNo(int postSubParentNo) {
        this.postSubParentNo = postSubParentNo;
    }

    public String getPostSubDesc() {
        return postSubDesc;
    }

    public void setPostSubDesc(String postSubDesc) {
        this.postSubDesc = postSubDesc;
    }

    public int getPostSubOwner() {
        return postSubOwner;
    }

    public void setPostSubOwner(int postSubOwner) {
        this.postSubOwner = postSubOwner;
    }

    public int getBoardNo() {
        return boardNo;
    }

    public void setBoardNo(int boardNo) {
        this.boardNo = boardNo;
    }

    public int getPostNo() {
        return postNo;
    }

    public void setPostNo(int postNo) {
        this.postNo = postNo;
    }

    
    
}