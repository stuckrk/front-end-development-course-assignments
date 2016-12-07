$(document).ready(function(){
    $('.error').hide();
    
    var inputGroups = $('.input-group');
    
    evenItems = inputGroups.filter(':even');
    
    evenItems.addClass('even');
    
    $('#firstName').on('blur', errorMessage);
    $('#lastName').on('blur', errorMessage);
    $('#emailAddress').on('blur', errorEmail);
    
    function errorMessage() {
        var input = $(this);
        
        if(input.val() === ''){
            input.closest('div').find('span').fadeIn();
        }else{
            input.closest('div').find('span').fadeOut();
        }
    }
    
    
    function errorEmail() {
        var input = $(this);
        
        if(input.val() === ''){
            input.closest('div').find('.requiredMsg').fadeIn();
        }else{
            input.closest('div').find('.requiredMsg').fadeOut();
        }
        
        if(input.val().indexOf('@') === -1 ||           input.val().indexOf('.com') === -1){
            input.closest('div').find('.emailMsg').fadeIn();
        }else if(input.val()){
            input.closest('div').find('.emailMsg').fadeOut();
        }
    }
    

});