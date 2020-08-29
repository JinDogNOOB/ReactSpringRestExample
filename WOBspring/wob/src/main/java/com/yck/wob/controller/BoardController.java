package com.yck.wob.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yck.wob.dto.BoardDTO;
import com.yck.wob.service.BoardService;
import com.yck.wob.service.PostService;
import com.yck.wob.util.UserAuthUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.util.WebUtils;



@Controller
@RequestMapping(value="/board")
public class BoardController {

    @Autowired
    BoardService boardService;

    @Autowired
    PostService postService;
    

    /*
@RequestMapping(value="/test", method = RequestMethod.GET)
private String jspTest(HttpServletRequest request, HttpServletResponse response){
    return "test";
}
    */


    // ############### /board/
    // 게시판 목록 get
    @RequestMapping(value="/", method = RequestMethod.GET)
    private List<BoardDTO> getPermitedBoardList(HttpServletRequest request, HttpServletResponse response){
        response.setStatus(HttpServletResponse.SC_OK);
        return boardService.getPermitedBoardList();
    }
    // 게시판생성요청 post
    @RequestMapping(value="/", method = RequestMethod.POST)
    private void requestForAddingBoard(HttpServletRequest request, HttpServletResponse response){
        String boardName = request.getParameter("boardName");
        String boardDesc = request.getParameter("boardDesc");
    
        // 로그인 유무 권한 확인
        if (!UserAuthUtil.validateJwtNStatus(WebUtils.getCookie(request, "jws").getValue(), UserAuthUtil.STATUS_USER)){
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return;
        }
        // 작업
        if(!boardService.requestAddingBoardList(boardName, boardDesc, UserAuthUtil.getUserNoFromJws(WebUtils.getCookie(request, "jws").getValue()))){
            response.setStatus(HttpServletResponse.SC_CONFLICT);
            return;
        }
        response.setStatus(HttpServletResponse.SC_OK);
        return;
    }
    // 게시판정보수정요청 put XXXXXXXXXXXX

    // 게시판삭제요청 delete XXXXXXXXXXXX




    // ############# /board/{boardName}
    // 게시글 리스트 get

    // 게시글 쓰기 post

    


    // ############ /board/{boardName}/{postNo}
    // 게시글보기 get

    // 게시글삭제 delete

    // 게시글수정 put



    // ############ /board/{boardName}/{postNo}/sub
    // 댓글리스트 get
    
    // 댓글쓰기 post

    // 댓글수정 put

    // 댓글삭제 delete




}