document.addEventListener("DOMContentLoaded", function () {
    const pages = document.querySelectorAll(".page");
    const pageNumbers = document.querySelectorAll(".page-number");
    const prevButton = document.getElementById("prevPage");
    const nextButton = document.getElementById("nextPage");
    let currentPage = 0;

    function showPage(pageNumber) {
        pages.forEach((page, index) => {
            if (index === pageNumber) {
                page.style.display = "block";
            } else {
                page.style.display = "none";
            }
        });
    }

    function updateButtons() {
        prevButton.disabled = currentPage === 0;
        nextButton.disabled = currentPage === pages.length - 1;
    }

    function setActive() {
        pageNumbers.forEach((page, index) => {
            if(currentPage === index) {
                page.classList.add("NextPrevbuttonActive");
            } else {
                page.classList.remove("NextPrevbuttonActive");
            }
        });
    }

    pageNumbers.forEach((page, index) => {
        page.addEventListener("click", function () {
            showPage(index);
            currentPage = index;
            updateButtons();
            setActive();
        });
    });

    prevButton.addEventListener("click", function () {
        if (currentPage > 0) {
            currentPage--;
            showPage(currentPage);
            updateButtons();
            setActive();
        }
    });

    nextButton.addEventListener("click", function () {
        if (currentPage < pages.length - 1) {
            currentPage++;
            showPage(currentPage);
            updateButtons();
            setActive();
        }
    });

    showPage(currentPage);
    updateButtons();
});
//light pagination
document.addEventListener("DOMContentLoaded", function () {
    const pages = document.querySelectorAll(".page-light");
    const pageNumbers = document.querySelectorAll(".page-number-light");
    const prevButton = document.getElementById("prevPage-light");
    const nextButton = document.getElementById("nextPage-light");
    let currentPage = 0;

    function showPage(pageNumber) {
        pages.forEach((page, index) => {
            if (index === pageNumber) {
                page.style.display = "block";
            } else {
                page.style.display = "none";
            }
        });
    }

    function updateButtons() {
        prevButton.disabled = currentPage === 0;
        nextButton.disabled = currentPage === pages.length - 1;
    }

    function setActive() {
        pageNumbers.forEach((page, index) => {
            if(currentPage === index) {
                page.classList.add("actNextPrevbuttonActive-light");
            } else {
                page.classList.remove("NextPrevbuttonActive-light");
            }
        });
    }

    pageNumbers.forEach((page, index) => {
        page.addEventListener("click", function () {
            showPage(index);
            currentPage = index;
            updateButtons();
            setActive();
        });
    });

    prevButton.addEventListener("click", function () {
        if (currentPage > 0) {
            currentPage--;
            showPage(currentPage);
            updateButtons();
            setActive();
        }
    });

    nextButton.addEventListener("click", function () {
        if (currentPage < pages.length - 1) {
            currentPage++;
            showPage(currentPage);
            updateButtons();
            setActive();
        }
    });

    showPage(currentPage);
    updateButtons();
});