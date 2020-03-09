$('#contact-form').submit(function(e){
    const name = document.getElementById('name'),
        email = document.getElementById('email'),
        content = document.getElementById('content');
})

if(!name.value || !email.value || !content.value){
    /*alertify.error('Wszystkie pola muszą być uzupełnione!')
    window.alert('Wszystkie pola muszą być uzupełnione!')*/
}else {

    $.ajax({
        url: "https://formspree.io/patrykyrtap@o2.pl",
        method: "POST",
        data: $(this).serialize(),
        dataType: "json"
    });

    e.preventDefault();
    $(this).get(0).reset();
    alertify.success('Wiadomość została wysłana!');
}