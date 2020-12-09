var API_DOMAIN = 'https://2-dot-backup-server-001.appspot.com';
var REGISTER_API_URL = '/_api/v2/members/authentication';

document.addEventListener('DOMContentLoaded', function () {
    var btnSubmit = document.forms['login-form']['btn-submit'];
    if (btnSubmit) {
        btnSubmit.onclick = function () {
            var txtEmail = document.forms['login-form']['email'];
            var pwdPassword = document.forms['login-form']['password'];
            //lấy thông tin form
            //validate
            //tạo ra đối tượng cần gửi đi.

            var loginObject = {
                'email': txtEmail.value,
                'password': pwdPassword.value
            }

            //prepare du lieu truoc khi gui.
            var loginObjectJson = JSON.stringify(loginObject);

            var xhr = new XMLHttpRequest();

            xhr.open('POST', API_DOMAIN + REGISTER_API_URL, false);
            xhr.setRequestHeader('Content-type', 'application/json;  charset=UTF-8');

            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 201) {
                    var responseJsonObject = JSON.parse(this.responseText);
                    localStorage.setItem('dang-nhap-thanh-cong', responseJsonObject.token);
                    alert('Login thanh cong');
                    window.location = "member-information.md.html";
                } else {
                    alert('Login that bai')
                }
            }

            xhr.send(loginObjectJson);
        }
    }
})