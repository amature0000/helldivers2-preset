let activeIconIndex = null;

document.addEventListener("DOMContentLoaded", function () {
    // 테이블 동적 생성
    const groups = {};

    imageMap.forEach(groupEntry => {
        let groupName = groupEntry.group;
        if (!groups[groupName]) {
            groups[groupName] = [];
        }

        const processedLayout = groupEntry.layout.map(row =>
            row.map(cell => {
                if (!cell.src) return cell;
                const id = imageIndex.findIndex(n => n === cell.src);
                return { id, ...cell };
            })
        );

        groups[groupName].push(processedLayout);
    })

    console.log(groups)

    Object.keys(groups).forEach(groupName => {
        const groupDiv = document.querySelector(`.group[data-group="${groupName}"] .icons`);
        const table = document.createElement('table');
        const tbody = document.createElement('tbody');
        table.appendChild(tbody);
        groups[groupName].forEach(colData => {
            colData.forEach(rowData => {
                const tr = document.createElement('tr');
                rowData.forEach(item => {
                    const td = document.createElement('td');
                    const figure = document.createElement('figure');
                    const img = document.createElement('img');
                    const figcaption = document.createElement('figcaption');

                    img.src = item.src;
                    img.dataset.id = item.id;
                    figcaption.textContent = item.caption;

                    figure.appendChild(img);
                    figure.appendChild(figcaption);
                    td.appendChild(figure);
                    tr.appendChild(td);
                })
                tbody.appendChild(tr);
            });
        });

        groupDiv.appendChild(table);
    });

    // 이미지 펼치기 버튼
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

    const emptyIcons = document.querySelectorAll('.empty-icon');
    emptyIcons.forEach(function (icon, index) {
        // 타겟 이미지 active 토글 기능
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
        icon.addEventListener('contextmenu', function (event) {
            event.preventDefault(); // 기본 컨텍스트 메뉴 방지
            icon.innerHTML = '';
            const newImg = document.createElement('img');
            newImg.src = "assets/default.png";
            newImg.setAttribute('data-id', 'default')
            icon.appendChild(newImg);
            updateURLWithSelection(index, null);
        });
    });

    iconList.addEventListener('click', function (event) {
        if (event.target.tagName === 'IMG') {
            const selectedId = parseInt(event.target.getAttribute('data-id'), 10);
            const activeGroup = iconList.dataset.activeGroup;
            let idx = parseInt(activeGroup.replace('group', ''), 10);
            if (!activeGroup.startsWith('group')) return;
            // group-container-selections
            if (activeIconIndex !== null && idx <= 5) {
                emptyIcons[activeIconIndex].innerHTML = '';
                const newImg = document.createElement('img');
                newImg.src = imageIndex[selectedId] || imageIndex[0];
                newImg.setAttribute('data-id', selectedId);
                emptyIcons[activeIconIndex].appendChild(newImg);
                updateURLWithSelection(activeIconIndex, selectedId);
                nextactive();
            }
            // group-container-selections-2
            else {
                let equipSlot;
                if (idx == 6) {
                    equipSlot = document.getElementById('armour-slot');
                }
                else if (idx == 7) {

                }
                else if (idx == 8) {

                }
                else if (idx == 9) {

                }
                equipSlot.innerHTML = '';
                const newImg = document.createElement('img');
                newImg.src = imageIndex[selectedId] || imageIndex[0];
                newImg.setAttribute('data-id', selectedId);
                equipSlot.appendChild(newImg);

                const params = setParamsFromURL();
                params['atype'] = selectedId;
                setURLFromParams(params);
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

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            title.style.display = 'none';
            targetImg.style.height = '225px';
            bump.style.height = "50px";
        } else {
            title.style.display = 'block';
            targetImg.style.height = '275px';
            bump.style.height = "0";
        }
        updateURLWithTitleVisibility(!this.checked);
    });

    // URL 복사 버튼
    const copyButton = document.getElementById('copy-link-button');
    copyButton.addEventListener('click', function () {
        copyFunct("copy-link-button");
    });
    // 로드아웃 저장 버튼
    const saveButton = document.getElementById('save_button');
    saveButton.addEventListener('click', function () {
        const params = setParamsFromURL();
        addItem(params);
    });
    // 초기화
    const rstButton = document.getElementById('hard_rst_button');
    rstButton.addEventListener('click', function () {
        window.location.href = `${window.location.origin}${window.location.pathname}`;
    });
    // 랜덤
    const rndButton = document.getElementById('random_button');
    if (rndButton) rndButton.addEventListener('click', function () {
        randomSelect();
    });
    // github 버튼
    const githubButton = document.getElementById("goto_github_button");
    githubButton.addEventListener("click", function () {
        window.open("https://github.com/amature0000/helldivers2-preset", "_blank");
    });
    // factions
    const checkboxIds = ['checkbox_bug', 'checkbox_bot', 'checkbox_et'];
    const checkboxes = checkboxIds.map(id => document.getElementById(id));
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateURLwithFactions);
    });
    // radiobuttons
    const radioIds = ['light', 'mid', 'heavy'];
    const radios = radioIds.map(id => document.getElementById(id));
    radios.forEach(checkbox => {
        checkbox.addEventListener('change', updateURLwithAtypes);
    });

    initializeFromURL();
});

// 다음 선택창으로 넘기기
function nextactive() {
    const emptyIcons = document.querySelectorAll('.empty-icon');
    emptyIcons.forEach(function (icon) {
        icon.classList.remove('active');
    });
    activeIconIndex++;
    if (activeIconIndex > 3) activeIconIndex = null;
    if (activeIconIndex !== null && emptyIcons[activeIconIndex]) {
        emptyIcons[activeIconIndex].classList.add('active');
    }
}
