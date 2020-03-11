#include <iostream>
using namespace std;

void mov(int n, int a, int b){
    if (n==0) return;
    int c = 6-a-b;
    mov(n-1, a, c);
    cout<<n<<" "<<a<<" "<<b<<"\n";
    mov(n-1, c, b);
}

int main(){
    ios::sync_with_stdio(false);
    int n;
    cin>>n;
    mov(n, 1, 3);
    return 0;
}
