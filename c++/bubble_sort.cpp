#include <bits/stdc++.h>
using namespace std;

int n;
int a[1024];

int main(){
    cin>>n;
    for (int i=0; i<n; ++i){
        cin>>a[i];
    }

    for (int i=1; i<n; ++i){
        for (int j=i; j>0 && a[j-1]>a[j]; --j){
            swap(a[j], a[j-1]);
        }
    }

    for (int i=0; i<n; ++i){
        cout<<a[i]<<" ";
    }cout<<endl;
    return 0;
}
