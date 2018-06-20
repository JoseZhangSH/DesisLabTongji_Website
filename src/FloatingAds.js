var ggRoll1 = {
  roll: document.getElementById("roll1"),
  speed: 5,
  statusX: 1,
  statusY: 1,
  x: 100,
  y: 300,
  winW: document.documentElement.clientWidth - document.getElementById("roll1").offsetWidth,
  winH: document.documentElement.clientHeight - document.getElementById("roll1").offsetHeight,
  Go: function() {
    this.roll.style.left = this.x + 'px';
    this.roll.style.top = this.y + 'px';

    this.x = this.x + (this.statusX ? -1 : 1)
    if (this.x < 0) {
      this.statusX = 0
    }
    if (this.x > this.winW) {
      this.statusX = 1
    }

    this.y = this.y + (this.statusY ? -1 : 1)
    if (this.y < 0) {
      this.statusY = 0
    }
    if (this.y > this.winH) {
      this.statusY = 1
    }
  }
}
var interval = setInterval("ggRoll1.Go()", ggRoll1.speed);
ggRoll1.roll.onmouseover = function() {
  console.log('over')
  interval = setInterval("ggRoll1.Go()", 0.5)
};
ggRoll1.roll.onmouseout = function() {
  console.log('out')
  clearInterval(interval)
};


var ggRoll2 = {
  roll: document.getElementById("roll2"),
  speed: 10,
  statusX: 1,
  statusY: 1,
  x: 400,
  y: 100,
  winW: document.documentElement.clientWidth - document.getElementById("roll2").offsetWidth,
  winH: document.documentElement.clientHeight - document.getElementById("roll2").offsetHeight,
  Go: function() {
    this.roll.style.left = this.x + 'px';
    this.roll.style.top = this.y + 'px';

    this.x = this.x + (this.statusX ? -1 : 1)
    if (this.x < 0) {
      this.statusX = 0
    }
    if (this.x > this.winW) {
      this.statusX = 1
    }

    this.y = this.y + (this.statusY ? -1 : 1)
    if (this.y < 0) {
      this.statusY = 0
    }
    if (this.y > this.winH) {
      this.statusY = 1
    }
  }
}
var interval = setInterval("ggRoll2.Go()", ggRoll1.speed);
ggRoll2.roll.onmouseover = function() {
  document.getElementById('roll1').style.display = "none"
  console.log('over')
  interval = setInterval("ggRoll2.Go()", 0.5)
};
ggRoll2.roll.onmouseout = function() {
  console.log('out')
  clearInterval(interval)
};
