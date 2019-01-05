function double_fact(){
    var n = Number( document.getElementById("in").value );

    var b=1, c=2;
    while(c < n+1){
        b *= c;
        c += 2;
    }
    
    document.getElementById("answer").innerHTML = b;
}