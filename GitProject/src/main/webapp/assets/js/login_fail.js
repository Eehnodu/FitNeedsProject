window.onload = function() {
    var urlParams = new URLSearchParams(window.location.search);
    if(urlParams.has('error')) {
        var error = urlParams.get('error');
        if(error === 'loginFailed') {
            alert('로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.');
        }
    }
}
