window.onload = function(){
    Particles.init({
      selector: '.background',
      maxParticles: 200,
      connectParticles: 'true',
      speed:1,
      minDistance: 120,
      sizeVariations: 2,
      color: '#e9c2ff'
    });
  }

function changeText(){
  const g = document.getElementById("enterToturial");
  g.innerText = "شماره سهامداری را وارد کنید و کد ملی را در قسمت رمز عبور وارد کنید";
}

const inputs = document.getElementById("inputs");