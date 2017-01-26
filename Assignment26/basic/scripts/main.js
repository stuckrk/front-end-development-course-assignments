$(document).ready(function(){

    $("#btnShowModal").on('click', showModal);

    function showModal(){
        $('.overlay').fadeIn();
        $('.modal').slideDown();

        $('#btnClose').on('click', hideModal);
        $('.overlay').on('click', hideModal);
    }

    function hideModal(){
        $('.overlay').fadeOut();
        $('.modal').slideUp();

        $('#btnClose').off('click', hideModal);
        $('.overlay').off('click', hideModal);
    }

});