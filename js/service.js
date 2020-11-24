const prop = {
  spaceDiameter: 55,
  dotDiameter: 45,
  wavelength: 300,
  velocity: .01,
  bgColor: `#aa4b41`,
  mainColor: `#2d3033`,
  direction: 1, //-1 /1
  displacement: 1, //0 -off 1 -on

  getDistance(x, y) {
    let w = innerWidth * .8;
    let h = innerHeight * .8;
    let dx = w / 2 - x;
    let dy = h / 2 - y;
    return Math.sqrt((dx ** 2) + (dy ** 2));
  },

  hexToRgb(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  },

  switchNum(value) {

    switch (value) {
      case 0: return value = 10;
      case 1: return value = 10;
      case 2: return value = 20;
      case 3: return value = 30;
      case 4: return value = 40;
      case 5: return value = 50;
      case 6: return value = 60;
      case 7: return value = 70;
      case 8: return value = 80;
      case 9: return value = 90;
    }
  },

  canvasBGColorChange() {
    prop.bgColor = form.bgColorChange.value;
    new WavesAnimation();
  },

  dotColorChange() {
    prop.mainColor = form.dotColorChange.value;
    new WavesAnimation();
  },

  changeSpaceDiameterValue() {
    let spaceDiameter = +form.spaceDiameterValue.value;

    if (spaceDiameter <= 9) {
      spaceDiameter = prop.switchNum(spaceDiameter);
    }

    prop.changeSpaceDiameter(spaceDiameter);
  },

  plusSpaceDiameter() {
    let spaceDiameter = +form.spaceDiameterValue.value;

    spaceDiameter += 1;
    prop.changeSpaceDiameter(spaceDiameter);
  },

  minusSpaceDiameter() {
    let spaceDiameter = +form.spaceDiameterValue.value;

    spaceDiameter -= 1;
    prop.changeSpaceDiameter(spaceDiameter);
  },

  changeSpaceDiameter(value) {
    prop.spaceDiameter = value;
    form.spaceDiameterValue.value = value;
    new WavesAnimation();
  },

  changeDotDiameterValue() {
    let dotDiameter = +form.dotDiameterValue.value;

    if (dotDiameter <= 9) {
      dotDiameter = prop.switchNum(dotDiameter);
    }

    prop.changeDotDiameter(dotDiameter);
  },

  plusDotDiameter() {
    let dotDiameter = +form.dotDiameterValue.value;

    dotDiameter += 1;
    prop.changeDotDiameter(dotDiameter);
  },

  minusDotDiameter() {
    let dotDiameter = +form.dotDiameterValue.value;
    dotDiameter -= 1;
    prop.changeDotDiameter(dotDiameter);
  },

  changeDotDiameter(value) {
    prop.dotDiameter = value;
    form.dotDiameterValue.value = value;
    new WavesAnimation();
  },

  changeWaveLengthValue() {
    let wavelength = +form.waveLengthValue.value;

    prop.changeWaveLength(wavelength);
  },

  plusWaveLength() {
    let wavelength = +form.waveLengthValue.value;

    wavelength += 5;
    prop.changeWaveLength(wavelength);
  },

  minusWaveLength() {
    let wavelength = +form.waveLengthValue.value;

    wavelength -= 5;
    prop.changeWaveLength(wavelength);
  },

  changeWaveLength(value) {
    prop.wavelength = value;
    form.waveLengthValue.value = value;
    new WavesAnimation();
  },
  
  changeSpeedValue() {
    let speedValue = +form.speedValue.value / 100;

    prop.changespeed(speedValue); 
  },

  plusSpeed() {
    let speedValues = +form.speedValue.value;

    speedValues +=  0.005;
    prop.changespeed(speedValues);
  },

  minusSpeed() {
    let speedValues = +form.speedValue.value;

    speedValues -= 0.005;
    prop.changespeed(speedValues);
  },

  changespeed(speed){
    prop.velocity = speed;
    form.speedValue.value = parseFloat(speed.toFixed(3));
    new WavesAnimation();
  },

  changeDirection() {
    let direction = +form.directionWaves.value;

    prop.direction = direction;
    new WavesAnimation();
  },

  changeDotsDisplacement() {
    let displacement = +form.dotsDisplacement.value;

    prop.displacement = displacement;
    new WavesAnimation();
  },

};