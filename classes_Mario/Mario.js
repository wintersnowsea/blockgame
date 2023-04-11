//주인공 만들기
class Mario extends GameObject{
    constructor(container,src,x,y,width,height,velX,velY){
        super(container,src,x,y,width,height,velX,velY);

        
        this.g=0.35;
        
    }
    gravity(){
        this.velY+=this.g;
    }

    tick(){
        this.gravity();
        
        this.x+=this.velX;
        this.y+=this.velY;

        //화면밖으로 나가면 die
        if(this.y>=parseInt(stage.style.height)  || this.y<=-80){
            gameFlag=!gameFlag;
            gameOver();
        }

        //벽돌충돌
        for(let a=0;a<brick.length;a++){
                let result=collisionCheck(this, brick[a]);
                if(result){
                    //alert("game over");
                    if(brick[a].type == 2){
                        //console.log('동전');
                        miniScore+=10;
                        //동전제거
                        this.container.removeChild(brick[a].img);

                        //배열에서 제거
                        let index=brick.indexOf(brick[a]);
                        brick.splice(index, 1);

                    }else if(brick[a].type == 0){

                        gameFlag=false;
                        gameOver();
                    }
            }
        }
    }    
}
