#include <iostream>
#include <vector>
#include <stack>
using namespace std;

vector<int> s;
char c[1000];

int main(){
    while (1){
        cin>>c;
        if (c[0]<='9' && c[0]>='0'){
            int x=0;
            for (int i=0; c[i]!='\0'; ++i){
                x*=10;
                x+=c[i]-'0';
            }
            s.push_back(x);
        }
        if (c[0]=='+'){
            int x = s[s.size()-2]+s[s.size()-1];
            s.pop_back();
            s.pop_back();
            s.push_back(x);
        }
        if (c[0]=='*'){
            int x = s[s.size()-2]*s[s.size()-1];
            s.pop_back();
            s.pop_back();
            s.push_back(x);
        }
        if (c[0]=='/'){
            int x = s[s.size()-2]/s[s.size()-1];
            s.pop_back();
            s.pop_back();
            s.push_back(x);
        }
        if (c[0]=='-'){
            int x = s[s.size()-2]-s[s.size()-1];
            s.pop_back();
            s.pop_back();
            s.push_back(x);
        }
        if (c[0]=='='){
            cout<<s.back()<<endl;
            break;
        }
    }
    return 0;
}
