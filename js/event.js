//Hide button

for (let i = 0; i < hidebtn.length; i++){
  hidebtn[i].addEventListener('click', function () {
    if (hideBlock[i].style.display == 'none') {
      hideBlock[i].style.display = 'flex';
      hidebtn[i].innerHTML = 'Скрыть'
    } else {
      hideBlock[i].style.display = 'none';
      hidebtn[i].innerHTML = 'Показать';
    }
  })
}

//Input onchange events
form.bgColorChange.onchange = prop.canvasBGColorChange;
form.dotColorChange.onchange = prop.dotColorChange;

form.spaceDiameterValue.oninput = prop.changeSpaceDiameterValue;
document.querySelector('.spaceDiameter1').onclick = prop.plusSpaceDiameter;
document.querySelector('.spaceDiameter-1').onclick = prop.minusSpaceDiameter;

form.dotDiameterValue.oninput = prop.changeDotDiameterValue;
document.querySelector('.dotDiameter1').onclick = prop.plusDotDiameter;
document.querySelector('.dotDiameter-1').onclick = prop.minusDotDiameter;

form.waveLengthValue.oninput = prop.changeWaveLengthValue;
document.querySelector('.waveLength10').onclick = prop.plusWaveLength;
document.querySelector('.waveLength-10').onclick = prop.minusWaveLength;

form.speedValue.oninput = prop.changeSpeedValue;
document.querySelector('.pressSpeed').onclick = prop.plusSpeed;
document.querySelector('.pressSpeed-1').onclick = prop.minusSpeed;

form.directionWaves.onchange = prop.changeDirection;
form.dotsDisplacement.onchange = prop.changeDotsDisplacement;

//Basic settings for 1 animation
document.querySelector('.animation-item-1').addEventListener('click', function () {
  prop.spaceDiameter = 55;
  prop.dotDiameter = 45;
  prop.wavelength = 300;
  prop.velocity = 0.01;
  prop.bgColor = `#aa4b41`;
  prop.mainColor = `#2d3033`;
  prop.direction = 1;
  prop.displacement = 1;
 
  form.spaceDiameterValue.value = 55;
  form.dotDiameterValue.value = 45;
  form.waveLengthValue.value = 300;
  form.speedValue.value = 0.01;
  form.bgColorChange.value = `#aa4b41`;
  form.dotColorChange.value = `#2d3033`;
  form.directionWaves.value = 1;
  form.dotsDisplacement.value = 1;

  new WavesAnimation();
});
  
// Basic settings for 2 animation
document.querySelector('.animation-item-2').addEventListener('click', function () {
  prop.spaceDiameter = 32;
  prop.dotDiameter = 20;
  prop.wavelength = 150;
  prop.velocity = 0.01;
  prop.bgColor = `#662225`;
  prop.mainColor = `#ead39c`;
  prop.direction = 1;
  prop.displacement = 0;
 
  form.spaceDiameterValue.value = 32;
  form.dotDiameterValue.value = 20;
  form.waveLengthValue.value = 150;
  form.speedValue.value = 0.01;
  form.bgColorChange.value = `#662225`;
  form.dotColorChange.value = `#ead39c`;
  form.directionWaves.value = 1;
  form.dotsDisplacement.value = 1;

  new WavesAnimation();
});

// Basic settings for 3 animation
document.querySelector('.animation-item-3').addEventListener('click', function () {
  prop.spaceDiameter = 18;
  prop.dotDiameter = 40;
  prop.wavelength = 5;
  prop.velocity = 0.01;
  prop.bgColor = `#c6d166`;
  prop.mainColor = `#5c821a`;
  prop.direction = 1;
  prop.displacement = 0;
 
  form.spaceDiameterValue.value = 18;
  form.dotDiameterValue.value = 40;
  form.waveLengthValue.value = 5;
  form.speedValue.value = 0.01;
  form.bgColorChange.value = `#c6d166`;
  form.dotColorChange.value = `#5c821a`;
  form.directionWaves.value = 1;
  form.dotsDisplacement.value = 1;

  new WavesAnimation();
});
  
// Basic settings for 4 animation
document.querySelector('.animation-item-4').addEventListener('click', function () {
  prop.spaceDiameter = 10;
  prop.dotDiameter = 20;
  prop.wavelength = 2;
  prop.velocity = 0.02;
  prop.bgColor = `#c4dfe6`;
  prop.mainColor = `#66a5ad`;
  prop.direction = 1;
  prop.displacement = 0;
 
  form.spaceDiameterValue.value = 10;
  form.dotDiameterValue.value = 20;
  form.waveLengthValue.value = 2;
  form.speedValue.value = 0.02;
  form.bgColorChange.value = `#c4dfe6`;
  form.dotColorChange.value = `#66a5ad`;
  form.directionWaves.value = 1;
  form.dotsDisplacement.value = 1;

  new WavesAnimation();
});
  
// Basic settings for 5 animation
document.querySelector('.animation-item-5').addEventListener('click', function () {
  prop.spaceDiameter = 40;
  prop.dotDiameter = 60;
  prop.wavelength = 800;
  prop.velocity = 0.009;
  prop.bgColor = `#ffccbb`;
  prop.mainColor = `#006c84`;
  prop.direction = 1;
  prop.displacement = 0;
 
  form.spaceDiameterValue.value = 40;
  form.dotDiameterValue.value = 60;
  form.waveLengthValue.value = 800;
  form.speedValue.value = 0.009;
  form.bgColorChange.value = `#ffccbb`;
  form.dotColorChange.value = `#006c84`;
  form.directionWaves.value = 1;
  form.dotsDisplacement.value = 0;

  new WavesAnimation();
});