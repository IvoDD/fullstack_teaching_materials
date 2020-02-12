#include <iostream>
using namespace std;

int main(){
    long long n, ans=0;
    cin>>n;
    while (n!=0){ //dokato n ima cifri
        int dig = n%10;
        ans = ans*10+dig;
        n = n/10; //mahame poslednata
    }
    cout<<ans*2<<endl;
    return 0;
}
