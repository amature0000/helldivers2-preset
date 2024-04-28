document.addEventListener("DOMContentLoaded", function() {
    const toggles = document.querySelectorAll('.toggle');
    const emptyIcons = document.querySelectorAll('.empty-icon');
    const iconList = document.getElementById('icon-list');

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

    const titleInput = document.getElementById('title-input');
    const changeTitleButton = document.getElementById('change-title-button');
    const iconListTitle = document.getElementById('icon-list-title');
    
    changeTitleButton.addEventListener('click', function() {
        const newTitle = titleInput.value.trim();
        if (newTitle !== '') {
            iconListTitle.textContent = newTitle;
            titleInput.value = '';
        } else {
            alert('제목을 입력하세요.');
        }
    });
});

function down() {
    domtoimage.toBlob(document.getElementById('targetImg'))
    .then(function (blob) {
        window.saveAs(blob, 'download.png');
    });
}