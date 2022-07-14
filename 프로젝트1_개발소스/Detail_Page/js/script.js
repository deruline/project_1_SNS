
let header = document.querySelector('.s_header');
header.classList.add('sticky');


$(document).ready(function(){
    
})


// top 버튼
$(document).ready(function(){
    $('.top').hide();
    $(window).scroll(function(){
        if ( $( window ).scrollTop() > 200 ) { // 스크롤 내릴 표시, 높을수록 스크롤을 더 내려야함
                $('.top').fadeIn();
            } else {
                $('.top').fadeOut();
            }
    });
})

// 토글 버튼
const toggle = document.querySelector(".s_toggle img");
toggle.addEventListener("click", boom)
        
function boom(e){
    e.preventDefault();
    let nav = document.querySelector("nav");
    nav.classList.toggle("on")
}
