#include <iostream>
using namespace std;

int mem[1000];

int fib(int n){
    if (n==1 || n==2) return 1;
    if (mem[n]!=0) return mem[n];
    return mem[n] = fib(n-1)+fib(n-2);
}

int kb(int n, int k){
    if (n<=k) return 1;
    if (n==k+1) return k;
    return 2*kb(n-1, k) - kb(n-k-1, k);
}

int main(){
    cout<<fib(10)<<endl;
    cout<<kb(10, 6)<<endl;
    return 0;
}
