package com.prac.musicdiary;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class MusicDiaryApplication {

    public static void main(String[] args) {
        SpringApplication.run(MusicDiaryApplication.class, args);
    }

}
