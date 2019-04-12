function Boss(x, y, r, img) {
    // Circle used to determine boss movement
    this.centerX = x;
    this.centerY = y;
    this.degree = 0;
    this.degreeChange = 5;
    this.rFromCenter = r;
    this.transitioning = true;

    // Boss position
    this.x = 0 - 40;
    this.y = y + r;
    this.r = 40;

    // Boss attributes
    this.tangible = false;
    this.done = false;
    this.img = img;
    this.frame = 0;

    this.update = function () {
        if (this.done) {
            return
        }

        if (this.transitioning) {
            if (this.x < this.centerX) {
                this.x += this.r;
                return
            } else {
                this.transitioning = false;
                this.tangible = true;
            }
        }

        if (this.frame >= 1000) {
            this.tangible = false;
            this.y += 2;
        } else {
            this.updateCircleCoordinates();
        }

        if (this.y > height) {
            this.done = true;
        }

        this.frame += 1;
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
        this.x = this.centerX + this.rFromCenter + this.rFromCenter * Math.cos(rads);
        this.y = this.centerY - this.rFromCenter + this.rFromCenter * Math.sin(rads);

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
