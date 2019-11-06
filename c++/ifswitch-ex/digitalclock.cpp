#include <iostream>
using namespace std;

int cnt(int d){
    switch(d){
        case 0: return 6;
        case 1: return 2;
        case 2: return 5;
        case 3: return 5;
        case 4: return 4;
        case 5: return 5;
        case 6: return 6;
        case 7: return 3;
        case 8: return 7;
        case 9: return 6;
    }
}

int main(){
    int h, m;
    cin>>h>>m;
    cout<<cnt(h/10) + cnt(h%10) + cnt(m/10) + cnt(m%10);
    return 0;
}
