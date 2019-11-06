#include <iostream>
using namespace std;
int main(){
    int n;
    cin>>n;
    cout<< (n>5 ? 4 : 2) + 2;
    switch(n){
        case 9:
            cout<<"IX";
            break;
        case 8: cout<<"VIII"; break;
        case 7: cout<<"VII"; break;
        case 6: cout<<"VI"; break;
        case 5: cout<<"V"; break;
        case 4: cout<<"IV"; break;
        case 3: cout<<"I";
        case 2: cout<<"I";
        case 1: cout<<"I"; break;
        default: cout<<"nevaliden vhod";
    }
    return 0;
}
