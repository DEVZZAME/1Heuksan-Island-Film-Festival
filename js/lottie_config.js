
  const shipAnimation = lottie.loadAnimation({
    container: document.getElementById('ship-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'json/flowing.json'
  });

  shipAnimation.setSpeed(0.5);

  const whaleAnimation = lottie.loadAnimation({
    container: document.getElementById('whale-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'json/whale.json'
  });

  whaleAnimation.setSpeed(0.5);