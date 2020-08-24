package com.yck.wob.controller;

import javax.servlet.http.HttpServletRequest;

import com.yck.wob.dao.UserDao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class TestController {
    @Autowired
    UserDao userDao;
    
@RequestMapping(value="/test", method = RequestMethod.GET)
private String jspTest(HttpServletRequest request){
    return "test";
}

    
}