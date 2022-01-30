package com.prac.musicdiary.models;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class DiaryRequestDto {
    private final String title;
    private final String weather;
    private final String feeling;
    private final String contents;
}
