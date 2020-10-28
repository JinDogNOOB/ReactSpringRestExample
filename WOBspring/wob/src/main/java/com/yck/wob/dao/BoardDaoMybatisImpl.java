package com.yck.wob.dao;

import java.util.List;

import com.yck.wob.dto.BoardDTO;
import com.yck.wob.dto.PostDTO;
import com.yck.wob.dto.PostSubDTO;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class BoardDaoMybatisImpl implements BoardDao {

    @Autowired
    private SqlSession sqlSession;

        private static final String namespace = "BoardMapper";

       // 게시판인덱스 관리
        @Override
        public List<BoardDTO> selectBoards(){
        return sqlSession.selectList(namespace + ".selectBoards");
       }
       @Override
       public List<BoardDTO> selectPermitedBoards(){
        return sqlSession.selectList(namespace + ".selectPermitedBoards");
       }
       @Override
       public int countBoards(){
        return sqlSession.selectOne(namespace + ".countBoards");
       }
       @Override
       public BoardDTO selectBoardByNo(BoardDTO boardDTO){
        return sqlSession.selectOne(namespace + ".selectBoardByNo", boardDTO);
       }
       @Override
       public BoardDTO selectBoardByName(BoardDTO boardDTO){
        return sqlSession.selectOne(namespace + ".selectBoardByName", boardDTO);
       }
       @Override
       public int insertBoard(BoardDTO boardDTO){
        return sqlSession.insert(namespace + ".insertBoard", boardDTO);
       }
       @Override
       public int updateBoard(BoardDTO boardDTO){
        return sqlSession.update(namespace + ".updateBoard", boardDTO);
       }
       @Override
       public void deleteBoard(BoardDTO boardDTO){
        sqlSession.delete(namespace + ".deleteBoard", boardDTO);
       }

   
       // 게시판 테이블 생성
       @Override
       public void createMainBoard(BoardDTO boardDTO){
        sqlSession.update(namespace + ".createMainBoard", boardDTO);
       }
       // 게시판댓글테이블 생성
       @Override
       public void createSubBoard(BoardDTO boardDTO){
        sqlSession.update(namespace + ".createSubBoard", boardDTO);
       }
   
       // 게시글
       @Override
       public List<PostDTO> selectPosts(PostDTO postDTO){
        return sqlSession.selectList(namespace + ".selectPosts", postDTO);
       }
       @Override
       public int countPosts(PostDTO postDTO){
        return sqlSession.selectOne(namespace + ".countPosts",postDTO);
       }
       @Override
       public PostDTO selectPostByNo(PostDTO postDTO){
        return sqlSession.selectOne(namespace + ".selectPostByNo",postDTO);
       }
       @Override
       public int insertPost(PostDTO postDTO){
        return sqlSession.insert(namespace + ".insertPost",postDTO);
       }
       @Override
       public int updatePost(PostDTO postDTO){
        return sqlSession.update(namespace + ".updatePost",postDTO);
       }
       @Override
       public void deletePost(PostDTO postDTO){
        sqlSession.delete(namespace + ".deletePost",postDTO);
       }
   
       // 게시글 댓글
       @Override
       public List<PostSubDTO> selectPostSubs(PostSubDTO postSubDTO){
        return sqlSession.selectList(namespace + ".selectPostSubs", postSubDTO);
       }
       @Override
       public int countPostSubs(PostSubDTO postSubDTO){
        return sqlSession.selectOne(namespace + ".countPostSubs", postSubDTO);
       }
       @Override
       public PostSubDTO selectPostSubByNo(PostSubDTO postSubDTO){
        return sqlSession.selectOne(namespace + ".selectPostSubByNo", postSubDTO);
       }
       @Override
       public int insertPostSub(PostSubDTO postSubDTO){
        return sqlSession.insert(namespace + ".insertPostSub", postSubDTO);
       }
       @Override
       public int updatePostSub(PostSubDTO postSubDTO){
        return sqlSession.update(namespace + ".updatePostSub", postSubDTO);
       }
       @Override
       public void deletePostSub(PostSubDTO postSubDTO){
        sqlSession.delete(namespace + ".deletePostSub", postSubDTO);
       }
    
}