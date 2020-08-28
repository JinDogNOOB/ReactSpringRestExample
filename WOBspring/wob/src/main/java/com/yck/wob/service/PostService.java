package com.yck.wob.service;

import java.util.List;

import com.yck.wob.dao.BoardDao;
import com.yck.wob.dto.PostDTO;
import com.yck.wob.dto.PostSubDTO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostService {
    @Autowired
    BoardDao boardDao;

    // 게시글목록에서 게시글 탁 튀어나오고
    // 누르면 게시글 탁 튀어나오고
    // 게시글 튀어나오면 메인글나오고 
    // 댓글 밑에 나오고
    // 서브댓글은 누르면 나오게끔 
    

    // ### 게시글 쓰기
    boolean addPost(String postName, String postDesc, int postOwner, int boardNo){
        PostDTO post = new PostDTO();
        post.setPostName(postName);
        post.setPostDesc(postDesc);
        post.setPostOwner(postOwner);
        post.setBoardNo(boardNo);
        try{
            boardDao.insertPost(post);
        }catch(Exception e){
            e.printStackTrace();
            return false;
        }
        return true;
    }

    // ### 게시글 수정
    boolean modifyPost(String postName, String postDesc, int postNo, int boardNo){

        PostDTO post = new PostDTO();
        post.setPostDesc(postDesc);
        post.setPostName(postName);
        post.setPostNo(postNo);;
        post.setBoardNo(boardNo);
        try{
            boardDao.updatePost(post);
        }catch(Exception e){
            e.printStackTrace();
            return false;
        }
        return true;
    }

    // ### 게시글 목록 보기
    List<PostDTO> getPostlists(int boardNo){
        PostDTO post = new PostDTO();
        post.setBoardNo(boardNo);
        return boardDao.selectPosts(post);
    }
    // ### 게시글 하나 보기
    PostDTO getPost(int boardNo, int postNo){
        PostDTO post = new PostDTO();
        post.setBoardNo(boardNo);
        post.setPostNo(postNo);
        return boardDao.selectPostByNo(post);
    }




    
    // ### 댓글 입력 
    boolean addPostSub(int boardNo, int postSubParentNo, int postNo, String postSubName, String postSubDesc, int postSubOwner){
        PostSubDTO postSub = new PostSubDTO();
        postSub.setBoardNo(boardNo);
        postSub.setPostSubParentNo(postSubParentNo);
        postSub.setPostNo(postNo);
        postSub.setPostSubName(postSubName);
        postSub.setPostSubDesc(postSubDesc);
        postSub.setPostSubOwner(postSubOwner);

        boardDao.insertPostSub(postSub);

        return true;
    }

    // ### 댓글 수정
    boolean addPostSub(int boardNo, int postSubNo, String postSubName, String postSubDesc){
        PostSubDTO postSub = new PostSubDTO();
        postSub.setBoardNo(boardNo);
        postSub.setPostSubNo(postSubNo);
        postSub.setPostSubName(postSubName);
        postSub.setPostSubDesc(postSubDesc);

        boardDao.updatePostSub(postSub);
        return true;
    }



}