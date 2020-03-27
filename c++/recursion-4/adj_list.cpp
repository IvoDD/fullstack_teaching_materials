#include <iostream>
#include <vector>
using namespace std;

int n, m;
vector<int> e[100100];

int main(){
    cin>>n>>m;
    for (int i=0; i<m; ++i){
        int a, b;
        cin>>a>>b;
        e[a].push_back(b);
        e[b].push_back(a);
    }
    for (int i=0; i<n; ++i){
        cout<<i<<" -> ";
        for (int j=0; j<e[i].size(); ++j){
            cout<<e[i][j]<<" ";
        }cout<<endl;
    }
    return 0;
}
