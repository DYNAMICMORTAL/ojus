document.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(ScrollTrigger);
  
    var video = document.getElementById('background-video');
  
    gsap.to(video, {
      scrollTrigger: {
        trigger: '.video-container',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
      playbackRate: 1,
      ease: 'none',
    });
  });
  