#include <iostream>
using namespace std;
int main(){
    int n, a, b, c, d;
    cin>>n;
    a = n/1000;
    b = n/100%10;
    c = n/10%10;
    d = n%10;
    cout<<a;
    if (b!=0){
        cout<<b;
    }
    if (c!=0){
        cout<<c;
    }
    if (d!=0){
        cout<<d;
    }
    return 0;
}
