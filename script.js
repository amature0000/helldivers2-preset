let activeIconIndex = null;

document.addEventListener("DOMContentLoaded", function () {
    // 테이블 동적 생성
    const groups = {};
    
    imageMap.forEach((item, index) => {
        console.log(index + " : " + item.caption)
        const groupName = item.group;
        if (!groupName) return;
        if (!groups[groupName]) {
            groups[groupName] = [];
        }
        groups[groupName].push({ id: index, ...item });
    });

    Object.keys(groups).forEach(groupName => {
        const groupDiv = document.querySelector(`.group[data-group="${groupName}"] .icons`);
        const table = document.createElement('table');
        const tbody = document.createElement('tbody');
        table.appendChild(tbody);
        var tr = document.createElement('tr');

        groups[groupName].forEach((item, idx) => {
            // 4개의 figure마다 row 생성**
            if (idx % 4 === 0) {
                tr = document.createElement('tr');
                tbody.appendChild(tr);
            }
            
            const td = document.createElement('td');
            const figure = document.createElement("figure");
            const img = document.createElement("img");
            const figcaption = document.createElement("figcaption");
    
            img.src = item.src;
            img.dataset.id = item.id;
            figcaption.textContent = item.caption;
    
            figure.appendChild(img);
            figure.appendChild(figcaption);
            td.appendChild(figure);
            tr.appendChild(td);
        });
        groupDiv.appendChild(table);
    });
    
    // URL에서 초기 선택 상태 불러오기
    initializeFromURL();

    // 이미지 펼치기
    const iconList = document.getElementById('icon-list');
    const toggles = document.querySelectorAll('.toggle');
    toggles.forEach(function (toggle) {
        toggle.addEventListener('click', function () {
            const groupName = this.parentElement.dataset.group;
            const icons = this.nextElementSibling.innerHTML;
            iconList.innerHTML = (iconList.dataset.activeGroup === groupName) ? '' : icons;
            iconList.dataset.activeGroup = (iconList.dataset.activeGroup === groupName) ? '' : groupName;
        });
    });

    // 타겟 이미지 active 토글
    const emptyIcons = document.querySelectorAll('.empty-icon');
    emptyIcons.forEach(function (icon, index) {
        icon.addEventListener('click', function () {
            if (this.classList.contains('active')) {
                this.classList.remove('active');
                activeIconIndex = null;
            } else {
                emptyIcons.forEach(function (icon) {
                    icon.classList.remove('active');
                });
                this.classList.add('active');
                activeIconIndex = index;
            }
        });
    });

    // 이미지 선택 시 URL 업데이트 및 이미지 배치
    iconList.addEventListener('click', function (event) {
        if (activeIconIndex !== null) {
            const targetIcon = event.target;
            if (targetIcon.tagName === 'IMG') {
                const selectedId = parseInt(targetIcon.getAttribute('data-id'), 10);//targetIcon.getAttribute('data-id') || 'default';
                emptyIcons[activeIconIndex].innerHTML = '';
                const newImg = document.createElement('img');
                newImg.src = imageMap[selectedId].src || imageMap[0].src;
                newImg.setAttribute('data-id', selectedId);
                emptyIcons[activeIconIndex].appendChild(newImg);
                updateURLWithSelection(activeIconIndex, selectedId);
                nextactive();
            }
        }
    });

    // 제목 변경 및 URL 업데이트
    const titleInput = document.getElementById('title-input');
    const iconListTitle = document.getElementById('icon-list-title-h1');
    titleInput.addEventListener('input', function () {
        iconListTitle.textContent = titleInput.value;
        updateURLWithTitle(titleInput.value);
    });

    // 제목 숨기기
    const checkbox = document.getElementById("checkbox");
    const title = document.getElementById("icon-list-title");
    const targetImg = document.getElementById("targetImg");
    const bump = document.getElementById("bump");
    
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            title.style.display = 'none';
            targetImg.style.height = '115px';
            bump.style.height = "50px";
        } else {
            title.style.display = 'block';
            targetImg.style.height = '165px';
            bump.style.height = "0";
        }
        updateURLWithTitleVisibility(!this.checked);
    });
});

// URL에서 선택 상태 초기화
function initializeFromURL() {
    const params = new URLSearchParams(window.location.search);
    const emptyIcons = document.querySelectorAll('.empty-icon');

    // 각 icon 파라미터 처리
    for (let i = 0; i < emptyIcons.length; i++) {
        const iconId = params.get(`${i}`);
        if (iconId && imageMap[iconId].src && emptyIcons[i]) {
            const img = document.createElement('img');
            img.src = imageMap[iconId].src;
            img.setAttribute('data-id', iconId);
            emptyIcons[i].innerHTML = '';
            emptyIcons[i].appendChild(img);
        }
    }

    // 제목 처리
    const title = params.get('title');
    if (title) {
        var replacedTitle = title.replace("_", " ");
        document.getElementById('icon-list-title-h1').textContent = replacedTitle
        document.getElementById('title-input').value = replacedTitle;
    }

    // 제목 숨기기 처리
    const hideTitle = params.get('hideTitle');
    if (hideTitle === 'true') {
        document.getElementById('icon-list-title').style.display = 'none';
        document.getElementById('targetImg').style.height = '115px';
        document.getElementById('bump').style.height = "50px";
        document.getElementById('checkbox').checked = true;
    }
}

// 선택 상태를 URL에 업데이트
function updateURLWithSelection(index, id) {
    const params = new URLSearchParams(window.location.search);
    params.set(`${index}`, id);
    const newURL = `${window.location.pathname}?${params.toString()}`;
    history.replaceState({}, '', newURL);
}

// 제목을 URL에 업데이트
function updateURLWithTitle(title) {
    const params = new URLSearchParams(window.location.search);
    if (title) {
        params.set('title', title);
    } else {
        params.delete('title');
    }
    const newURL = `${window.location.pathname}?${params.toString()}`;
    history.replaceState({}, '', newURL);
}

// 제목 숨기기 상태를 URL에 업데이트
function updateURLWithTitleVisibility(isVisible) {
    const params = new URLSearchParams(window.location.search);
    params.set('hideTitle', !isVisible);
    const newURL = `${window.location.pathname}?${params.toString()}`;
    history.replaceState({}, '', newURL);
}

// 이미지로 다운로드
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

// 다음 선택창으로 넘기기
function nextactive() {
    const emptyIcons = document.querySelectorAll('.empty-icon');
    emptyIcons.forEach(function (icon) {
        icon.classList.remove('active');
    });
    activeIconIndex++;
    if(activeIconIndex > 3) activeIconIndex = null;
    if(activeIconIndex !== null && emptyIcons[activeIconIndex]) {
        emptyIcons[activeIconIndex].classList.add('active');
    }
}