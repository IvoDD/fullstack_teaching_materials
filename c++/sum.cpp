#include <iostream>
using namespace std;

int n, a[1000000];

int main(){
    cin>>n;
    for (int i=0; i<n; ++i){
        cin>>a[i];
    }
    int x, y;
    long long sum=0;
    cin>>x>>y;
    for (; x<=y; ++x){
        sum += a[x];
    }
    cout<<sum<<endl;
    return 0;
}
