function Player(x, y) {
    this.x = x
    this.y = y
    this.velocity = 1;

    this.move = function (direction) {
        switch (direction) {
            case LEFT_ARROW:
                this.x = this.x - 1 * this.velocity;
                break;
            case RIGHT_ARROW:
                this.x = this.x + 1 * this.velocity;
                break;
            case UP_ARROW:
                this.y = this.y - 1 * this.velocity;
                break;
            case DOWN_ARROW:
                this.y = this.y + 1 * this.velocity;
                break;
        }
    }

    this.display = function () {
        ellipse(this.x, this.y, 20, 20);
    }

    this.dash = function () {

    }
}