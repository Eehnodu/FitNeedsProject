window.onload = function() {
				var urlParams = new URLSearchParams(window.location.search);
				if (urlParams.has('error')) {
					var error = urlParams.get('error');
					if (error === 'password') {
						alert('비밀번호가 일치하지 않습니다.');
					}
				}
			}