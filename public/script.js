const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

const closeBanner = document.querySelectorAll('[span-close-button]')
closeBanner.forEach(button => {
    button.addEventListener('click', () => {
        const banner = document.querySelectorAll('.post-succeded')
        banner.forEach(banner => {
            banner.classList.add('disactive')
        })
    })
})

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal')
    const modalsView = document.querySelectorAll('.modal-view')
    const modalsMenu = document.querySelectorAll('.sidebar')
    modals.forEach(modal => {
        closeModal(modal)
    })
    modalsView.forEach(modal => {
        closeModal(modal)
    })
    modalsMenu.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
    button.addEventListener('click', () => {
        const modal = button.closest('.modal-view')
        closeModal(modal)
    })
})

document.querySelectorAll(".edit-button").forEach(button => {
    button.addEventListener("click", function () {
        const postIndex = this.getAttribute("data-post-index");
        const postTitle = this.getAttribute("data-post-title");
        const postText = this.getAttribute("data-post-text")
        // Preencha o formulário do modal com os dados do post
        document.getElementById("post-title").value = postTitle;
        document.getElementById("post-text").value = postText;
        document.getElementById("post-index").value = postIndex;

    });
});

document.querySelectorAll(".post-title").forEach(button => {
    button.addEventListener("click", function () {
        const postViewTitle = this.getAttribute("view-post-title");
        const postViewAuthor = this.getAttribute("view-post-author");
        const postViewDate = this.getAttribute("view-post-date");
        const postViewText = this.getAttribute("view-post-text");

        document.getElementById("view-title").innerHTML = postViewTitle
        document.getElementById("post-author").innerHTML = postViewAuthor
        document.getElementById("post-date").innerHTML = postViewDate
        document.getElementById("view-post-text").innerHTML = postViewText
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}
