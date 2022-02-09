$(document).ready(function () {
    $("#empty_diary").hide();
    $("#diaryList").hide();
    // $("#diaryPage").hide();
    getDiary();
});

function getDiary(){
    $('#diaryList').empty();
    $.ajax({
        type: 'GET',
        url: '/diary',
        success: function (response) {
            if(response.length <= 0) {
                $("#empty_diary").show();
            }
            else {
                $("#empty_diary").hide();
                $("#diaryList").show();
                for(let i = 0; i < response.length; i++){
                    let Diary = response[i];
                    let tempHtml = addHtml(Diary);
                    $('#diaryList').append(tempHtml);
                }
            }
        }
    })
}

function addHtml(Diary){
    let modifiedTime = Diary.modifiedAt;
    let time = modifiedTime.split("T");

    return `
        <div class="card border-dark mb-3" style="max-width: 18rem;">
                        <div class="card-header">${time[0]}</div>
                        <div class="card-body text-dark">
                            <h5 class="card-title">${Diary.title}</h5>
                            <p class="card-text">${Diary.singer} - ${Diary.album}</p>
                            <button type="button" class="btn btn-outline-secondary" onclick="getDiaryPage(${Diary.id})">기록보기</button>
                        </div>
                    </div>
    `
}

//기록 하나를 가져오는 함수
function getDiaryPage(id){
    $("#diaryList").hide();
    $('#diaryPage').empty();

    $.ajax({
        type: "GET",
        url: `/diary/${id}`,
        success: function(response){
            let tempHtml = addPage(response);
            $('#diaryPage').append(tempHtml);
        }
    })
    $('#diaryPage').show();
}

function addPage(Diary){
    let modifiedTime = Diary.modifiedAt;
    let time = modifiedTime.split("T");
    let year = (time[0].split("-"))[0];
    let month = (time[0].split("-"))[1];
    let day = (time[0].split("-"))[2];
    return `
          <div class="text-center my-5">
                    <h1 class="fs-3 fw-bolder m-3">${year}년 ${month}월 ${day}일 나의 하루</h1>
                </div>

                <div class="card mb-3" >
                    <div class="card-body">
                        ${Diary.title}
                    </div>
                </div>

                <div class="card mb-3" >
                    <div class="card-body">
                         ${Diary.weather}
                    </div>
                </div>

                <div class="card mb-3" >
                    <div class="card-body">
                        <img src="${Diary.image}">
                         ${Diary.singer} - ${Diary.album}
                    </div>
                </div>

                <div class="card mb-3" >
                    <div class="card-body">
                         ${Diary.contents}
                    </div>
                </div>
                <button type="button" class="btn btn-outline-secondary mt-3" onclick="updateDiary(${Diary.id})">수정하기</button>
                <button type="button" class="btn btn-outline-secondary mt-3" onclick="deleteDiary(${Diary.id})">삭제하기</button>
    `
}
function updateDiary(id){
    //다이어리 수정
}

function deleteDiary(id){
    //다이어리 삭제
}