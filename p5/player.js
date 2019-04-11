var dashTime = 250

function Player(x, y) {
    this.x = x
    this.y = y
    this.walkSpeed = 1;
    this.dashSpeed = 5;
    this.dashing = false;
    this.dashEndX = 0;
    this.dashEndY = 0;
    this.dashMaxDistance = 100;

    this.update = function () {

        if (this.dashing) { // dashing

            var p = this.dashPoints(this.dashSpeed, this.x, this.y, this.dashEndX, this.dashEndY)
            this.x = p.x
            this.y = p.y

            if (this.x == this.dashEndX && this.y == this.dashEndY) {
                this.dashing = false
            }
        } else { // walking 
            if (keyIsDown(LEFT_ARROW)) {
                player.walk(LEFT_ARROW)
            }

            if (keyIsDown(RIGHT_ARROW)) {
                player.walk(RIGHT_ARROW)
            }

            if (keyIsDown(UP_ARROW)) {
                player.walk(UP_ARROW)
            }

            if (keyIsDown(DOWN_ARROW)) {
                player.walk(DOWN_ARROW)
            }
        }
    }

    this.display = function () {
        ellipse(this.x, this.y, 20, 20);
    }

    this.walk = function (direction) {
        switch (direction) {
            case LEFT_ARROW:
                this.x -= 1
                break;
            case RIGHT_ARROW:
                this.x += 1
                break;
            case UP_ARROW:
                this.y -= 1
                break;
            case DOWN_ARROW:
                this.y += 1
                break;
        }
    }

    // initialize dashing animation
    this.dash = function (x, y) {
        if (this.dashing) {
            return
        }

        console.log("player.dash", this.dashMaxDistance, this.x, this.y, x, y)

        var p = this.dashPoints(this.dashMaxDistance, this.x, this.y, x, y)
        this.dashEndX = p.x
        this.dashEndY = p.y
        this.dashing = true
    }

    // Calculate ends points of a dash
    this.dashPoints = function (len, x1, y1, x2, y2) {
        console.log("Original", len, x1, y1, x2, y2)
        var xDist = x2 - x1;
        var yDist = y2 - y1;
        var dist = Math.sqrt(xDist * xDist + yDist * yDist);

        if (len >= this.dashMaxDistance) {
            len = this.dashMaxDistance
        }

        var fractionOfTotal = len / dist;

        var p = {
            x: x1 + (xDist * fractionOfTotal),
            y: y1 + (yDist * fractionOfTotal)
        }

        console.log("Moving from ", x1, y1, " to ", p.x, p.y)
        return p
    }
}

function distance(x1, y1, x2, y2) {
    xDist = x1 - x2;
    yDist = y1 - y2;

    return Math.sqrt(xDist * xDist + yDist * yDist);
}