/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import $ from 'jquery';
// smooth scroll
$(document).ready(function () {
    $(".navbar .nav-link").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function () {
                window.location.hash = hash;
            });
        }
    });
});

// navbar toggle
// let nav_toggle = document.querySelector('#nav-toggle');
// let nav_ul = document.querySelector('ul.nav');

// // nav_toggle.preventDefault();
// if (nav_toggle) {
//     nav_toggle.addEventListener('click', function (e) {
//         e.preventDefault();
//         nav_toggle.toggleClass('is-active');
//         nav_ul.toggleClass('show');
//     });

// } 

$('#nav-toggle').on('click', function (event) {
    event.preventDefault();
    $(this).toggleClass('is-active');
    $('ul.nav').toggleClass('show');
    console.log(event.target);
});