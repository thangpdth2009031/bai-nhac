var API_DOMAIN = 'https://2-dot-backup-server-003.appspot.com';
var MY_SONGS_API_URL = '/_api/v2/songs/get-mine';

document.addEventListener('DOMContentLoaded', function () {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', API_DOMAIN + MY_SONGS_API_URL, false);
    xhr.setRequestHeader('Authorization', token);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var responseJsonObject = JSON.parse(this.responseText);
            //console.log(responseJsonObject);
            var html = '';
            var index;
            var limited = 10;

            if (responseJsonObject.length < limited) {
                limited = responseJsonObject.length;
            }

            if (responseJsonObject.length > 0) {
                for (index = 0; index < limited; index++) {
                    html += '<div class="boc-tc bod-rdu4" id="list-song">';
                    html += '<span class="number">' + (index + 1) + '</span>';
                    html += '<div class="thumbnail" id="thumbnail"><img src="' + responseJsonObject[index].thumbnail + '"></div>';
                    html += '<div class="song-name-author">';
                    html += '<div class="song-name" id="song-name">' + responseJsonObject[index].name + '</div>';
                    html += '<div class="author">Sáng tác: ' + responseJsonObject[index].author + '</div>';
                    html += '<div class="singer">' + responseJsonObject[index].singer + '</div>';
                    html += '</div>';
                    html += '<audio class="audio" controls><source src="' + responseJsonObject[index].link;
                    html += 'type="audio/ogg">Your browser does not support the audio element.</audio></div>';
                }
                document.getElementById("songs").innerHTML = html;
            }
        } else {
            alert('Không lấy được thông tin người dùng!')
        }
    }
    xhr.send();
})