package com.prac.musicdiary.controller;

import com.prac.musicdiary.models.Diary;
import com.prac.musicdiary.models.DiaryRepository;
import com.prac.musicdiary.models.DiaryRequestDto;
import com.prac.musicdiary.service.DiaryService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class DiaryController {
    private final DiaryRepository diaryRepository;
    private final DiaryService diaryService;

    @GetMapping("/diary")
    public List<Diary> getDiary(){
        return diaryRepository.findAll();
    }

    @GetMapping("/diary/{id}")
    public Diary getDiary01(@PathVariable Long id){
        return diaryRepository.findById(id).orElseThrow(
                () -> new NullPointerException("해당 게시글이 존재하지 않습니다.")
        );
    }

    @PostMapping("/diary")
    public Diary createDiary(@RequestBody DiaryRequestDto requestDto){
        Diary diary = new Diary(requestDto);
        return diaryRepository.save(diary);
    }

    @PutMapping("/diary/{id}")
    public Long updateDiary(@PathVariable Long id, @RequestBody DiaryRequestDto requestDto){
        return diaryService.update(id, requestDto);
    }

    @DeleteMapping("/diary/{id}")
    public Long deleteDiary(@PathVariable Long id){
        diaryRepository.deleteById(id);
        return id;
    }

}
