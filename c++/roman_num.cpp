#include <iostream>
using namespace std;

void f(int d, char x, char v, char i){
    if (d==9){
        cout<<i<<x;
        d=0;
    }
    if (d >= 5){
        cout<<v;
        d-=5;
    }
    if (d == 4){
        cout<<i<<v;
        d=0;
    }
    while(d>0){
        cout<<i;
        --d;
    }
}

int main(){
    int n, a, b, c, d;
    cin>>n;
    a = n/1000;
    b = n/100%10;
    c = n/10%10;
    d = n%10;
    f(a, '-', '-', 'M');
    f(b, 'M', 'D', 'C');
    f(c, 'C', 'L', 'X');
    f(d, 'X', 'V', 'I');
    return 0;
}
