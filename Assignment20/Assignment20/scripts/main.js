$(document).ready(function() {

// Hide Stuff
    $('.error').hide();
    $('.newForm').hide();


// Blur Events 
    $('#yourName').on('blur', validateName);
    $('#yourAnswer').on('blur', validateAnswer);

// Click Events
    $('#btnSubmit').on('click', submitForm);
 //   $('#btnReset').on('click', resetForm);

// Validate Name
    function validateName(){
        var nameElm = $('#yourName');

        var msg = nameElm.closest('.inputGroup').find('.requiredMsg');

        if(nameElm.val() === ''){
            msg.fadeIn();
            nameElm.addClass('invalid');
            return false;
        }else{
            msg.fadeOut();
            nameElm.removeClass('invalid');
            return true;
        }
    };

// Validate Answer
    function validateAnswer(){
        var answerElm = $('#yourAnswer');

        var msg = answerElm.closest('.inputGroup').find('.requiredMsg');

        if(answerElm.val() === ''){
            msg.fadeIn();
            answerElm.addClass('invalid');
            return false;
        }else{
            msg.fadeOut();
            answerElm.removeClass('invalid');
            return true;
        }
    };

// Reset Button 
    $('#btnReset').on('click', function(){
        var input = $(this).closest('.formElements').find('input');
        var input2 = $(this).closest('.formElements').find('textarea');

        var msg = input.closest('.inputGroup').find('.requiredMsg');
        var msg2 = input2.closest('.inputGroup').find('.requiredMsg');

        msg.fadeOut();
        msg2.fadeOut();

        input.removeClass('invalid');
        input2.removeClass('invalid');
    });


// Submit Form 
    function submitForm(){
        if(validateName() === true && validateAnswer() === true){
            var inputName = $('#yourName');
            var first = inputName.get(0);

            var inputAnswer = $('#yourAnswer');
            var second = inputAnswer.get(0);

            var answers = $('#append');
            answers.append('<div class = "clear"></div><hr><li><p>' + second.value + '</p><div class = "userAnswer"><img src="http://lorempixel.com/50/50/people/3"/><h4>' + first.value + '</h4></div></li>');
            
            var activityLog = $('#prepend');
            activityLog.prepend('<li>' + first.value + ' responded </li>');

            inputName.val("");
            inputAnswer.val("");

            var form = $('.formElements');
            form.fadeOut();

            var newForm = $('.newForm');
            newForm.show();
        }else{
            validateName();
            validateAnswer();
        }
    };

// Add Another Answer

    $('#btnNewForm').on('click', function(){
        $('.newForm').hide();
        $('.formElements').fadeIn();
        
    });

});



/*
    // Invalid Form - Input - BLUR
    $('.inputGroup input').on('blur', function(){

        var input = $(this);

        var msg = input.closest('.inputGroup').find('.requiredMsg');

        if(input.val() === ''){
            msg.fadeIn();
            input.addClass('invalid');
        }else{
            msg.fadeOut();
            input.removeClass('invalid');
        }
    });

    // Invalid Form - TextArea - BLUR 
    $('.inputGroup textarea').on('blur', function(){

        var input = $(this);

        var msg = input.closest('.inputGroup').find('.requiredMsg');

        if(input.val() === ''){
            msg.fadeIn();
            input.addClass('invalid');
        }else{
            msg.fadeOut();
            input.removeClass('invalid');
        }
    });

    // Invalid Form - Input - SUBMIT
    $('#btnSubmit').on('click', function(){
        
       var input = $(this).closest('.formElements').find('input');

       var msg = input.closest('.inputGroup').find('.requiredMsg');

       if(input.val() === ''){
            msg.fadeIn();
            input.addClass('invalid');
        }else{
            msg.fadeOut();
            input.removeClass('invalid');
        }
    });

    // Invalid Form - TextArea - SUBMIT
    $('#btnSubmit').on('click', function(){
        
       var input = $(this).closest('.formElements').find('textarea');

       var msg = input.closest('.inputGroup').find('.requiredMsg');

       if(input.val() === ''){
            msg.fadeIn();
            input.addClass('invalid');
        }else{
            msg.fadeOut();
            input.removeClass('invalid');

        }
    });

    // Reset Button 
    $('#btnReset').on('click', function(){
        var input = $(this).closest('.formElements').find('input');
        var input2 = $(this).closest('.formElements').find('textarea');

        var msg = input.closest('.inputGroup').find('.requiredMsg');
        var msg2 = input2.closest('.inputGroup').find('.requiredMsg');

        msg.fadeOut();
        msg2.fadeOut();

        input.removeClass('invalid');
        input2.removeClass('invalid');
    });


    //Hide Error Messages
    $('.error').hide();

// Blur Events 
    $('#yourName').on('blur', validateName);
    $('#yourAnswer').on('blur', validateAnswer);

// Click Events
    $('#btnSubmit').on('click', submitForm);
    $('#btnReset').on('click', resetForm);


// Validate Name
    function validateName(){
        var nameElm = $('#yourName');

        var msg = nameElm.closest('.inputGroup').find('.requiredMsg');

        if(nameElm.val() === ''){
            msg.fadeIn();
            nameElm.addClass('invalid');
        }else{
            msg.fadeOut();
            nameElm.removeClass('invalid');
        }
    };


// Validate Answer
    function validateAnswer(){
        var answerElm = $('#yourAnswer');

        var msg = answerElm.closest('.inputGroup').find('.requiredMsg');

        if(answerElm.val() === ''){
            msg.fadeIn();
            answerElm.addClass('invalid');
        }else{
            msg.fadeOut();
            answerElm.removeClass('invalid');
    };


*/