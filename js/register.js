var API_DOMAIN = 'https://2-dot-backup-server-002.appspot.com';
var REGISTER_API_URL = '/_api/v2/members';
document.addEventListener('DOMContentLoaded', function () {
    var btnRegister = document.forms['register']['btn-register'];
    if (btnRegister) {
        btnRegister.onclick = function () {
            var txtFirstName = document.forms['register']['firstName'];
            var txtLastName = document.forms['register']['lastName'];
            var txtEmail = document.forms['register']['email'];
            var pwdPassword = document.forms['register']['password'];
            var txtPhone = document.forms['register']['phone'];
            var txtAddress = document.forms['register']['address'];
            var txtAvatar = document.forms['register']['avatar'];
            var txtYear = document.forms['register']['nam'];
            var txtMonth = document.forms['register']['thang'];
            var txtDay = document.forms['register']['ngay'];
            var rdoGender = document.forms['register']['gender'];
            var birthDay = txtYear.value + "-" + txtMonth.value + "-" + txtDay.value;
            var registerDataObj = {
                'firstName': txtFirstName.value,
                'lastName': txtLastName.value,
                'password': pwdPassword.value,
                'address': txtAddress.value,
                'phone': txtPhone.value,
                'avatar': txtAvatar.value,
                'gender': rdoGender.value,
                'email': txtEmail.value,
                'birthday': birthDay,
            }
            var registerDataJson = JSON.stringify(registerDataObj);
            var xhr = new XMLHttpRequest();
            xhr.open('POST', API_DOMAIN + REGISTER_API_URL, false);
            xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 201) {
                    alert("Đăng kí thành công!");
                    window.location = "login.md.html";
                } else {
                    alert("Đăng kí không thành công!");
                }
            }
            xhr.send(registerDataJson);
        }
    }
})