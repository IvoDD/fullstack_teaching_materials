var n = 1000;
var sum = n * (n + 1) / 2;

var a=true, b=false, c=false;
var imalipone2verni = a&&b || b&&c || a&&c;
var imalitochno2verni = imalipone2verni && !(a&&b&&c)

function asdf() {
    //document.getElementById(id-то на нещото на което искате да вземете стойността).value
    var number = Number( document.getElementById("number").value );
    var ans;
    if (number%2 == 1){
        ans = number*2;
    }else{
        ans = number;
    }
    document.getElementById("answer").innerHTML = ans;
    //console.log("world");
}

console.log(imalipone2verni, imalitochno2verni);