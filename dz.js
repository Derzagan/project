function FacktNum(n){
    if (n % 1 !== 0 && typeof n === 'number'){
        return " enter a number ";
    } else if( n <= 0) {
        return 1;
    }else {
        return n *  FacktNum(n-1)
    }


}


let x = FacktNum(5);
console.log(x)