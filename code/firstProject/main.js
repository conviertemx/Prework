$('#form').on('submit',function(e){
    e.preventDefault()
    var password = $('#password').val()
    var password2 = $('#password2').val()

    if(password.length < 6){
        $('#passError').text('Tu password debe tener mínimo 6 caracteres')
        $('#passError').addClass('rojo')
        $('#password').outline
    }else{
        $('#passError').text('')
        $('#passError').removeClass('rojo')
    }
})

// Los passwords deben coincidir
if(password !== password2){
    $('#error').text('tus password no ocinciden')
    $('#error').addClass('rojo')
}else{
    
}

