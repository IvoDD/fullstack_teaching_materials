#include <iostream>
using namespace std;

int f(int a, int b, int c){
    if (b==0) return c;
    return f(a, b-1, c*a);
}

void g(int i){
    cout<<i<<endl;
}

void cycle(int from, int to, int step){
    for (int i=from; i<to; i+=step){
        g(i);
    }
}

void cycle_r(int from, int to, int step){
    if (from >= to) return;
    g(from);
    cycle_r(from+step, to, step);
}

int a[100100], b[100100];
void m_sort(int from, int to){//[from, to)
    if (from+1 == to) return;
    int mid = (from+to)/2;
    m_sort(from, mid);
    m_sort(mid, to);
    int i=from, j=mid;
    for (int k=from; k<to; ++k){
        if (j>=to || i<mid && a[i] < a[j]){
            b[k] = a[i];
            ++i;
        }else{
            b[k] = a[j];
            ++j;
        }
    }
    for (int k=from; k<to; ++k){
        a[k] = b[k];
    }
}

int main(){
    int n;
    cin>>n;
    for (int i=0; i<n; ++i){
        cin>>a[i];
    }
    m_sort(0, n);
    for (int i=0; i<n; ++i){
        cout<<a[i]<<" ";
    }
    return 0;
}
