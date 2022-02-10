package com.prac.musicdiary.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class PageController {

    @GetMapping("/home")
    public String main(){
        return "index.html";
    }

    @GetMapping("/diaryPage")
    public String diary(){
        return "diary.html";
    }

}
