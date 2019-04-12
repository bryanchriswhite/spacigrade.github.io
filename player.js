function Player(x, y, maxDistance, img, img2) {
    this.x = x;
    this.y = y;
    this.walkSpeed = 5;
    this.dashSpeed = 25;
    this.dashing = false;
    this.dashEndX = 0;
    this.dashEndY = 0;
    this.dashMaxDistance = maxDistance;
    this.r = 20;
    this.health = 1;
    this.img = img;
    this.img2 = img2;

    this.interval = null;
    this.xDirection = 0;
    this.yDirection = 0;

    this.update = function () {
        if (this.dashing) { // dashing
            this.dash()
        }
        if (keyIsDown(LEFT_ARROW) || keyIsDown(A_KEY)) {
            player.walk(LEFT_ARROW)
        }

        if (keyIsDown(RIGHT_ARROW) || keyIsDown(D_KEY)) {
            player.walk(RIGHT_ARROW)
        }

        if (keyIsDown(UP_ARROW) || keyIsDown(W_KEY)) {
            player.walk(UP_ARROW)
        }

        if (keyIsDown(DOWN_ARROW) || keyIsDown(S_KEY)) {
            player.walk(DOWN_ARROW)
        }

        // prevent from leaving border
        if (this.x > width) {
            this.x = width - this.r
        }

        if (this.y > height - this.r) {
            this.y = height - this.r
        }

        if (this.x < 0) {
            this.x = this.r
        }

        if (this.y < 0) {
            this.y = this.r
        }
    }

    this.display = function () {
        stroke(51);
        strokeWeight(3);

        imageMode(CENTER);
        if (this.health > 0) {
            clearInterval(this.interval)
            this.interval = null;
            image(this.img, this.x, this.y, this.r * 2, this.r * 2);
        } else {
            if (this.interval == null) {
                that = this;
                this.randomDirection()
                this.interval = setInterval(function () {
                    that.randomDirection()
                }, 3000)
            }
            if (this.xDirection != undefined || this.yDirection != undefined) {
                this.x += this.xDirection;
                this.y += this.yDirection;
            }
            image(this.img2, this.x, this.y, this.r * 2, this.r * 2);
        }
    };

    this.randomDirection = function () {
        this.xDirection = Math.random() < .5 ? 1 : -1;
        this.yDirection = Math.random() < .5 ? 1 : -1;
    }

    this.walk = function (direction) {
        switch (direction) {
            case LEFT_ARROW:
                this.x -= this.walkSpeed
                break;
            case RIGHT_ARROW:
                this.x += this.walkSpeed
                break;
            case UP_ARROW:
                this.y -= this.walkSpeed
                break;
            case DOWN_ARROW:
                this.y += this.walkSpeed
                break;
        }
    }

    // initialize dashing animation
    this.initializeDash = function (x, y) {
        if (this.dashing) {
            return
        }

        var p = calculateDash(this.dashMaxDistance, this.x, this.y, x, y)
        this.dashEndX = p.x;
        this.dashEndY = p.y;
        this.dashing = true;
    }

    // Calculate ends points of a dash
    this.dash = function () {
        var p = calculateDash(this.dashSpeed, this.x, this.y, this.dashEndX, this.dashEndY)
        this.x = p.x
        this.y = p.y

        if (this.x == this.dashEndX && this.y == this.dashEndY) {
            this.dashing = false;
        }
    }
}