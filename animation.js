function gotoPage(page) {
    document.body.classList.add('page-turning');
    setTimeout(function () {
        window.location.href = page;
    }, 1000);
}

document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.remove('page-turning');
});
