package com.yck.wob.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yck.wob.dto.BoardDTO;
import com.yck.wob.dto.PostDTO;
import com.yck.wob.dto.PostSubDTO;
import com.yck.wob.service.BoardService;
import com.yck.wob.service.PostService;
import com.yck.wob.util.UserAuthUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.WebUtils;



@RestController
@RequestMapping(value="/board")
public class BoardController {

    @Autowired
    BoardService boardService;

    @Autowired
    PostService postService;
    

    
@RequestMapping(value="/test/{n}/test", method = RequestMethod.GET)
private Map<String, Object> getTest(@PathVariable int n, HttpServletRequest request, HttpServletResponse response){
    String a = request.getParameter("a");
    String b = request.getParameter("b");
    Map<String, Object> map = new HashMap<String, Object>();
    map.put("a", a);
    map.put("b", b);
    map.put("n", n);
    return map;
}

@RequestMapping(value="/test/{n}/test", method = RequestMethod.POST)
private Map<String, Object> postTest(@PathVariable int n, HttpServletRequest request, HttpServletResponse response){
    String a = request.getParameter("a");
    String b = request.getParameter("b");
    
    Map<String, Object> map = new HashMap<String, Object>();
    map.put("a", a);
    map.put("b", b);
    map.put("n", n);
    return map;
}
    


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
        if(!boardService.askToAddingBoard(boardName, boardDesc, UserAuthUtil.getUserNoFromJws(WebUtils.getCookie(request, "jws").getValue()))){
            response.setStatus(HttpServletResponse.SC_CONFLICT);
            return;
        }
        response.setStatus(HttpServletResponse.SC_OK);
        return;
    }
    // 게시판정보수정요청 put XXXXXXXXXXXX

    // 게시판삭제요청 delete XXXXXXXXXXXX



    // ########### /board/{boardNo}
    // 게시판 정보 가져오기 get
    @RequestMapping(value="/{boardNo}", method = RequestMethod.GET)
    private BoardDTO getBoardDetail(@PathVariable int boardNo, HttpServletRequest request, HttpServletResponse response){
        response.setStatus(HttpServletResponse.SC_OK);
        return boardService.getBoardInfo(boardNo);
    }



    // ############# /board/{boardNo}/post
    // 게시글 리스트 get
    @RequestMapping(value="/{boardNo}/post", method = RequestMethod.GET)
    private List<PostDTO> getPostList(@PathVariable int boardNo, HttpServletRequest request, HttpServletResponse response){
        int index = Integer.parseInt(request.getParameter("index"));
        int listAmount = Integer.parseInt(request.getParameter("listAmount"));
        
        response.setStatus(HttpServletResponse.SC_OK);
        return postService.getPostlists(boardNo, index, listAmount);
    }

    // 게시글 쓰기 post
    @RequestMapping(value="/{boardNo}/post", method = RequestMethod.POST)
    private void addPost(@PathVariable int boardNo, HttpServletRequest request, HttpServletResponse response){
        String postName = request.getParameter("postName");
        String postDesc = request.getParameter("postDesc");
        
        // 로그인 체크 
        if (!UserAuthUtil.validateJwtNStatus(WebUtils.getCookie(request, "jws").getValue(), UserAuthUtil.STATUS_USER)){
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return;
        }

        // 작업
        if (!postService.addPost(postName, postDesc, UserAuthUtil.getUserNoFromJws(WebUtils.getCookie(request, "jws").getValue()), boardNo)){
            response.setStatus(HttpServletResponse.SC_CONFLICT);
            return;
        }

        response.setStatus(HttpServletResponse.SC_OK);
        return;
    }
    


    // ############ /board/{boardNo}/post/{postNo}
    // 게시글보기 get
    @RequestMapping(value="/{boardNo}/post/{postNo}", method = RequestMethod.GET)
    private PostDTO getPostDetail(@PathVariable int boardNo, @PathVariable int postNo, HttpServletRequest request, HttpServletResponse response){
        response.setStatus(HttpServletResponse.SC_OK);
        return postService.getPost(boardNo, postNo);
    }

    // 게시글삭제 delete
    @RequestMapping(value="/{boardNo}/post/{postNo}", method = RequestMethod.DELETE)
    private void deletePost(@PathVariable int boardNo, @PathVariable int postNo, HttpServletRequest request, HttpServletResponse response){
        
        // 로그인 유무 권한 확인
        if (!UserAuthUtil.validateJwtNStatus(WebUtils.getCookie(request, "jws").getValue(), UserAuthUtil.STATUS_USER)){
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return;
        }
        // 쿠키에서 userNo 추출
        int userNo = UserAuthUtil.getUserNoFromJws(WebUtils.getCookie(request, "jws").getValue());
        // 요청 게시글 db에서 추출 
        PostDTO dbPost = postService.getPost(boardNo, postNo);
        // userNo와 owner 비교
        if((dbPost.getPostOwner() == userNo)== false){
            response.setStatus(HttpServletResponse.SC_FORBIDDEN);
            return;
        }

        // 작업
        // 작업은 보류 .. 어떻게 할지 고민좀해보자 deleted로 다 치환해버려!?
        
        response.setStatus(HttpServletResponse.SC_OK);
        return;
    }
    // 게시글수정 put
    @RequestMapping(value="/{boardNo}/post/{postNo}", method = RequestMethod.PUT)
    private void modifyPost(@PathVariable int boardNo, @PathVariable int postNo, HttpServletRequest request, HttpServletResponse response){
        
        String postName = request.getParameter("postName");
        String postDesc = request.getParameter("postDesc");
        // 로그인 유무 권한 확인
        if (!UserAuthUtil.validateJwtNStatus(WebUtils.getCookie(request, "jws").getValue(), UserAuthUtil.STATUS_USER)){
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return;
        }
        // 쿠키에서 userNo 추출
        int userNo = UserAuthUtil.getUserNoFromJws(WebUtils.getCookie(request, "jws").getValue());
        // 요청 게시글 db에서 추출 
        PostDTO dbPost = postService.getPost(boardNo, postNo);
        // userNo와 owner 비교
        if((dbPost.getPostOwner() == userNo)== false){
            response.setStatus(HttpServletResponse.SC_FORBIDDEN);
            return;
        }

        // 작업
        if(!postService.modifyPost(postName, postDesc, postNo, boardNo)){
            response.setStatus(HttpServletResponse.SC_CONFLICT);
            return;
        }

        response.setStatus(HttpServletResponse.SC_OK);
        return;
    }


    // ############ /board/{boardNo}/post/{postNo}/sub
    // 댓글리스트 get
    @RequestMapping(value="/{boardNo}/post/{postNo}/sub", method = RequestMethod.PUT)
    private PostSubDTO getSubList(@PathVariable int boardNo, @PathVariable int postNo, HttpServletRequest request, HttpServletResponse response){
        
        response.setStatus(HttpServletResponse.SC_OK);
        return postService.getPostSub(boardNo, postNo);
        
    }

    // 댓글쓰기 post

    // 댓글수정 put

    // 댓글삭제 delete 




}