window.addEventListener('DOMContentLoaded', function(){
    init();
})

function init(){
    const lenis = new Lenis();

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);


    //実は基礎的なアニメーションにgsap使ってない
    const target = document.querySelectorAll('.animation-target-01 , .animation-target-02 ,.animation-target-03');

    //オプション設定
    const options = {
        root: null,
        rootMargin: '-20% 0px',
        threshold: 0,
    };

    //Intersection Observerの呼び出し
    const observer = new IntersectionObserver(callback, options);
    target.forEach((tgt) => {
        observer.observe(tgt);
    });

    //要素が交差したときの指示
    function callback(entries) {
        entries.forEach((entry) => {
            const target = entry.target;
            if (entry.isIntersecting) {
                target.classList.add('is-active');
            }
        });
    }

    //横スクロールセクションだけgsapの力を借りている
    const container = document.querySelector('.slide-box');
    const slides = document.querySelectorAll('.slide');
    const containerWidth = container.offsetWidth;
    gsap.to( slides, { // slidesに対して以下のアニメーションを設定
        xPercent: -100 * (slides.length - 1), // 横コンテンツの幅全てをスクロールしたい
        ease: "none", //アニメーションの種類をnoneにする
        scrollTrigger: {
            trigger: container, //containerに到達したら発火
            pin: true, // ピン留をtrueにすることでcontainerの縦スクロールが止まる
            scrub: 1, //スクロール当たりのアニメーションが動く時間
            end: () => "+=" + containerWidth, // 横スクロールが終わる地点
            anticipatePin: 1, // ピン留のタイミング
            invalidateOnRefresh: true, // リサイズ時の調整でtrueにしておく
        }
    })

}




