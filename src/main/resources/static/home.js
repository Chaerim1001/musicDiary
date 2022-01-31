
$(document).ready(function () {
    $("#diary_0").hide();
    getDiary();
});

function getDiary(){
    $('#diaryList').empty();
    $.ajax({
        type: 'GET',
        url: '/diary',
        success: function (response) {
            console.log(response.length)
            if(response.length <= 0) {
                $("#diary_0").show();
            }
            else {
                $("#diary_0").hide();
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
        <div class="card">
            <div class="card-header">
                ${Diary.modifiedAt}
            </div>
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                    <p>${Diary.title}</p>
                    <footer class="blockquote-footer"> 노래 제목</footer>
                </blockquote>
            </div>
        </div>
    `

}