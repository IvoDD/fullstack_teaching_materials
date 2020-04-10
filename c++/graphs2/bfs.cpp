#include <iostream>
#include <vector>
#include <queue>
using namespace std;

int n, m;
vector<int> e[100100];
queue<int> q;
bool used[100100];
int d[100100];
int pr[100100];

void bfs(int start){
    q.push(start);
    d[start] = 0;
    used[start] = 1;
    while(!q.empty()){
        int x = q.front();
        q.pop();
        for (int i=0; i<e[x].size(); ++i){
            int y = e[x][i];
            if (!used[y]){
                //tuk namirame che naj kusia put do y e prez x i e s dulzhine d[x]+1
                q.push(y);
                d[y] = d[x]+1;
                used[y] = 1;
                pr[y] = x;
            }
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
    int start, finish;
    cin>>start>>finish;
    bfs(finish);
    if (used[start]){
        for (int x=start; x!=finish; x=pr[x]){
            cout<<x<<" ";
        }
        cout<<finish<<"\n";
    }else{
        cout<<"no path\n";
    }
    return 0;
}
/*
6 8
0 1
1 2
2 3
3 4
4 5
5 0
3 5
0 4

7 10
0 1
1 2
0 2
1 3
2 3
2 4
3 4
4 6
3 5
5 6
*/
