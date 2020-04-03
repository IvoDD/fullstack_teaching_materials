#include <iostream>
#include <vector>
using namespace std;

int n, m;
vector<int> e[100100];
bool used[100100];

void dfs(int x){
    used[x] = 1;
    cout<<x<<" ";
    for (int i=0; i<e[x].size(); ++i){
        if (!used[e[x][i]]){
            dfs(e[x][i]);
        }
    }
}

int main(){
    cin>>n>>m;
    for (int i=0; i<m; ++i){
        int a, b;
        cin>>a>>b;
        e[a].push_back(b);
        e[b].push_back(a);
    }
    dfs(0);
    return 0;
}
/*
7 6
0 1
1 2
2 6
6 0
2 3
4 5
*/
