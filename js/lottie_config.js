
  const shipAnimation = lottie.loadAnimation({
    container: document.getElementById('ship-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/json/flowing.json'
  });

  // 속도 조절 (1 = 기본속도, 0.5 = 절반 속도, 2 = 2배 빠름)
  shipAnimation.setSpeed(0.5);
