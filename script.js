$('form').submit(function(event) {

    // get the form data
    var formData = {
        'name' : $('input[name=name]').val(),
        'email' : $('input[name=email]').val(),
    };

    // process the form
    $.ajax({
        type : 'POST',
        url : 'newaccount.html',
        data : formData,
        dataType : 'json',
        encode: true
    })
        // using the done promise callback
        .done(function(data) {
            // log data to the console so we can see
            console.log(data);
        });
    event.preventDefault();
});