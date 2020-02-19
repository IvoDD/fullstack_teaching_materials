#include <iostream>
using namespace std;

int a[100100];

int main(){
    int n;
    cin>>n;
    for(int i=1; i<=n; i++){
        cin>>a[i];
    }
    int k;
    cin>>k;
    int l, r;
    l=1;
    r=n;
    bool da=false;
    while(l<r){
        int m = (l+r)/2;
        if (a[m]==k){
            l=m;
            r=m;
            da=true;
        }
        if (a[m]>k){
            r=m-1;
        }
        if (a[m]<k){
            l=m+1;
        }
        cout<<l<<" "<<r<<endl;
    }
    if(a[l]==k){
        cout<<"da";
    }else{
        cout<<"ne";
    }
return 0;
}
