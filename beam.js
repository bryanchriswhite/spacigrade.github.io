function Beam(y1) {
    this.x = 0; // Starting beam x
    this.y = y1; // starting beam y
    this.x2 = 0;
    this.y2 = y1;
    this.thickness = 1;
    this.frame = 0;
    this.tangible = false;
    this.done = false;

    this.update = function () {
        if (this.x2 <= width) {
            this.x2 += width / 10
        } else if (this.thickness < 40) {
            this.thickness += 3
            this.tangible = true;
        }

        if (this.frame >= 90) {
            this.done = true;
        }

        this.frame += 1;
    }

    this.display = function () {
        if (this.done) {
            return
        }

        fill(255, 255, 0)
        strokeWeight(this.thickness);
        line(this.x, this.y, this.x2, this.y2)
    }

    this.collidesWith = function (object) {
        var distance = dist(object.x, this.y, object.x, object.y);

        if (distance < object.r + this.thickness / 2) {
            return true;
        }

        return false;
    }
}