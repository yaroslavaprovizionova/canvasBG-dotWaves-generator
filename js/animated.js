window.onload = () => new WavesAnimation();

let form = document.forms.canvasValues;
let hidebtn = document.querySelectorAll('.hide');
let hideBlock = document.querySelectorAll('.form-input-wr');
let dotsList = [];

class WavesAnimation {
  constructor() {
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.dotsList = dotsList;
    this.spaceDiameter = prop.spaceDiameter;
    this.dotDiameter = prop.dotDiameter;
    this.wavelength = prop.wavelength;
    this.velocity = prop.velocity;

    this.setCanvasSize();
    this.changeCanvasBGColor();
    this.createDots();
    this.drawAnimation(this.ctx);

    window.onresize = () => {
      this.setCanvasSize();
      this.changeCanvasBGColor();
      this.createDots();
    }
  }

  setCanvasSize() {
    this.w = this.canvas.width = innerWidth * .8;
    this.h = this.canvas.height = innerHeight * .8;
    this.canvas.style.background = `rgba(17, 17, 23, 1)`;
  } 

  changeCanvasBGColor() {
    this.canvas.style.background = `${prop.bgColor}`;
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.w, this.h);
  }

  createDots() {
    this.dotsList = [];

    const dotsCountX = Math.floor(this.w / prop.spaceDiameter);
    const dotsCountY = Math.floor(this.h / prop.spaceDiameter);
    const startX = (prop.spaceDiameter + this.w - dotsCountX * prop.spaceDiameter ) / 2;
    const startY = (prop.spaceDiameter + this.h - dotsCountY * prop.spaceDiameter) / 2;
    let displacement = prop.spaceDiameter / 4 * prop.displacement;


    for (let j = 0; j < dotsCountY; j++){
      displacement = - displacement;
      let y = startY + j * prop.spaceDiameter;
      for (let i = 0; i < dotsCountX; i++) {
        let x = startX + i * prop.spaceDiameter + displacement;
        this.dotsList.push(new Dot(x, y));
      }
    }
  }

  drawAnimation() {
    this.clearCanvas();
    this.dotsList.forEach(dot => dot.update(this.ctx));
    window.requestAnimationFrame(() => this.drawAnimation());
  }

}

class Dot {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = prop.dotDiameter / 2;
    this.scale = prop.getDistance(x, y) / prop.wavelength;
  }

  draw(ctx) {
    let hexColorR = prop.hexToRgb(prop.mainColor);
    let colorR = hexColorR.r;
    let colorG = hexColorR.g;
    let colorB = hexColorR.b;
    let s = (1 - Math.abs(Math.sin(this.scale)));
    let mainColor = `rgba(${colorR}, ${colorG}, ${colorB}, ${s} )`;
    let r = this.radius * s;

    ctx.beginPath();
    ctx.arc(this.x, this.y, r, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.fillStyle = mainColor;
    ctx.fill();
  }
  
  resize(ctx) {
    this.scale = this.scale - prop.velocity * prop.direction;
  }

  update(ctx) {
    this.resize(ctx);
    this.draw(ctx);
  }
}






