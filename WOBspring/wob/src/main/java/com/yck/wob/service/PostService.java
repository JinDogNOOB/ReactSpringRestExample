package com.yck.wob.service;

import java.util.List;

import com.yck.wob.dao.BoardDao;
import com.yck.wob.dto.PostDTO;
import com.yck.wob.dto.PostSubDTO;
import com.yck.wob.dto.PostwUserDTO;

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
    public boolean addPost(String postName, String postDesc, int postOwner, int boardNo){
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
    public boolean modifyPost(String postName, String postDesc, int postNo, int boardNo){

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

    /**
     * @param boardNo 게시판번호
     * @param index 인덱스번호
     * @param listAmount 가져올 개수
     * @return
     */
    public List<PostwUserDTO> getPostlists(int boardNo, int index, int listAmount){
        PostDTO post = new PostDTO();
        post.setBoardNo(boardNo);
        post.setIndex(index);
        post.setListAmount(listAmount);
        post.calcStartingIndex();

        return boardDao.selectPosts(post);
    }
    // ### 게시글 하나 보기
    public PostDTO getPost(int boardNo, int postNo){
        PostDTO post = new PostDTO();
        post.setBoardNo(boardNo);
        post.setPostNo(postNo);
        return boardDao.selectPostByNo(post);
    }



    // ################################ 댓글 #############

    // ### 댓글 입력 
    public boolean addPostSub(int boardNo, int postSubParentNo, int postNo, String postSubDesc, int postSubOwner){
        PostSubDTO postSub = new PostSubDTO();
        postSub.setBoardNo(boardNo);
        postSub.setPostSubParentNo(postSubParentNo);
        postSub.setPostNo(postNo);
        postSub.setPostSubDesc(postSubDesc);
        postSub.setPostSubOwner(postSubOwner);

        boardDao.insertPostSub(postSub);

        return true;
    }


/**
 * 댓글 수정
 * @param boardNo 게시판 번호
 * @param postSubNo 댓글 번호
 * @param postSubDesc // 댓글 내용
 * @param postSubOwner // 댓글 주인 id
 * @return
 */
    public boolean modifyPostSub(int boardNo, int postSubNo, String postSubDesc, int postSubOwner){
        PostSubDTO postSub = new PostSubDTO();
        postSub.setBoardNo(boardNo);
        postSub.setPostSubNo(postSubNo);
        postSub.setPostSubDesc(postSubDesc);
        postSub.setPostSubOwner(postSubOwner);
        
        // 소유자 체크
        PostSubDTO dbPostSub = boardDao.selectPostSubByNo(postSub);
        if(dbPostSub.getPostSubOwner() == postSubOwner) boardDao.updatePostSub(postSub);
        else return false;
        return true;
    }

    // ### 댓글 여러개 가져오기
    public List<PostSubDTO> getPostSubs(int boardNo, int postNo){
        PostSubDTO postSubDTO = new PostSubDTO();
        postSubDTO.setBoardNo(boardNo);
        postSubDTO.setPostNo(postNo);
        return boardDao.selectPostSubs(postSubDTO);
    }
    
    /**
     * 댓글 삭제
     * @param boardNo 게시판 번호
     * @param postSubNo 댓글 번호
     * @param postSubOwner 댓글 주인 id
     * @return
     */
    public boolean deletePostSub(int boardNo, int postSubNo, int postSubOwner){
        PostSubDTO postSubDTO = new PostSubDTO();
        postSubDTO.setBoardNo(boardNo);
        postSubDTO.setPostSubNo(postSubNo);
        postSubDTO.setPostSubOwner(postSubOwner);

        
        // 소유자 체크 후 작업
        PostSubDTO dbPostSub = boardDao.selectPostSubByNo(postSubDTO);
        if(dbPostSub.getPostSubOwner() == postSubOwner) boardDao.deletePostSub(postSubDTO);
        else return false;
        return true;
    }


}