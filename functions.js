// local storage로부터 list 불러오기
function getList() {
    return JSON.parse(localStorage.getItem('items')) || [];
}
// local storage에 item 추가하기
function addItem(params) {
    const items = getList();
    const title = params['t']
    const data = getD(params);
    const encodingD = decimalToBase64(data);
    const newItem = {id: Date.now(), t: title, d: encodingD};

    items.push(newItem);
    localStorage.setItem('items', JSON.stringify(items));
    displayItems();
}
// local storage에 item 삭제하기
function deleteItem(id) {
    let items = getList();
    items = items.filter(item => item.id !== id);
    localStorage.setItem('items', JSON.stringify(items));
    displayItems();
}
// local storage에 item 디스플레이 하기
function displayItems() {
    const items = getList();
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = '';
    items.forEach((item) => {
        const li = document.createElement('li');

        // 항목 정보 표시
        const infoDiv = document.createElement('div');
        infoDiv.classList.add('targetImg_style');
        const params = decodeParams(item.t, item.d);
        li.dataset.number = params['f'];
        // titleDiv
        const titleDiv = document.createElement('div');
        titleDiv.setAttribute('class', 'items_margin');
        // factions
        const bugImg = document.createElement('img');
        const botImg = document.createElement('img');
        const etImg = document.createElement('img');
        bugImg.setAttribute('class', 'h2_img');
        bugImg.setAttribute('id', 'bug');
        bugImg.setAttribute('src', "assets/bug.webp");
        botImg.setAttribute('class', 'h2_img');
        botImg.setAttribute('id', 'bot');
        botImg.setAttribute('src', "assets/bot.webp");
        etImg.setAttribute('class', 'h2_img');
        etImg.setAttribute('id', 'et');
        etImg.setAttribute('src', "assets/et.webp");
        // title
        const title = document.createElement('h2');
        if (params['t'] == "") params['t'] = "제목 없음";
        title.textContent = `${params['t']}`;
        title.setAttribute('class', 'inline_block');
        // img1
        const div1 = document.createElement('div');
        div1.setAttribute('class', 'empty-icon_style');
        const img1 = document.createElement('img');
        img1.src = imageIndex[params[0]];
        div1.appendChild(img1);
        // img2
        const div2 = document.createElement('div');
        div2.setAttribute('class', 'empty-icon_style');
        const img2 = document.createElement('img');
        img2.src = imageIndex[params[1]];
        div2.appendChild(img2);
        // img3
        const div3 = document.createElement('div');
        div3.setAttribute('class', 'empty-icon_style');
        const img3 = document.createElement('img');
        img3.src = imageIndex[params[2]];
        div3.appendChild(img3);
        // img4
        const div4 = document.createElement('div');
        div4.setAttribute('class', 'empty-icon_style');
        const img4 = document.createElement('img');
        img4.src = imageIndex[params[3]];
        div4.appendChild(img4);
        // button div
        const buttondiv = document.createElement('div');
        buttondiv.setAttribute('class', 'items_margin');
        // button1
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '삭제';
        deleteButton.setAttribute('class', 'button red itemsButton');
        deleteButton.addEventListener('click', () => {
            deleteItem(item.id);
        });
        // button2
        const copyButton = document.createElement('button');
        copyButton.textContent = '링크 복사';
        copyButton.setAttribute('class', 'button blue itemsButton');
        copyButton.setAttribute('id', `${item.id}`);
        copyButton.addEventListener('click', () => {
            setURLFromParams(params);
            copyFunct(item.id);
        });

        buttondiv.appendChild(deleteButton);
        buttondiv.appendChild(copyButton);

        const br = document.createElement('br');

        var factionsState = params['f'];
        if(factionsState & 1) titleDiv.appendChild(bugImg);
        if(factionsState & 2) titleDiv.appendChild(botImg);
        if(factionsState & 4) titleDiv.appendChild(etImg);
        titleDiv.appendChild(title);

        infoDiv.appendChild(titleDiv);
        infoDiv.appendChild(div1);
        infoDiv.appendChild(div2);
        infoDiv.appendChild(div3);
        infoDiv.appendChild(div4);
        infoDiv.appendChild(br);

        li.appendChild(infoDiv);
        li.appendChild(buttondiv);
        itemList.appendChild(li);
    });
    // factions 처리
    const params = setParamsFromURL();
    processFactions(params['f']);
}
// ==============================================================================================
// URL로부터 상태 불러오기
function initializeFromURL() {
    const params = setParamsFromURL();
    const emptyIcons = document.querySelectorAll('.empty-icon');

    // 각 icon 파라미터 처리
    for (let i = 0; i < emptyIcons.length; i++) {
        const iconId = params[`${i}`];
        if (iconId && imageIndex[iconId] && emptyIcons[i]) {
            const img = document.createElement('img');
            img.src = imageIndex[iconId];
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
    // itemlist 처리
    displayItems();
}
// ==============================================================================================
// 선택 상태를 URL에 업데이트
function updateURLWithSelection(index, id) {
    const params = setParamsFromURL();
    if (id) params[`${index}`] = id;
    else params[`${index}`] = 0;
    setURLFromParams(params);
}
// 제목을 URL에 업데이트
function updateURLWithTitle(title) {
    const params = setParamsFromURL();
    params['t'] = title;
    setURLFromParams(params);
}
// 제목 숨기기 상태를 URL에 업데이트
function updateURLWithTitleVisibility(isVisible) {
    const params = setParamsFromURL();
    if(isVisible) params['h'] = 0;
    else params['h'] = 1;
    setURLFromParams(params);
}
// facions 상태를 URL에 업데이트
function updateURLwithFactions() {
    const params = setParamsFromURL();
    const isBugChecked = document.getElementById('checkbox_bug').checked;
    const isBotChecked = document.getElementById('checkbox_bot').checked;
    const isEtChecked = document.getElementById('checkbox_et').checked;
    var temp = 0;
    if(isBugChecked) temp += 1;
    if(isBotChecked) temp += 2;
    if(isEtChecked) temp += 4;
    params['f'] = temp;
    setURLFromParams(params);
    processFactions(temp);
}
// ==============================================================================================
function processFactions(factionsState) {
    const bugImg = document.getElementById('bug');
    const botImg = document.getElementById('bot');
    const etImg = document.getElementById('et');
    const isBug = document.getElementById('checkbox_bug');
    const isBot = document.getElementById('checkbox_bot');
    const isEt = document.getElementById('checkbox_et');
    if(factionsState & 1) {
        bugImg.style.display='';
        isBug.checked = true;
    }
    else {
        bugImg.style.display='none';
        isBug.checked = false;
    }
    if(factionsState & 2) {
        botImg.style.display='';
        isBot.checked = true;
    }
    else {
        botImg.style.display='none';
        isBot.checked = false;
    }
    if(factionsState & 4) {
        etImg.style.display='';
        isEt.checked = true;
    }
    else {
        etImg.style.display='none';
        isEt.checked = false;
    }
    filterItemLists(factionsState);
}
function filterItemLists(number) {
    const items = document.getElementById('itemList').querySelectorAll('li');
    items.forEach(item => {
        const itemNumber = parseInt(item.dataset.number, 10);
        if ((itemNumber & number) >= number) item.style.display = '';
        else item.style.display = 'none';
    });
}
// ==============================================================================================
// URL로부터 params 생성 후 반환하기
function setParamsFromURL() {
    const queryString = window.location.search.substring(1);
    const pairs = queryString.split("&");
    let t = "";
    let d = "";
    
    pairs.forEach(function(pair) {
        const [key, value] = pair.split("=");
        if (key === "t") t = decodeURIComponent(value);
        else if (key === "d") d = decodeURIComponent(value);
    });
    return decodeParams(t, d);
}
// encoded parameter로부터 params 생성 후 반환하기
function decodeParams(t, d) {
    const params = {
        "t": "",
        "f": 0,
        "h": 0,
        3  : 0,
        2  : 0,
        1  : 0,
        0  : 0
    };
    const decodedvalue = base64ToDecimal(d);

    params["t"] = t.replaceAll("_", " ");
    params["f"] = Math.trunc(decodedvalue / 1e9);
    params["h"] = Math.trunc((decodedvalue / 1e8) % 10);
    params[3] = Math.trunc((decodedvalue / 1e6) % 100);
    params[2] = Math.trunc((decodedvalue / 1e4) % 100);
    params[1] = Math.trunc((decodedvalue / 1e2) % 100);
    params[0] = Math.trunc(decodedvalue % 100);

    return params;
}
// parameter로부터 URL 설정하기
function setURLFromParams(params) {
    const queryString = [];
    
    const d = getD(params);
    const encodingD = decimalToBase64(d);

    queryString.push(`d=${encodingD}`);
    queryString.push(`t=${params['t'].replaceAll(" ", "_")}`);

    const newURL = `${window.location.origin}${window.location.pathname}?${queryString.join("&")}`;
    window.history.replaceState(null, '', newURL);
    return newURL;
}
// assembles "d"
function getD(params) {
    return params["f"] * 1e9 +
        params["h"] * 1e8 +
        params[3] * 1e6 +
        params[2] * 1e4 +
        params[1] * 1e2 +
        params[0];
}
// ==============================================================================================
// 64-bit encoding
const BASE64_DIGITS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-/";
// string input
function base64ToDecimal(base64Str) {
    const base = 64;
    let decimal = 0;
    let power = 0;
    for (let i = base64Str.length - 1; i >= 0; i--) {
        const char = base64Str[i];
        const value = BASE64_DIGITS.indexOf(char);
        decimal += value * Math.pow(base, power);
        power++;
    }
    return decimal;
}
// integer input
function decimalToBase64(decimal) {
    const base = 64;
    if (decimal === 0) return BASE64_DIGITS[0];
    
    let base64Str = "";
    while (decimal > 0) {
        const remainder = decimal % base;
        base64Str = BASE64_DIGITS[remainder] + base64Str;
        decimal = Math.floor(decimal / base);
    }
    return base64Str;
}
// ==============================================================================================
// 복사 성공 메시지 표시 함수
function showCopySuccess(id) {
    const copyButton = document.getElementById(id);
    
    // 버튼 텍스트 변경
    let originalText = ""
    if(id=="download_button_2") originalText = "다운로드(투명배경)";
    else if(id=="download_button_1") originalText = "다운로드";
    else originalText = "링크 복사";
    
    copyButton.textContent = '클립보드에 복사 완료!';
    
    // 잠시 후 원래 텍스트로 되돌리기
    setTimeout(() => {
        copyButton.textContent = originalText;
    }, 2000); // 2초 후 원래 텍스트로 복구
}
// 링크 복사
function copyFunct(id) {
    const params = setParamsFromURL();
        const currentURL = setURLFromParams(params);
        navigator.clipboard.writeText(currentURL)
            .then(() => {
                showCopySuccess(id);
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
// ==============================================================================================
// 랜덤 stratagem 선택 기능
function randomSelect() {
    const indices = new Set();
    const params = {
        "t": "",
        0  : 0,
        1  : 0,
        2  : 0,
        3  : 0,
        "h": 0
    };
    
    while (indices.size < 4) {
        const randomNum = Math.floor(Math.random() * (imageIndex.length - 1)) + 1;
        indices.add(randomNum);
    }
    var i = 0;
    for(const index of indices) {
        params[i++] = index;
    }
    
    setURLFromParams(params);
    initializeFromURL();
}
/*
const params = {
    "t": "test",
    0  : 1,
    1  : 2,
    2  : 3,
    3  : 4,
    "h": 0
};
addItem(params);
*/
