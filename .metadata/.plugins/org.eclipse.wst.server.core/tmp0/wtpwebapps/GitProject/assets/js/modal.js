function modal(id) {
	var zIndex = 9999;
	var modal = document.getElementById(id);

	// 모달 div 뒤에 희끄무레한 레이어
	var bg = document.createElement('div');
	bg.setStyle({
		position: 'fixed',
		zIndex: zIndex,
		left: '0px',
		top: '0px',
		width: '100%',
		height: '100%',
		overflow: 'auto',
		// 레이어 색갈은 여기서 바꾸면 됨
		backgroundColor: 'rgba(0,0,0,0.4)'
	});
	document.body.append(bg);

	// 닫기 버튼 처리, 시꺼먼 레이어와 모달 div 지우기
	modal.querySelector('.modal_close_btn').addEventListener(
		'click', function() {
			bg.remove();
			modal.style.display = 'none';
		});

	modal.setStyle({
		position: 'fixed',
		display: 'block',
		boxShadow: '0 2px 3px 0 rgba(34,36,38,0.15)',

		// 시꺼먼 레이어 보다 한칸 위에 보이기
		zIndex: zIndex + 1,

		// div center 정렬
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		msTransform: 'translate(-50%, -50%)',
		webkitTransform: 'translate(-50%, -50%)'
	});
}

// Element 에 style 한번에 오브젝트로 설정하는 함수 추가
Element.prototype.setStyle = function(styles) {
	for (var k in styles)
		this.style[k] = styles[k];
	return this;
};

document.getElementById('popup_open_btn').addEventListener('click',
	function() {
		// 모달창 띄우기
		modal('my_modal');
	});




// 클릭 시 트레이너 섹션을 보여주는 함수
function showTrainerSection() {
	var section = document.getElementById('section_2');
	var placeholderDiv = document.getElementById('placeholder_div');
	section.style.display = 'block';
	placeholderDiv.style.display = 'none';
}

// 트레이너를 선택하는 요소 클릭 시 트레이너 섹션을 보여주고 기본 문구를 숨김
var trainerElements = document
	.querySelectorAll('.owl-carousel-info-wrap.item');
trainerElements.forEach(function(element) {
	element.addEventListener('click', function() {
		showTrainerSection();
		var placeholderDiv = document
			.getElementById('placeholder_div');
		placeholderDiv.style.display = 'none';
	});
});

// 페이지 로드 시 기본적으로 트레이너를 선택해주세요 문구를 보여줌
document.addEventListener('DOMContentLoaded',
	function() {
		var section = document.getElementById('section_2');
		var placeholderDiv = document
			.getElementById('placeholder_div');
		section.style.display = 'none';
		placeholderDiv.style.display = 'block';
	});