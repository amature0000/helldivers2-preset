// URL로부터 parameter 가져오기
function getParamsFromURL() {
    const params = new URLSearchParams(window.location.search);
    const encodedData = params.get('i');

    if (encodedData) {
        try {
            const decodedQuery = decodeBase64(encodedData);
            const decodedParams = new URLSearchParams(decodedQuery);
            const result = {};
            for (let [key, value] of decodedParams.entries()) {
                result[key] = value;
            }
            console.log(result)
            return result;
        } catch (error) {
            console.error('디코딩 중 오류 발생:', error);
            return {};
        }
    }
    return {};
}
// parameter로부터 URL 설정하기
function setURLFromParams(params) {
    let queryString = '';
    for (let key in params) {
        if (params.hasOwnProperty(key)) {
            queryString += `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}&`;
        }
    }
    queryString = queryString.slice(0, -1);
    const encodedQuery = encodeBase64(queryString);
    const newURL = `${window.location.origin}${window.location.pathname}?i=${encodedQuery}`;
    window.history.replaceState(null, '', newURL);
}
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

function encodeBase64(value) {
    return btoa(unescape(encodeURIComponent(value))) // Base64로 인코딩
        .replace(/\+/g, '-')  // '+'를 '-'로 변경
        .replace(/\//g, '_')  // '/'를 '_'로 변경
        .replace(/=+$/, '');  // '=' 패딩 제거
}

function decodeBase64(value) {
    return decodeURIComponent(escape(atob(
        value.replace(/-/g, '+').replace(/_/g, '/')
    )));
}