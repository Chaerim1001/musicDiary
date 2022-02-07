package com.prac.musicdiary.utils;

import com.prac.musicdiary.models.MusicSearchDto;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;


@Component
public class MusicSearch {
    public String search(String accessToken, String q){

        RestTemplate rest = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + accessToken);;
        headers.add("Host", "api.spotify.com");
        headers.add("Content-type", "application/json");
        String body = "";

        HttpEntity<String> requestEntity = new HttpEntity<String>(body, headers);
        ResponseEntity<String> responseEntity = rest.exchange("https://api.spotify.com/v1/search?type=track&q=" + q, HttpMethod.GET, requestEntity, String.class);
        HttpStatus httpStatus = responseEntity.getStatusCode();
        int status = httpStatus.value(); //상태 코드가 들어갈 status 변수
        String response = responseEntity.getBody();
        System.out.println("Response status: " + status);
        System.out.println(response);

        return response;
    }

    public List<MusicSearchDto> fromJSONtoItems(String result,String q){
        String album;
        String singer;
        String image;
        String url;
        List<MusicSearchDto> searchDtoList = new ArrayList<>();


            JSONObject rjson = new JSONObject(result);
            rjson = rjson.getJSONObject("tracks");
            JSONArray items = rjson.getJSONArray("items");

            for (int i=0;i <items.length();i++){

                JSONObject item = items.getJSONObject(i);

                album = item.getString("name");
                //앨범 이미지
                JSONObject albums = item.getJSONObject("album");
                JSONArray images = albums.getJSONArray("images");
                JSONObject albumimage = images.getJSONObject(2);
                image = albumimage.getString("url");

            //아티스트 이름
                JSONArray artists = item.getJSONArray("artists");
                JSONObject artistname = artists.getJSONObject(0);
                singer = artistname.getString("name");

            //앨범 url
                JSONObject urls = item.getJSONObject("external_urls");
                url = urls.getString("spotify");

                searchDtoList.add(new MusicSearchDto(album,singer,image,url));
        }
        return searchDtoList;
    }

}
