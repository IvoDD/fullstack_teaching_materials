#include <iostream>
#include <vector>
using namespace std;

vector<int> a[100100];

void task(int boss){
    for (int i=0; i<a[boss].size(); ++i){
        task(a[boss][i]);
    }
    cout<<boss<<" ";
}

int main(){
    int n;
    cin>>n;
    for (int i=1; i<n; ++i){
        int b;
        cin>>b;
        //i шефа е b
        //i е подчинен на b
        //трябва да добавя i в списъка с подчинени на b
        a[b].push_back(i);
    }
    task(0);
    return 0;
}

/*
13
0
1
1
2
2
7
0
9
0
9
8
8
*/
