#include <iostream>
using namespace std;

int f(int x){
    return x*x;
}

int g(int x){
    return f(x)*f(x);
}

int h(int x){
    if (x==0){
        return 0;
    }
    return 1+h(x-1);
}

int s(int x, int y){
    if (y==0){
        return x;
    }
    return s(x+1, y-1);
}

int fact(int n){
    if (n==0){
        return 1;
    }
    return n*fact(n-1);
}

int mod = 1001;

int st(int a, int b){
    if (b==0){
        return 1;
    }
    int x = st(a, b/2);
    x = (x*x)%mod;
    if (b%2==1){
        x = (x*a)%mod;
    }
    return x;
}

int main(){
    cout<<st(1000, 1000000000)<<endl;
    return 0;
}
