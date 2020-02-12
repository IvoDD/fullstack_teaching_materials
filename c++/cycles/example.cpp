#include <iostream>
#include <math.h>
using namespace std;
int main(){
    int n;
    cin>>n;
    double h = n;
    for (int i=0; i<10; ++i){
        h = (h + n/h)/2;
        cout<<h<<endl;
    }
    return 0;
}
