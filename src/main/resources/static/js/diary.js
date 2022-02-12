let musicResponse;
let count = -1;

$(document).ready(function () {
    $("#musicCard").hide();
});


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

function isValidWeather(weather) { //날씨 확인 함수
    if (weather === '') {
        alert('오늘의 날씨를 입력해주세요');
        return false;
    }
    return true;
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

    //날씨 확인
    let weather = $('#weather').val();
    if(!isValidWeather(weather))
        return;
    
    if(count < 0) { // count가 음수라는 것은 음악을 선택하지 않았다는 뜻
        alert("오늘의 음악을 선택해주세요.")
        return;
    }
    
    let data = {
        "title": title,
        "contents": contents,
        "weather": weather,
        "album": musicResponse[count].album,
        "singer": musicResponse[count].singer,
        "image": musicResponse[count].image,
        "url": musicResponse[count].url
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

function isValidWord(word){
    if(word === ''){
        alert('검색어를 입력해주세요');
        return false;
    }
    return true;
}

function activeModal(){
    let word = $('#searchWord').val();
    if(!isValidWord(word))
        return;

    $('#modalHeader').append(addModal(word));

    searchMusic(word);
    $('.modal').addClass('active');
}

function inactiveModal(){
    $('.modal').removeClass('active');
}


function searchMusic(word){

    $('.list-group').empty();

    $.ajax({
        type: "GET",
        url: `/search?query=${word}`,
        success: function(response){
            musicResponse = response;
            for(let i=0; i<response.length; i++){
                let searchDto = response[i];
                let tempHtml = addMusicHtml(searchDto, i);
                $('.list-group').append(tempHtml);
            }
        }
    })
}

function addMusicHtml(searchDto, i){
    return ` <li class="list-group-item">
                <input class="form-check-input me-1" type="radio" name="musicSelect" value="${i}">
                <img src="${searchDto.image}"><b> ${searchDto.singer} ${searchDto.album}</b>
                <a href="${searchDto.url}" target="_blank">
                    <button type="button" class="btn btn-secondary m-lg-2"> 미리보기</button>
                </a> 
          </li>`
}

function addModal(word){
    $('#modalHeader').empty();
    return `
    <h5 class="modal-title">"${word}"에 대한 결과입니다.</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onclick="inactiveModal()"></button>
    `
}

function selectMusic(){

    count = $("input[name='musicSelect']:checked").val();
    $('#musicCard').append(addMusic(musicResponse[count]));
    $('#musicCard').show();
    $('.modal').removeClass('active');
}


function addMusic(searchDto){
    $('#musicCard').empty();
    return `
     <div class="card-body">
     <img src="${searchDto.image}">
      <b> ${searchDto.singer}   ${searchDto.album} </b>
      </div>`
}


function updateDiary(id){
    //다이어리 수정

    let data = {
        "title": $('#title').val(),
        "contents": $('#contents').val(),
        "weather": $('#weather').val(),
        "album": musicResponse[count].album,
        "singer": musicResponse[count].singer,
        "image": musicResponse[count].image,
        "url": musicResponse[count].url
    }

    $.ajax({
        type: "PUT",
        url: `/diary/${id}`,
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (response) {
            alert('기록이 수정되었습니다.');
            window.location.reload();
        }
    })
}