#include <iostream>
using namespace std;

int a[1000], b=0;

int main(){
    while(1){
        int n;
        cin>>n;
        if (n==1){
            cin>>a[b++];
        }
        if (n==2){
            cout<<a[--b]<<endl;
        }
        if (n==0){
            break;
        }
    }
    return 0;
}
