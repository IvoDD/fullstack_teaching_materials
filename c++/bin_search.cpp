#include <iostream>
using namespace std;
int main(){
    int n, l=1, r;
    cin>>n;
    r=n;
    while(l<r){
        int m = (l+r)/2;
        cout<<m<<endl;
        char c;
        cin>>c;
        if (c=='='){
            l=m;
            r=m;
        }
        if (c=='<'){
            r=m-1;
        }
        if (c=='>'){
            l=m+1;
        }
    }
    cout<<"number: "<<l<<endl;
    return 0;
}
