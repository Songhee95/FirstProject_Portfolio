$(document).ready(function(){
    $(function () {
        $("div a").click(function (e) {
          $.scrollTo(this.hash || 0, 1000);
        });
    });
    var w = document.documentElement.clientWidth;
    var cardNum = $('.cardHeader');
    var cardBody = $('.card-body');
    var myPic = $('#myImage');
    if(w>992){
        cardNum.removeAttr('data-toggle');
        cardBody.removeClass('collapse');
        myPic.attr('src', "./assets/images/songhee2.jpg")
    }else{
        cardNum.attr('data-toggle');
        cardBody.addClass('collapse');
    }
})

