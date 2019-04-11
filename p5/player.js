var dashTime = 250

function Player(x, y) {
    this.x = x
    this.y = y
    this.walkSpeed = 1;
    this.dashSpeed = 5;
    this.dashing = 0;

    this.move = function (x, y, speed) {
        this.x += x * speed;
        this.y += y * speed;
    }

    this.display = function () {
        ellipse(this.x, this.y, 20, 20);
        // this.animate(Date.now())
        // if (Date.now() % 10 == 0) {
        //     console.log(this.dashing)
        // }
    }

    this.walk = function (direction) {
        switch (direction) {
            case LEFT_ARROW:
                x = -1
                y = 0
                break;
            case RIGHT_ARROW:
                x = 1
                y = 0
                break;
            case UP_ARROW:
                x = 0
                y = -1
                break;
            case DOWN_ARROW:
                x = 0
                y = 1
                break;
        }

        this.move(x, y, this.walkSpeed)
    }

    this.dash = function (x, y) {
        // slope = calculateSlope(this.x, this.y, x, y)
        xDist = x - this.x
        yDist = y - this.y
        // dashY = slope * dashX - this.y

        // dashX = x - this.x;
        // dashY = y - this.y;

        dist = Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
        maxScale = 10 / dist
        dashX = this.x + xDist * maxScale
        dashY = this.y + yDist * maxScale

        //
        // if (c > 10) {
        //     c = 10
        // }
        //
        // a = (c^2 - b^2)^(1/2)

        // dashY = slope * dashX// + this.y

        // if (dashX + dashY > 10) {
        //     maxA =
        // }

        if (this.dashing > 0) {
            return
        }

        that = this
        setTimeout(function () {
            that.dashing = 0;
        }, dashTime);
        this.dashing = dashTime;

        this.move(dashX, dashY, 1)
    }

    this.animate = function (time) {
        if (this.dashing) {
            this.move(this.dashX - this.x, this.dashY - this.y)
            // this.x += this.dashSpeed;
            // this.y += this.dashSpeed;
        }

        remainingDash = this.dashing - Date.now() - time
        if (remainingDash <= 0) {
            this.dashing = 0
            return
        }
        this.dashing = remainingDash
    }
}