

//splide
 

const option1 = {
    loop:true,
}

const option2 = {
    loop:false,
}

new Splide( '.classname_a' , option1).mount();
new Splide( '.classname_b' , option2).mount();




const elms = document.getElementsByClassName( 'splide_auto' );

    for ( let i = 0; i < elms.length; i++ ) {
        //alert(elms[i].className);
        if(i == 0){ //条件は目的によって変わるよ
            //extenstionつかわない
            var options = {
                perPage: 2,
                gap: 50
            }
            new Splide( elms[ i ] , options).mount();
        }else{
            //extenstionつかう
            var options = {
                type : 'loop',
                perPage: 5,
                gap: 50,
                autoScroll: {
                    speed: -10,
                },
            }
            new Splide( elms[ i ] , options).mount(window.splide.Extensions);
    }
}


//swiper

const swiper_v = new Swiper('.sw_vis', {
    loop: true,
    slidesPerView: 1.5,
    centeredSlides : true,
    spaceBetween:20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

//キャプション用リストを捕まえる
const matches = document.querySelectorAll("#caption > li");
//最初のひとつは表示しておく
matches[0].classList.add('active');


//swiperがズレたら
swiper_v.on('slideChange', function () {
    //全部キャプション消す
    for(let i=0 ; i < matches.length ; i++){
        matches[i].classList.remove('active');
    }
    //関係あるやつだけ表示する
    const num = swiper_v.realIndex;
    　matches[num].classList.add('active');
    
});










