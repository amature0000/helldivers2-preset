let activeIconIndex = null;
document.addEventListener("DOMContentLoaded", function () {
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

    // 이미지 링크하기
    iconList.addEventListener('click', function (event) {
        if (activeIconIndex !== null) {
            const targetIcon = event.target;
            if (targetIcon.tagName === 'IMG') {
                const clonedIcon = targetIcon.cloneNode(true);
                emptyIcons[activeIconIndex].innerHTML = '';
                emptyIcons[activeIconIndex].appendChild(clonedIcon);
                nextactive();
            }
        }
    });

    // 제목 변경
    const titleInput = document.getElementById('title-input');
    const iconListTitle = document.getElementById('icon-list-title');
    titleInput.addEventListener('input', function () {
        iconListTitle.textContent = titleInput.value;
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
      });
});

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

function nextactive() {
    const emptyIcons = document.querySelectorAll('.empty-icon');
    emptyIcons.forEach(function (icon) {
        icon.classList.remove('active');
    });
    activeIconIndex++;
    if(activeIconIndex > 3) activeIconIndex = null;
    emptyIcons[activeIconIndex].classList.add('active');
}