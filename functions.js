// ==============================================================================================
// URL로부터 상태 불러오기
function initializeFromURL() {
    const params = decodeURLParams();
    const emptyIcons = document.querySelectorAll('.empty-icon');

    // 각 icon 파라미터 처리
    for (let i = 0; i < emptyIcons.length; i++) {
        const iconId = params[`${i}`];
        if (iconId && imageMap[iconId].src && emptyIcons[i]) {
            const img = document.createElement('img');
            img.src = imageMap[iconId].src;
            img.setAttribute('data-id', iconId);
            emptyIcons[i].innerHTML = '';
            emptyIcons[i].appendChild(img);
        }
    }

    // 제목 처리
    const title = params['t'];
    if (title) {
        document.getElementById('icon-list-title-h1').textContent = title
        document.getElementById('title-input').value = title;
    }

    // 제목 숨기기 처리
    const hideTitle = params['h'];

    if (hideTitle === 1) {
        document.getElementById('icon-list-title').style.display = 'none';
        document.getElementById('targetImg').style.height = '115px';
        document.getElementById('bump').style.height = "50px";
        document.getElementById('checkbox').checked = true;
    }
}
// ==============================================================================================
// 선택 상태를 URL에 업데이트
function updateURLWithSelection(index, id) {
    const params = decodeURLParams();
    if (id) params[`${index}`] = id;
    else params[`${index}`] = 0;
    setURLFromParams(params);
}
// 제목을 URL에 업데이트
function updateURLWithTitle(title) {
    const params = decodeURLParams();
    params['t'] = title;
    setURLFromParams(params);
}
// 제목 숨기기 상태를 URL에 업데이트
function updateURLWithTitleVisibility(isVisible) {
    const params = decodeURLParams();
    if(isVisible) params['h'] = 0;
    else params['h'] = 1;
    setURLFromParams(params);
}
// ==============================================================================================
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
            params["t"] = value.replaceAll("_", " ");
        } 
        else if (key === "d") {
            const decodedvalue = parseInt(value, 36).toString().padStart(9, "0");
            if (decodedvalue.length === 9) {
                params["h"] = parseInt(decodedvalue.substring(0, 1), 10);
                params[3] = parseInt(decodedvalue.substring(1, 3), 10);
                params[2] = parseInt(decodedvalue.substring(3, 5), 10);
                params[1] = parseInt(decodedvalue.substring(5, 7), 10);
                params[0] = parseInt(decodedvalue.substring(7, 9), 10);
            }
        }
    });
    return params;
}
// parameter로부터 URL 설정하기
function setURLFromParams(params) {
    console.log(params)
    const queryString = [];
    
    const d = params["h"] * 1e8 +
        params[3] * 1e6 +
        params[2] * 1e4 +
        params[1] * 1e2 +
        params[0];
    const incodingD = d.toString(36);

    queryString.push(`d=${incodingD}`);
    queryString.push(`t=${params['t'].replaceAll(" ", "_")}`);

    const newURL = `${window.location.origin}${window.location.pathname}?${queryString.join("&")}`;
    window.history.replaceState(null, '', newURL);
    return newURL;
}
// ==============================================================================================
// 복사 성공 메시지 표시 함수
function showCopySuccess(id) {
    const copyButton = document.getElementById(id);
    
    // 버튼 텍스트 변경
    let originalText = ""
    if(id=="copy-link-button") originalText = "링크 복사";
    else if(id=="download_button_1") originalText = "다운로드";
    else originalText = "다운로드(투명배경)";
    
    copyButton.textContent = '클립보드에 복사 완료!';
    
    // 잠시 후 원래 텍스트로 되돌리기
    setTimeout(() => {
        copyButton.textContent = originalText;
    }, 2000); // 2초 후 원래 텍스트로 복구
}
// 링크 복사
function copyFunct() {
    const params = decodeURLParams();
        const currentURL = setURLFromParams(params);
        navigator.clipboard.writeText(currentURL)
            .then(() => {
                showCopySuccess("copy-link-button");
            })
            .catch(err => {
                alert('링크 복사에 실패했습니다.');
                console.error('Error copying text: ', err);
            });
}
// 이미지 다운로드
function down(background, buttonId) {
    if (background) {
        document.getElementById('targetImg').setAttribute("class", "white-background");
    }
    const emptyIcons = document.querySelectorAll('.empty-icon');
    emptyIcons.forEach(function (icon) {
        icon.classList.remove('active');
    });
    domtoimage.toBlob(document.getElementById('targetImg'))
        .then(function (blob) {
            const item = new ClipboardItem({
                'image/png': blob
            });
            navigator.clipboard.write([item]).then(function () {
                showCopySuccess(buttonId);
            }).catch(function (err) {
                alert("클립보드 복사에 실패했습니다.");
                console.error('클립보드에 복사 실패:', err);
            });
            window.saveAs(blob, 'download.png');
            document.getElementById('targetImg').removeAttribute("class");
        });
}
