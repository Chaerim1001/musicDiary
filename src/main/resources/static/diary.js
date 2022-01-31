function isValidTitle(title){ //제목 확인 함수
    if(title === ''){
        alert('오늘의 한문장을 입력해주세요');
        return false;
    }
    if (title.trim().length > 20) {
        alert('오늘의 한문장은 공백 포함 20자 이하로 입력해주세요');
        return false;
    }
    return true;
}

function isValidContents(contents) { //내용 확인 함수
    if (contents === '') {
        alert('내용을 입력해주세요');
        return false;
    }
    if (contents.trim().length > 140) {
        alert('내용은 공백 포함 140자 이하로 입력해주세요');
        return false;
    }
    return true;
}

function isValidfeeling(feeling) { //기분 확인 함수
    if (feeling === '') {
        alert('오늘의 기분을 입력해주세요.');
        return false;
    }
    return true;
}

function isValidWeather(weather) { //날씨 확인 함수
    if (weather === '') {
        alert('오늘의 날씨를 입력해주세요');
        return false;
    }
    return true;
}

function imgClick(){

}


function writeDiary(){ //일기 posting
    //일기 제목 확인
    let title = $('#title').val();
    if(!isValidTitle(title))
        return;

    //일기 내용 확인
    let contents = $('#contents').val();
    if(!isValidContents(contents))
        return;

    //기분 확인
    let feeling = $('#feeling').val();
    if(!isValidfeeling(feeling))
        return;

    //날씨 확인
    let weather = $('#weather').val();
    if(!isValidWeather(weather))
        return;

    let data = {
        "title": title,
        "contents": contents,
        "feeling": feeling,
        "weather": weather,
    }

    $.ajax({
        type: "POST",
        url: "/diary",
        contentType: "application/json", // JSON 형식으로 전달함을 알리기
        data: JSON.stringify(data),
        success: function (response) {
            alert('오늘의 하루가 기록되었습니다.');
            window.location.reload(); //새로고침
        }
    });
}