/* 랜덤값 계산이 귀찮고 번거롭지만,
앞으로 자주 사용될 가능성이 높으므로
함수로 정의해놓고 재사용하자 */
function getRandom(n){
    return parseInt(Math.random()*n); 
    //0~1미만의 소수점들이 반영_정수를 곱하면 max 숫자가 커짐
}

/* 범위가 있는 랜덤값
    min : 시작값
    max : 끝값
    예) 원하는 시작값이 5이고, 끝값이 8이라면
        Math.random()에 몇을 곱해야 하는가? 4
    */
function getRandomWithRange(min, max){
    var result=min+parseInt(Math.random()*(max-min+1)); 
    return result;
} 

/*게임 개발시 사용될 충돌 체크 함수*/
function collisionCheck(me, you){
    //충돌체크(10) 충돌여부판단
    //result1:북서쪽, result2:남서쪽, result3:북동쪽, result4:남동쪽
    let result1=(me.y+me.height >=you.y) && (me.x+me.width >= you.x);
    let result2=(me.x+me.width >=you.x) && (me.y <= you.y+you.height);
    let result3=(me.x<=you.x+you.width)&&(me.y+me.height>=you.y);
    let result4=(me.x<=you.x+you.width)&&(me.y<=you.y+you.height);
    
    return result1&&result2&&result3&&result4;
}

/*-----------------------------------------------------------------------------------
    날짜 관련 문자열 처리
    날짜 두자리수로 처리하는 함수
    n이 10보다 작으면, 앞에 '0' 문자열 부착
-------------------------------------------------------------------------------------    */
function getDateString(n){
    let str=n;
    if(n<10){
        str="0"+str;
    }
    return str;
}

