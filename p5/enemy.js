function Enemy(x, y) {
    this.x = x;
    this.y = y;
    this.r = 20;

    this.update = function () {
    }

    this.display = function () {
        ellipse(this.x, this.y, this.r, this.r);
    }
}