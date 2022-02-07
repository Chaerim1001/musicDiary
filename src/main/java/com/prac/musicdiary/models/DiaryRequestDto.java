package com.prac.musicdiary.models;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class DiaryRequestDto {
    private final String title;
    private final String weather;
    private final String contents;
    private final String album;
    private final String singer;
    private final String image;
    private final String url;
}
