package com.prac.musicdiary.models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Diary {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String weather;

    @Column(nullable = false)
    private String feeling;

    @Column(nullable = false)
    private String contents;

    public Diary(DiaryRequestDto requestDto){
        this.title = requestDto.getTitle();
        this.weather = requestDto.getWeather();
        this.feeling = requestDto.getFeeling();
        this.contents = requestDto.getContents();
    }

    public Long update(DiaryRequestDto requestDto){
        this.title = requestDto.getTitle();
        this.weather = requestDto.getWeather();
        this.feeling = requestDto.getFeeling();
        this.contents = requestDto.getContents();

        return this.id;
    }

}
