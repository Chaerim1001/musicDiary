package com.prac.musicdiary.controller;


import com.prac.musicdiary.models.MusicSearchDto;
import com.prac.musicdiary.utils.CreateToken;
import com.prac.musicdiary.utils.MusicSearch;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class MusicSearchController {

    private final CreateToken createToken;
    private final MusicSearch musicSearch;

    @GetMapping("/search")
    public List<MusicSearchDto> search(@RequestParam String query){
        String accesstoken = createToken.accesstoken();
        String result = musicSearch.search(accesstoken, query);
        return musicSearch.fromJSONtoItems(result, query);
    }

}
