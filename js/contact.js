$(document).ready(function () {
    $('#characterLeft').text('300 Caracteres restando');
    $('#message').keydown(function () {
        var max = 300;
        var len = $(this).val().length;
        if (len >= max) {
            $('#characterLeft').text('Você chegou ao limite');
            $('#characterLeft').addClass('red');
            $('#btnSubmit').addClass('disabled');
        }
        else {
            var ch = max - len;
            $('#characterLeft').text(ch + ' Caracteres restando');
            $('#btnSubmit').removeClass('disabled');
            $('#characterLeft').removeClass('red');
        }
    });
});