function FallingEnemy(x, y, x2, y2, v, r) {
    this.x = x;
    this.y = y;
    this.v = v;
    this.r = r;
    this.x2 = x2;
    this.y2 = y2;
    this.startX = x;
    this.startY = y;
    this.tangible = true;
    this.done = false;

    console.log(x, y, x2, y2, v, r)

    this.update = function () {
        if (this.done) {
            return
        }

        if (dist(this.startX, this.startY, this.x2, this.y2) <= dist(this.startX, this.startY, this.x, this.y)) {
            this.done = true;
            return
        }

        var p = calculateDash(this.v, this.x, this.y, this.x2, this.y2)

        this.x = p.x
        this.y = p.y
    }

    this.display = function () {
        if (this.done) {
            return
        }

        stroke(51);
        strokeWeight(0);
        ellipseMode(RADIUS);
        ellipse(this.x, this.y, this.r, this.r);
    }

    this.collidesWith = function (object) {
        var distance = dist(this.x, this.y, object.x, object.y);
        if (distance < object.r + this.r) {
            return true;
        }

        return false;
    }
}