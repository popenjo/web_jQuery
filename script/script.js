$('.sub').hide()
$('nav > ul > li').on('mouseover',function(){
    $(this).find('.sub').stop().slideDown()
})
$('nav > ul > li').on('mouseout',function(){
    $(this).find('.sub').stop().slideUp()
})

$('.c1 a:first-child').on('click',function(){
    $('.popup').show()
})

$('.popup a').on('click',function(){
    $('.popup').hide()
})

$('.c2').hide()
// 공지, 갤러리 오픈 / 아웃
$('.c12 .title a:nth-child(1)').on('click',function(){
    // active class
    // 모든 제목 active 해제
    $('.c12 .title a').removeClass()
    $(this).addClass('active')
    $('.c1').show()
    $('.c2').hide()
})
$('.c12 .title a:nth-child(2)').on('click',function(){
    $('.c12 .title a').removeClass()
    $(this).addClass('active')
    $('.c1').hide()
    $('.c2').show()
})

// slide
$('.slide').hide()
$('.slide').eq(0).show()

let count = 0

setInterval(function(){
    count++
    if(count > 2){count = 0}
    console.log(count)
    $('.slide').fadeOut() //제자리 숨기기
    $('.slide').eq(count).fadeIn()
},3000)
