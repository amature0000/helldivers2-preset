document.addEventListener("DOMContentLoaded", function() {
    const toggles = document.querySelectorAll('.toggle');
    const emptyIcons = document.querySelectorAll('.empty-icon');
    const iconList = document.getElementById('icon-list');

    // 이미지 펼치기
    toggles.forEach(function(toggle) {
        toggle.addEventListener('click', function() {
            const groupName = this.parentElement.dataset.group;
            const icons = this.nextElementSibling.innerHTML;
            iconList.innerHTML = (iconList.dataset.activeGroup === groupName) ? '' : icons;
            iconList.dataset.activeGroup = (iconList.dataset.activeGroup === groupName) ? '' : groupName;
        });
    });

    emptyIcons.forEach(function(icon, index) {
        icon.addEventListener('click', function() {
            emptyIcons.forEach(function(icon) {
                icon.classList.remove('active');
            });
            this.classList.add('active');
            activeIconIndex = index;
        });
    });

    // 이미지 링크하기
    iconList.addEventListener('click', function(event) {
        if (activeIconIndex !== null) {
            const targetIcon = event.target;
            if (targetIcon.tagName === 'IMG') {
                const clonedIcon = targetIcon.cloneNode(true);
                emptyIcons[activeIconIndex].innerHTML = '';
                emptyIcons[activeIconIndex].appendChild(clonedIcon);
            }
        }
    });

    // 제목 변경
    const titleInput = document.getElementById('title-input');
    const iconListTitle = document.getElementById('icon-list-title');
    titleInput.addEventListener('input', function() {
        iconListTitle.textContent = titleInput.value;
    });
});

// 이미지로 다운로드
function down() {
    domtoimage.toBlob(document.getElementById('targetImg'))
    .then(function (blob) {
        window.saveAs(blob, 'download.png');
    });
}