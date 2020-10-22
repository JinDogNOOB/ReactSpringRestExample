package com.yck.wob.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yck.wob.dto.BoardDTO;
import com.yck.wob.dto.UserDTO;
import com.yck.wob.service.BoardService;
import com.yck.wob.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping(value="/admin")
public class AdminController {
    
    @Autowired
    BoardService boardService;

    @Autowired
    UserService userService;

/*
@RequestMapping(value="/{boardNo}/post/{postNo}/sub", method = RequestMethod.PUT)
    private PostSubDTO getSubList(@PathVariable int boardNo, @PathVariable int postNo, HttpServletRequest request, HttpServletResponse response){
        
        response.setStatus(HttpServletResponse.SC_OK);
        return postService.getPostSub(boardNo, postNo);
    }
*/


    // /admin/user
    // 유저목록 *get
    @RequestMapping(value="/user/", method = RequestMethod.GET)
    private List<UserDTO> getUserList(HttpServletRequest request, HttpServletResponse response){
        return null;
    }


    // /admin/user/{num}
    // 유저정보보기 *get
    @RequestMapping(value="/user/{userNo}", method = RequestMethod.GET)
    private UserDTO getUserInfo(@PathVariable int userNo, HttpServletRequest request, HttpServletResponse response){
        return userService.getUserInfo(userNo);
    }
    // 유저정보수정 *put
    @RequestMapping(value="/user/{userNo}", method = RequestMethod.PUT)
    private void modifyUserInfo(@PathVariable int userNo, HttpServletRequest request, HttpServletResponse response){
        // userService.modifyUserInfo(userPassword, userNickname);
        return;
    }
    // 유저차단 *post
    @RequestMapping(value="/user/{userNo}", method = RequestMethod.POST)
    private void blockUser(@PathVariable int userNo, HttpServletRequest request, HttpServletResponse response){
        return;
    }
    // 유저정보삭제 *delete
    @RequestMapping(value="/user/{userNo}", method = RequestMethod.DELETE)
    private void deleteUserInfo(@PathVariable int userNo, HttpServletRequest request, HttpServletResponse response){
        return;
    }


    // /admin/board
    // 게시판목록 *get
    @RequestMapping(value="/board", method = RequestMethod.GET)
    private List<BoardDTO> getBoardList(HttpServletRequest request, HttpServletResponse response){
        response.setStatus(HttpServletResponse.SC_OK);
        return boardService.getBoardList();
    }
    // 게시판추가 *post
    @RequestMapping(value="/board", method = RequestMethod.POST)
    private void makeBoard(HttpServletRequest request, HttpServletResponse response){

        String boardName = request.getParameter("boardName");
        String boardDesc = request.getParameter("boardDesc");
        int userNo = Integer.parseInt(request.getParameter("userNo"));

        
        if (!boardService.askToAddingBoardList(boardName, boardDesc, userNo)){
            response.setStatus(HttpServletResponse.SC_CONFLICT);
            return;
        }
        int boardNo = boardService.getBoardInfoByName(boardName).getBoardNo();
        if (!boardService.addBoardList(boardNo)){
            response.setStatus(HttpServletResponse.SC_CONFLICT);
            return;
        }

        response.setStatus(HttpServletResponse.SC_OK);
        return;
    }

    // 이 밑은 react spa 구축후

    // /admin/board/{boardNo}
    // 게시판정보보기 *get
    // 게시판정보수정 *put
    // 게시판삭제 *delete


    // /admin/board/request
    // 게시판생성요청목록 *get

    // /admin/board/request/{num}
    // 생성요청보기 *get
    // 생성요청수락 *post
    // 생성요청기각! *delete
}