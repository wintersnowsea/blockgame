//부모class
class GameObject {
    constructor(container, src, x, y, width, height, velX, velY) {
        //this가 붙은 것들은 이 객체가 죽을 때까지 유지
        //java에서는 전역변수 개념이 없음
        this.container = container;
        this.img = document.createElement("img");
        this.src = src;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velX = velX;
        this.velY = velY;

        this.img.src = this.src;

        //스타일 적용
        this.img.style.position = "absolute";
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";
        this.img.style.width = this.width + "px";
        this.img.style.height = this.height + "px";

        //부착
        this.container.appendChild(this.img);
    }
    //사물의 동작에 대한 표현은 매서드로 처리(함수)
    tick() {
        this.x += this.velX;
        this.y += this.velY;
    }
    render() {
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";
    }
}
