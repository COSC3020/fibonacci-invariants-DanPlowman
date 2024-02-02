function fib(n) {

    var fib_ans =[0];
    if (n==0)return fib_ans;

    fib_ans[1]=1;
    if (n==1)return fib_ans;

    for(i=2; i<=n; i++) fib_ans[i] = fib_ans[i-1]+fib_ans[i-2];
    
    return fib_ans;
}
