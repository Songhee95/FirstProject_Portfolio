$(document).ready(function(){
    $(function () {
        $("div a").click(function (e) {
          $.scrollTo(this.hash || 0, 1000);
        });
    });
    var w = document.documentElement.clientWidth;
    if(w>992){
        var cardNum = $('.cardHeader');
        var cardBody = $('.card-body');
        cardNum.removeAttr('data-toggle');
        cardBody.removeClass('collapse');
    }
})

