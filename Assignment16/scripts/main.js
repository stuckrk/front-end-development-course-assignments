$(document).ready(function () {

/// Part 2
    /// 1
    
    $('#btnShow').on('click', update21);
    
    function update21() {
        $('.display-basic').show();
    }
    
    /// 2
    
    $('#btnHide').on('click', update22);
    
    function update22() {
        $('.display-basic').hide();
    }
    
    /// 3
    
    $('#btnToggle').on('click', update23);
    
    function update23() {
        $('.display-basic').toggle();
    }
    
/// Part 3
    
    function showPart3() {
        $('.part3').show("slow");
    }
    
    showPart3();
    
/// Part 4
    
    /// 1
    
    $('#btnFadeIn').on('click', update41);
    
    function update41() {
        $('.display-fade').fadeIn("fast");
    }
    
    /// 2
    
    $('#btnFadeOut').on('click', update42);
    
    function update42() {
        $('.display-fade').fadeOut("slow");
    }
    
    /// 3
    
    $('#btnFadeToggle').on('click', update43);
    
    function update43() {
        $('.display-fade').fadeToggle("fast");
    }
    
/// Part 5
    
    /// 1
    
    $('#btnSlideDown').on('click', update51);
    
    function update51() {
        $('.display-slide').slideDown(1000);
    }
    
    /// 2
    
    $('#btnSlideUp').on('click', update52);
    
    function update52() {
        $('.display-slide').slideUp(500);
    }
    
    /// 3
    
    $('#btnSlideToggle').on('click', update53);
    
    function update53() {
        $('.display-slide').slideToggle(750);
    }
});