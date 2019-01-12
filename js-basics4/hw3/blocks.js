var n = 50;
var t = 0;
while( n > 0 ){
    document.getElementById("content").innerHTML += "<p style=\"width:100px; height:100px;" + 
                                                    "top:" + t + "px;" + "left:" + t + "px;" + 
                                                    "position:absolute; background-color:green\">" +
                                                    "Hello!</p>";
    n--;
    t += 100;
}