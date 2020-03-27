#include <iostream>
using namespace std;

int c[100][100];

int comb(int k, int n){
    if (c[k][n] != 0) return c[k][n];
    if (k==0 || k==n) return c[k][n] = 1;
    return c[k][n] = comb(k-1, n-1) + comb(k, n-1);
}

int main(){
    int k, n;
    cin>>k>>n;
    cout<<comb(k, n);
    return 0;
}
