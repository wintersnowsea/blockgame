//장애물 생성하기
class Brick extends GameObject {
    constructor(container, src, x, y, width, height, velX, velY,type){
        super(container, src, x, y, width, height, velX, velY);
        this.type = type;
    }

}