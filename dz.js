function fib(n) {
    if ( n <= 0){
        return 0;
    }else if (n == 1){
        return 1;
    }
    let a = 0,
    b = 1;
    for (let i = 1; i < n; i++){
        a, b = a + b;
        return b;

    }



    
}
res = fib(5);
console.log(res)