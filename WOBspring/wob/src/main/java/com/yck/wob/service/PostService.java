package com.yck.wob.service;

import com.yck.wob.dao.BoardDao;

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
    

}