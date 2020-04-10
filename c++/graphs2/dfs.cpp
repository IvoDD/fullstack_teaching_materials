#include <iostream>
#include <vector>
using namespace std;

int n, m;
vector<int> e[100100];
bool used[100100];
bool has_cycle=false;

void dfs(int x, int pr){
    used[x] = 1;
    //cout<<x<<" ";
    for (int i=0; i<e[x].size(); ++i){
        if (!used[e[x][i]]){
            dfs(e[x][i], x);
        }else if (e[x][i] != pr){
            has_cycle=1;
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
    int c = 0;
    for (int i=0; i<n; ++i){
        if (!used[i]){
            dfs(i, -1);
            ++c;
        }
    }
    cout<<(n != m+c)<<endl;
    cout<<has_cycle<<endl;
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

7 5
0 1
1 2
2 6
2 3
4 5
*/
