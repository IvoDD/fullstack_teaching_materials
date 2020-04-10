#include <iostream>
using namespace std;

int n, m;
int a[1024][1024];

int main(){
    cin>>n>>m;
    for (int i=0; i<n; ++i){
        for (int j=0; j<m; ++j){
            cin>>a[i][j];
        }
    }
    int k;
    cin>>k;
    for (int i=k; i<n-1; ++i){
        for (int j=0; j<m; ++j){
            a[i][j] = a[i+1][j];
        }
    }
    n--;
    for (int i=0; i<n; ++i){
        for (int j=0; j<m; ++j){
            cout<<a[i][j]<<" ";
        }cout<<endl;
    }
    return 0;
}
