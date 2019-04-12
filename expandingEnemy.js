function ExpandingEnemy(x, y, v, maxExpansionCount) {
    this.x = x;
    this.y = y;
    this.r = 10;
    this.sizeChangeVelocity = v;
    this.expansionCount = 0;
    this.maxExpansionCount = maxExpansionCount;
    this.shrinking = false;
    this.tangible = false;
    this.done = false;

    this.update = function () {
        if (this.done) {
            return
        }

        if (this.expansionCount >= this.maxExpansionCount) {
            this.done = true;
            return
        }

        if (!this.tangible && this.r > 20) {
            this.tangible = true;
            return
        }

        if (this.expansionCount > this.maxExpansionCount / 2 && !this.shrinking) {
            this.sizeChangeVelocity = 0 - (this.sizeChangeVelocity)
            this.shrinking = true;
        }

        this.r += this.sizeChangeVelocity
        this.expansionCount += 1;
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