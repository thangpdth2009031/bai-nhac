var API_DOMAIN = 'https://2-dot-backup-server-001.appspot.com';
var MEMBER_INFO_API_URL = '/_api/v2/members/information';

document.addEventListener('DOMContentLoaded', function () {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', API_DOMAIN + MEMBER_INFO_API_URL, false);
    xhr.setRequestHeader('Authorization', token);

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            var responseJsonObject = JSON.parse(this.responseText);

            var fullName = responseJsonObject.lastName + ' ' + responseJsonObject.firstName;
            document.getElementById("full-name").innerHTML = fullName;
            //document.getElementById("logo-thuong-hieu").innerHTML = '<img src="' + responseJsonObject.avatar + '">';

            document.getElementById("id").innerHTML = responseJsonObject.id;
            document.getElementById("first-name").innerHTML = responseJsonObject.firstName;
            document.getElementById("last-name").innerHTML = responseJsonObject.lastName;
            document.getElementById("avatar").innerHTML = responseJsonObject.avatar;
            document.getElementById("phone").innerHTML = responseJsonObject.phone;
            document.getElementById("address").innerHTML = responseJsonObject.address;
            document.getElementById("gender").innerHTML = responseJsonObject.gender;
            document.getElementById("birthday").innerHTML = responseJsonObject.birthday;
            document.getElementById("email").innerHTML = responseJsonObject.email;
            document.getElementById("password").innerHTML = responseJsonObject.password;
            document.getElementById("salt").innerHTML = responseJsonObject.salt;
            document.getElementById("created-At").innerHTML = responseJsonObject.createdAt;
            document.getElementById("updated-At").innerHTML = responseJsonObject.createdAt;
            document.getElementById("status").innerHTML = responseJsonObject.status;

            if (responseJsonObject.introduction !== null) {
                document.getElementById("intro").innerHTML = responseJsonObject.introduction;
            } else {
                document.getElementById("intro").innerHTML = "NULL";
            }

            switch (responseJsonObject.gender) {
                case 1:
                    document.getElementById("gender").innerHTML = "Male";
                    break;
                case 2:
                    document.getElementById("gender").innerHTML = "Female";
                    break;
                case 3:
                    document.getElementById("gender").innerHTML = "Other";
                    break;
            }
        } else {
            alert('Không lấy được thông tin người dùng!')
        }
    }
    xhr.send();
})

