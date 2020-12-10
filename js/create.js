var API_DOMAIN = 'https://2-dot-backup-server-002.appspot.com';
var ADD_SONG_API_URL = '/_api/v2/songs';
document.addEventListener('DOMContentLoaded', function () {
    var btnSubmit = document.forms['add-song-form']['btn-submit'];
    if (btnSubmit) {
        btnSubmit.onclick = function () {
            var txtName = document.forms['add-song-form']['name'];
            var txtSinger = document.forms['add-song-form']['singer'];
            var txAuthor = document.forms['add-song-form']['author'];
            var txtThumbnail = document.forms['add-song-form']['thumbnail'];
            var txtLink = document.forms['add-song-form']['link'];
            var registerDataObj = {
                'name': txtName.value,
                'singer': txtSinger.value,
                'author': txAuthor.value,
                'thumbnail': txtThumbnail.value,
                'link': txtLink.value,
            }
            var registerDataJson = JSON.stringify(registerDataObj);
            var xhr = new XMLHttpRequest();
            xhr.open('POST', API_DOMAIN + ADD_SONG_API_URL, false);
            xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
            xhr.setRequestHeader('Authorization', token);

            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 201) {
                    //var responseData = JSON.parse(this.responseText);
                    alert("Thêm bài hát thành công!");
                    window.location = "my-songs.html";
                } else {
                    alert("Thêm bài hát không thành công!");
                }
            }
            xhr.send();
        }
    }
})