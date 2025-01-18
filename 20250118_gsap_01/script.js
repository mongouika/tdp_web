document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
    // gsap code here!

    gsap.to('.sec1',{
        opacity:1,
        scale:1,
        scrollTrigger:{
          trigger:'.sec1',
          start:'top center',
          toggleActions:'play none none reverse',
          markers:true,
        }
     });
     gsap.to('.sec2',{
        opacity:1,
        scale:1,
        scrollTrigger:{
          trigger:'.sec2',
          start:'top center',
          toggleActions:'play none none reverse',
          markers:true,
        }
     });
     gsap.to('.sec3',{
        opacity:1,
        scale:1,
        scrollTrigger:{
          trigger:'.sec3',
          start:'top center',
          toggleActions:'play none none reverse',
          markers:true,
        }
     });


     gsap.to('.ec1',{
        opacity:1,
        x:'5%',
        scrollTrigger:{
          trigger:'.ec1',
          start:'top center',
          toggleActions:'play none none reverse',
        }
     });
     gsap.to('.ec2',{
        opacity:1,
        x:40,
        scrollTrigger:{
          trigger:'.ec2',
          start:'top center',
          toggleActions:'play none none reverse',
        }
     });
     gsap.to('.ec3',{
        opacity:1,
        x:40,
        scrollTrigger:{
          trigger:'.ec3',
          start:'top center',
          toggleActions:'play none none reverse',
        }
     });
});