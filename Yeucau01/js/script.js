let userID = document.querySelector('#txtUserID')
userID.addEventListener('focusout', leaveUserId)

function leaveUserId(){
    var userIDRegex = /^[a-zA-Z0-9]{5,12}$/
    if(userIDRegex.test(userID.value)){
        statusOfUserID.textContent = 'UserID hợp lệ'
        statusOfUserID.style.color = 'blue'
    }
    else{
        statusOfUserID.textContent = 'UserID không hợp lệ. Độ dài từ 5 - 12'
        statusOfUserID.style.color = 'red'
    }
}

let Password = document.querySelector('#txtPassword')
Password.addEventListener('focusout', leavePassword)

function leavePassword(){
    var PasswordRegex = /^[a-zA-Z0-9]{7,12}$/
    if(PasswordRegex.test(Password.value)){
        statusOfPassword.textContent = 'Password hợp lệ'
        statusOfPassword.style.color = 'blue'
    }
    else{
        statusOfPassword.textContent = 'Password không hợp lệ. Độ dài từ 7 - 12'
        statusOfPassword.style.color = 'red'
    }
}

let Name = document.querySelector('#txtName')
Name.addEventListener('focusout', leaveName)

function leaveName(){
    var NameRegex = /^[a-zA-Z]+$/
    if(NameRegex.test(Name.value)){
        statusOfName.textContent = 'Name hợp lệ'
        statusOfName.style.color = 'blue'
    }
    else{
        statusOfName.textContent = 'Name không hợp lệ.'
        statusOfName.style.color = 'red'
    }
}

let Zipcode = document.querySelector('#txtZipcode')
Zipcode.addEventListener('focusout', leaveZipcode)

function leaveZipcode(){
    var ZipcodeRegex = /^[0-9]+$/
    if(ZipcodeRegex.test(Zipcode.value)){
        statusOfZipcode.textContent = 'Zipcode hợp lệ'
        statusOfZipcode.style.color = 'blue'
    }
    else{
        statusOfZipcode.textContent = 'Zipcode không hợp lệ.'
        statusOfZipcode.style.color = 'red'
    }
}

let Email = document.querySelector('#txtEmail')
Email.addEventListener('focusout', leaveEmail)

function leaveEmail(){
    var EmailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    if(EmailRegex.test(Email.value)){
        statusOfEmail.textContent = 'Email hợp lệ'
        statusOfEmail.style.color = 'blue'
    }
    else{
        statusOfEmail.textContent = 'Email không hợp lệ.'
        statusOfEmail.style.color = 'red'
    }
}
$("#btnRegister").click(function(e){
    e.preventDefault();
})