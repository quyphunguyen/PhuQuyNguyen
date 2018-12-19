var n;
var tong=0;
do{
n=parseInt(prompt("nhập vào số nguyên n:"));

}while(n<=0);
for (var i = 0; i <=n; i++) {
	tong=tong+i;
}
document.write("S = 1 + 2 + 3+ ... + n là:"+tong);