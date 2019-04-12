function Boss(x, y, r, img) {
    // Circle used to determine boss movement
    this.centerX = x;
    this.centerY = y;
    this.degree = 0;
    this.degreeChange = 9;
    this.rFromCenter = r;

    // Boss position
    this.x;
    this.y;
    this.r = 40;

    // Boss attributes
    this.tangible = true;
    this.done = false;
    this.img = img;

    this.update = function () {
        if (this.done) {
            return
        }

        this.updateCircleCoordinates()
    }

    this.display = function () {
        if (this.done) {
            return
        }

        stroke(51);
        strokeWeight(0);
        fill(220, 20, 60);
        // imageMode(CENTER);
        // image(this.img, this.x, this.y, this.r * 2, this.r * 2);
        ellipseMode(RADIUS);
        ellipse(this.x, this.y, this.r, this.r)
    }

    this.updateCircleCoordinates = function () {
        rads = this.degree / 360 * 2 * Math.PI
        this.x = this.centerX + this.rFromCenter * Math.cos(rads);
        this.y = this.centerY - this.rFromCenter * Math.cos(rads);

        this.degree += this.degreeChange
        if (this.degree > 360) {
            this.degree = this.degree % 360;
        }
    }

    this.collidesWith = function (object) {
        var distance = dist(this.x, this.y, object.x, object.y);

        if (distance < object.r + this.r - 10) {
            return true;
        }

        return false;
    }
}
