#include <iostream>
using namespace std;

int main(){
    long long n, cnt=0, pr=1;
    cin>>n;
    while(n!=0){ //dokato n ima cifri
        int dig = n%10;
        if (dig%2==0){
            cnt++;
        }else{
            pr *= dig;
        }
        n = n/10; //mahame poslednata
    }
    cout<<cnt<<" "<<pr<<endl;
    return 0;
}
