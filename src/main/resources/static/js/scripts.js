
$(document).ready(function () {
    $("#empty_diary").hide();
    $("#diaryList").hide();
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
    return `
        <div class="card mb-4" style="width: 38rem;">
            <img src="${Diary.image}" class="card-img-top" alt="..." width="64px">
                <div class="card-body">
                    <p class="card-text">${Diary.title}</p>
                    <p>${Diary.modifiedAt}</p>
                </div>
        </div>
    `
}