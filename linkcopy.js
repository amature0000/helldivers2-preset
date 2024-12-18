// URL로부터 params 생성 후 반환하기
function decodeURLParams() {
    const queryString = window.location.search.substring(1);
    const params = {
        "t": "",
        0  : 0,
        1  : 0,
        2  : 0,
        3  : 0,
        "h": 0
    };
    const pairs = queryString.split("&");

    pairs.forEach(pair => {
        const [key, value] = pair.split("=").map(decodeURIComponent);

        if (key === "t") {
            params["t"] = value.replace("_", " ");
        } 
        else if (key === "d") {
            const decodedvalue = parseInt(value, 36).toString().padStart(9, "0");
            if (decodedvalue.length === 9) {
                params[0] = parseInt(decodedvalue.substring(0, 2), 10);
                params[1] = parseInt(decodedvalue.substring(2, 4), 10);
                params[2] = parseInt(decodedvalue.substring(4, 6), 10);
                params[3] = parseInt(decodedvalue.substring(6, 8), 10);
                params["h"] = parseInt(decodedvalue.substring(8, 9), 10);
            }
        }
    });
    return params;
}
// parameter로부터 URL 설정하기
function setURLFromParams(params) {
    console.log(params)
    const queryString = [];
    queryString.push(`t=${params['t'].replace(" ", "_")}`);

    const d = params[0] * 10000000 +
        params[1] * 100000 +
        params[2] * 1000 +
        params[3] * 10 +
        params["h"];
    const incodingD = d.toString(36);

    queryString.push(`d=${incodingD}`);
    const newURL = `${window.location.origin}${window.location.pathname}?${queryString.join("&")}`;
    window.history.replaceState(null, '', newURL);
    return newURL;
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