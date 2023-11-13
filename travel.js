const Hamburger_id = document.getElementById("Hamburger_id");
const side_bar_main_wrapper = document.querySelector(".side_bar_main_wrapper");
const sidebar_inner_content_wrapper = document.querySelector(".sidebar_inner_content_wrapper");
Hamburger_id.addEventListener("click", function () {
    side_bar_main_wrapper.classList.add("active_mobile_sidebar");
    sidebar_inner_content_wrapper.classList.add("open_sidebar");
});
const sidebar_hide_btn_ID = document.getElementById("sidebar_hide_btn_ID");
sidebar_hide_btn_ID.addEventListener("click", function () {
    side_bar_main_wrapper.classList.remove("active_mobile_sidebar");
    sidebar_inner_content_wrapper.classList.remove("open_sidebar");
});