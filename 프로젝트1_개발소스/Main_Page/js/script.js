// window.addEventListener("scroll", function(){
//     const header = this.document.querySelector(".m_header");
//     // header.classList.toggle("sticky", window.scrollY > 0) 
//     header.classList.add("sticky") ;
// });

const header = document.querySelector(".m_header");
header.classList.add("sticky");

// 토글 버튼
const toggle = document.querySelector(".m_toggle>img");
toggle.addEventListener("click", boom)
        
function boom(e){
    e.preventDefault();
    let nav = document.querySelector("nav");
    nav.classList.toggle("on")
}

// 스크롤 (지정한 영역에 들어오면 이벤트 발생)
$(document).ready(function(){
    function boom(){
        var windowHeight = $(window).height();
        var topWindow = $(window).scrollTop();
        var targetPosition = $('#info').offset().top;
        var m_p_i3 = $('#m_p_i3');
        var m_p_i4 = $('#m_p_i4');
        var m_p_i5 = $('#m_p_i5');

            if(topWindow >  targetPosition - windowHeight * 0.15){
                $(m_p_i3).attr('data-aos-offset','100');
                $(m_p_i4).attr('data-aos-offset','100');
                $(m_p_i5).attr('data-aos-offset','100');
                console.log("boom");
        }
    }
    $(window).scroll(function(){
        boom();
    })
    $(window).scroll(function(){
        if ( $( window ).scrollTop() > 100 ) { 
            $('.m_m_b').addClass('bot');
        } else {
            $('.m_m_b').removeClass('bot');
        }
    })
})

// 체크박스 확인 (pc)
$(document).ready(function(){
    $("#box_p").change(function(){
        if($("#box_p").is(":checked")){
            $("#m_p_c4").addClass('checked');
            $("#m_p_c4_check").addClass('checked');
        }
        else{
            $("#m_p_c4").removeClass('checked');
            $("#m_p_c4_check").removeClass('checked');
        }
    });
});

// 체크박스 확인 (mobile)
$(document).ready(function(){
    $("#box_m").change(function(){
        if($("#box_m").is(":checked")){
            $("#m_m_c3").addClass('checked');
            $("#m_m_c3_check").addClass('checked');
        }
        else{
            $("#m_m_c3").removeClass('checked');
            $("#m_m_c3_check").removeClass('checked');
        }
    });
});

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
