#include <iostream>
using namespace std;

int n, a[1000000];

int main(){
    cin>>n;
    for (int i=0; i<n; ++i){
        cin>>a[i];
    }
    for (int i=n-1; i>=0; --i){
        cout<<a[i]<<" ";
    }
    //cout<<endl<<"\n";
    return 0;
}