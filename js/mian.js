    window.addEventListener('DOMContentLoaded', function () {
      const isMobile = window.innerWidth <= 450;
      if (isMobile) {
        const contentText3 = document.querySelector('.content-text3 p:nth-child(3)');
        if (contentText3 && contentText3.innerText.includes('2) 일반 부문')) {
          contentText3.innerHTML =
            '공모분야 : 1) 숏폼 부분, <br>2) 일반 부문(브이록, 다큐멘터리, 단편영화등)';
        }
      }
    });
    document.addEventListener("DOMContentLoaded", () => {
      const fadeEls = document.querySelectorAll(".fade-up");

      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target); // 한 번만 등장
            }
          });
        },
        {
          threshold: 1 // 30% 보이면 등장
        }
      );

      fadeEls.forEach(el => observer.observe(el));
    });    
        // 배경 음악 객체 생성
    const bgm = new Howl({
      src: ['sounds/waves.mp3'],
      autoplay: false, // autoplay는 브라우저 정책상 제한됨
      loop: true,
      volume: 1
    });

    // 자동 재생 시도
    window.addEventListener('DOMContentLoaded', () => {
      bgm.play().catch(err => {
        console.warn("Howler autoplay 실패:", err);
      });
    });

    // 사용자 클릭 시 재생 보장
    window.addEventListener('click', () => {
      if (!bgm.playing()) {
        bgm.play();
      }
    }, { once: true });
        const prompt = document.getElementById('audioPrompt');

    // 1초 뒤 자동으로 숨기기
    setTimeout(() => {
      prompt.style.top = '-80px'; // 자연스럽게 위로 사라지게
    }, 5000);

    // 클릭 시 즉시 숨기기
    prompt.addEventListener('click', () => {
      prompt.style.top = '-80px';
    });

    function openLink(){
      window.open(
        'https://docs.google.com/forms/d/1sbtf3GMcr-KonBNBudqorFfY7s-7BcBOe_PLoomOQoE/viewform?edit_requested=true',
        '_blank'
      );
    }