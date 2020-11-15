$(document).ready(function(){
    $(document).on('mouseup',function(){
        setTimeout(function(){
            let width = $("#w").outerWidth();
            let height = $("#w").outerHeight();
            console.log(`up : ${width}, ${height}`);
            $("#w").width(500);
        },0.001);
    })
    $(document).on("mouseup",".panel window panel-htop",function(event){
        // 동적으로 여러 태그가 생성된 경우라면 이런식으로 클릭된 객체를 this 키워드를 이용해서 잡아올 수 있다.
        console.log($(e.target).text());
      });


})

