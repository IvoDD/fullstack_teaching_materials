#include <bits/stdc++.h>
using namespace std;

int n;
int a[1024];

bool cmp(int a, int b){
    return a%10<b%10;
}

int main(){
    cin>>n;
    for (int i=0; i<n; ++i){
        cin>>a[i];
    }

    sort(a+0, a+n, cmp);

    for (int i=0; i<n; ++i){
        cout<<a[i]<<" ";
    }cout<<endl;
    return 0;
}
