// 기존 copy 링크 버튼 기능 수정
document.addEventListener("DOMContentLoaded", function () {
    const copyButton = document.getElementById('copy-link-button');
    copyButton.addEventListener('click', function () {
        const params = new URLSearchParams(window.location.search);
        let newQuery = '';
        let titleQuery = ""
        for (let [key, value] of params.entries()) {
            if (key === 'title') {
                var replacedValue = value.replace(" ", '_');
                titleQuery += `${key}=${replacedValue}&`; // 'title'은 인코딩하지 않음
            } else {
                newQuery += `${key}=${encodeURIComponent(value)}&`; // 나머지 파라미터는 인코딩
            }
        }
        newQuery = titleQuery + newQuery;
        newQuery = newQuery.slice(0, -1); // 마지막 & 제거
        
        const currentURL = `${window.location.origin}${window.location.pathname}?${newQuery}`;
        
        navigator.clipboard.writeText(currentURL)
            .then(() => {
                showCopySuccess();
            })
            .catch(err => {
                alert('링크 복사에 실패했습니다.');
                console.error('Error copying text: ', err);
            });
    });
});

// 복사 성공 메시지 표시 함수
function showCopySuccess() {
    const copyButton = document.getElementById('copy-link-button');
    
    // 버튼 텍스트 변경
    const originalText = copyButton.textContent;
    copyButton.textContent = '복사 완료!';
    
    // 잠시 후 원래 텍스트로 되돌리기
    setTimeout(() => {
        copyButton.textContent = originalText;
    }, 2000); // 2초 후 원래 텍스트로 복구
}

// 이미지 다운로드
function down(background) {
    if (background) {
        document.getElementById('targetImg').setAttribute("class", "white-background");
    }
    const emptyIcons = document.querySelectorAll('.empty-icon');
    emptyIcons.forEach(function (icon) {
        icon.classList.remove('active');
    });
    domtoimage.toBlob(document.getElementById('targetImg'))
        .then(function (blob) {
            window.saveAs(blob, 'download.png');
            document.getElementById('targetImg').removeAttribute("class");
        });
}