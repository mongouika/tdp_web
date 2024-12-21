window.addEventListener("load", (event) => {
    init();
});

//splide
document.addEventListener( 'DOMContentLoaded', (event) => {

    const splide = new Splide( '.splide', {
        type : 'loop',
        autoplay: false,
        centeredSlides: true,
        slidesPerView: "auto",
        start: 1,
        perPage:1,
        perMove:1,
        padding: "20%",
        breakpoints: {
            768: {
                perPage:1,
                padding: "10%",
            },
        },
        video: {
            loop         : false,
            mute         : false,
            volume: 0.5,
        }
    });


    splide.mount( window.splide.Extensions );

    splide.on( 'move', function () {
        const active = splide_list.getElementsByClassName("is-next");
        const m_title = active[0].dataset.splideTitle;
        m_name.innerText = m_title;
    } );


} );



function init() {
    const page_body = document.getElementById("pagebody");
    page_body.classList.add("init");
}
