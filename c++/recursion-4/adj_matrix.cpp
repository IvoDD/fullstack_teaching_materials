#include <iostream>
using namespace std;

int n, m;
int e[1000][1000];

int main(){
    cin>>n>>m;
    for (int i=0; i<m; ++i){
        int a, b;
        cin>>a>>b;
        e[a][b] = 1;
        e[b][a] = 1;
    }
    for (int i=0; i<n; ++i){
        for (int j=0;j<n; ++j){
            cout<<e[i][j];
        }cout<<endl;
    }
    return 0;
}
