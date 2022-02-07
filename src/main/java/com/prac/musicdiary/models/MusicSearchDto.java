package com.prac.musicdiary.models;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.json.JSONObject;

@Getter
public class MusicSearchDto {
    private final String album;
    private final String singer;
    private final String image;
    private final String url;

    public MusicSearchDto(String album, String singer, String image, String url) {
        this.album = album;
        this.singer = singer;
        this.image = image;
        this.url = url;
    }
}
