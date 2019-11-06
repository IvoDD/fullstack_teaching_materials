#include <iostream>
using namespace std;
int main(){
    long long Y, M, D, h, m, s, S;
    cin>>Y>>M>>D>>h>>m>>s>>S;

    D--;
    for (int i=1; i<Y; ++i){
        if (i%4==0 && i%100>0 || i%400==0) D+=366;
        else D+=365;
    }
    switch(M-1){
        case 11: D+=30;
        case 10: D+=31;
        case 9: D+=30;
        case 8: D+=31;
        case 7: D+=31;
        case 6: D+=30;
        case 5: D+=31;
        case 4: D+=30;
        case 3: D+=31;
        case 2:
            if (Y%4==0 && Y%100>0 || Y%400==0) D+=29;
            else D+=28;
        case 1: D+=31;
    }
    h += D*24;
    m += h*60;
    s += m*60;

    s += S;

    m = s/60; s=s%60;
    h = m/60; m=m%60;
    D = h/24; h=h%24;
    for (Y=1; 1; ++Y){
        int daysY = 365;
        if (Y%4==0 && Y%100>0 || Y%400==0) daysY = 366;
        if (daysY > D) break;
        else D-=daysY;
    }
    for (M=1; 1; ++M){
        int daysM = 31;
        switch(M){
            case 2:
                if (Y%4==0 && Y%100>0 || Y%400==0) daysM = 29;
                else daysM = 28;
                break;
            case 4: daysM = 30; break;
            case 6: daysM = 30; break;
            case 9: daysM = 30; break;
            case 11: daysM = 30; break;
        }
        if (daysM > D) break;
        else D-=daysM;
    }
    D++;
    cout<<Y<<" "<<M<<" "<<D<<" "<<h<<":"<<m<<":"<<s<<endl;
    return 0;
}
