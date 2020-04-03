#include <iostream>
#include <vector>
using namespace std;

int n, m;
vector<int> e[100100];
bool used[100100];

int dfs(int x){
    int ans = x;
    used[x] = 1;
    for (int i=0; i<e[x].size(); ++i){
        if (!used[e[x][i]]){
            ans+=dfs(e[x][i]);
        }
    }
    return ans;
}

int main(){
    cin>>n>>m;
    for (int i=0; i<m; ++i){
        int a, b;
        cin>>a>>b;
        e[a].push_back(b);
        e[b].push_back(a);
    }
    for (int i=0; i<n; ++i){
        if (!used[i]){
            cout<<dfs(i)<<endl;
        }
    }
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
