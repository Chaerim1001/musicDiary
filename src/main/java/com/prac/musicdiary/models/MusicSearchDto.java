package com.prac.musicdiary.models;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.json.JSONObject;

@Getter
public class MusicSearchDto {
    private String album;
    private String singer;
    private String image;
    private String url;

    public MusicSearchDto(String album, String singer, String image, String url) {
        this.album = album;
        this.singer = singer;
        this.image = image;
        this.url = url;
    }
}
