$(document).on("click", ".toggle-password", function () {
    let elm = $(this);
    let passwordInput = elm.parent().children(".password");
    let inputType = passwordInput.attr("type");
    if (inputType == "password") {
        elm.removeClass("fas fa-eye");
        passwordInput.attr("type", "text");
        elm.addClass("fas fa-eye-slash");
    } else {
        elm.removeClass("fas fa-eye-slash");
        passwordInput.attr("type", "password");
        elm.addClass("fas fa-eye");
    }
});
