#include <iostream>
using namespace std;

int main(){
    long long n, nn, cnt=0, sum=0, pr=1;
    cin>>n;
    nn=n;
    while(nn!=0){
        ++cnt;
        nn/=10;
    }
    for(int i=cnt-1; n!=0; --i){ //dokato n ima cifri
        int dig = n%10;
        if (i%2==0){
            sum += dig;
        }else{
            pr *= dig;
        }
        n = n/10; //mahame poslednata
    }
    cout<<sum<<" "<<pr<<endl;
    return 0;
}
