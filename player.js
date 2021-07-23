class Player{
    constructor(){
        this.size = 50;
        this.x = this.size;
        this.y = height - this.size;
        this.velocityY = 0;
        this.gravity = 2;
    }

    jump(){
        if (this.y === height - this.size){
            this.velocityY = -20;
        }
    }

    move(){
        this.y += this.velocityY;
        this.velocityY = this.velocityY + this.gravity;
        this.y = constrain(this.y, 0, height - this.size)
    }

    show(){
        image(playerImage,this.x, this.y, this.size, this.size)
    }

    collided(obstacleToCheck) {
        let isColliding = collideRectRect(this.x,
             this.y,
              this.size -40,
               this.size -10,
                obstacleToCheck.x,
                 obstacleToCheck.y,
                  obstacleToCheck.size -40,
                   obstacleToCheck.size -10);
        return isColliding;
    };
}