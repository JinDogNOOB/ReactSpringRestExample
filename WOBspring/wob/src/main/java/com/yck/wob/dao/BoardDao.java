package com.yck.wob.dao;

import java.util.List;

import com.yck.wob.dto.BoardDTO;
import com.yck.wob.dto.PostDTO;
import com.yck.wob.dto.PostSubDTO;
import com.yck.wob.dto.PostwUserDTO;

import org.springframework.stereotype.Repository;


public interface BoardDao {

    // 게시판인덱스 관리
    List<BoardDTO> selectBoards();
    List<BoardDTO> selectPermitedBoards();
    int countBoards();
    BoardDTO selectBoardByNo(BoardDTO boardDTO);
    BoardDTO selectBoardByName(BoardDTO boardDTO);
    int insertBoard(BoardDTO boardDTO);
    int updateBoard(BoardDTO boardDTO);
    void deleteBoard(BoardDTO boardDTO);

    // 게시판 테이블 생성
    void createMainBoard(BoardDTO boardDTO);
    // 게시판댓글테이블 생성
    void createSubBoard(BoardDTO boardDTO);

    // 게시글
    List<PostwUserDTO> selectPosts(PostDTO postDTO);
    int countPosts(PostDTO postDTO);
    PostDTO selectPostByNo(PostDTO postDTO);
    int insertPost(PostDTO postDTO);
    int updatePost(PostDTO postDTO);
    void deletePost(PostDTO postDTO);

    // 게시글 댓글
    List<PostSubDTO> selectPostSubs(PostSubDTO postSubDTO);
    int countPostSubs(PostSubDTO postSubDTO);
    PostSubDTO selectPostSubByNo(PostSubDTO postSubDTO);
    int insertPostSub(PostSubDTO postSubDTO);
    int updatePostSub(PostSubDTO postSubDTO);
    void deletePostSub(PostSubDTO postSubDTO);

    
}