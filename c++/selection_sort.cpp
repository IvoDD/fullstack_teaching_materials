#include <iostream>
using namespace std;

int n;
int a[1024];

int main(){
    cin>>n;
    for (int i=0; i<n; ++i){
        cin>>a[i];
    }
    for (int i=0; i<n; ++i){
        //razmenia i-ti indeks s min [i, n-1]
        int mini = i;
        for (int j=i+1; j<n; ++j){
            if (a[mini] > a[j]){
                mini=j;
            }
        }
        // mini e indeks s min stojnost
        swap(a[i], a[mini]);
    }
    for (int i=0; i<n; ++i){
        cout<<a[i]<<" ";
    }cout<<endl;
    return 0;
}
