module.exports = function main(distance,wait_time) {
    let price=0;
    if(distance<=2){
        price=6+0.25*wait_time;
    }else if(distance<=8){
        price=6+0.8*(distance-2)+0.25*wait_time;
    }else {
        price=6+0.8*6+0.8*1.5*(distance-8)+0.25*wait_time;
    }
    return Math.round(price);
};