package com.prac.musicdiary.service;

import com.prac.musicdiary.models.Diary;
import com.prac.musicdiary.models.DiaryRepository;
import com.prac.musicdiary.models.DiaryRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
public class DiaryService {

    private final DiaryRepository diaryRepository;

    @Transactional
    public Long update(Long id, DiaryRequestDto requestDto){
        Diary diary = diaryRepository.findById(id).orElseThrow(
                () -> new NullPointerException("해당 아이디가 존재하지 않습니다.")
        );
        return diary.update(requestDto);
    }

}
