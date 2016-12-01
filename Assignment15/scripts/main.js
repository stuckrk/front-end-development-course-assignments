$(document).ready(function(){

    ///Part 1


     $('#btnOne').on('click', update1);

    function update1() {
        return alert('Alert');

    }


    ///Part 2

    $('#btnTwo').on('click', update2);

    function update2() {
        $('.update-html').html('<h3>Hello World!</h3>');
    }

    ///Part 3

    $('#btnThree').on('click', update3);

    function update3() {
        $('#text-update').val("Hello World");
    }

    ///Part 4

<<<<<<< HEAD
    $('#btnCopyHtml').on('click', function() {
        var copiedHtml = $('.copy-html').html();
        $('.paste-html').html(copiedHtml);
    })


    /*
    $('#btnCopyHtml').on('click', update4);

    function update4(){
        var copiedHtml = $('.copy-html').html();
        $('.paste-html').html(copiedHtml);
    }
    */

    ///Part 6

    $('#btnCopyValues').on('click', update6);

    function update6() {
        var copiedValue = $('#copy-text').val();
        $('#paste-text').val(copiedValue);
    }
=======

>>>>>>> uagc-it-readiness/master
});
