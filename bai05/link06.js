var n;
var s=1;
var g=0;
do{
	n=parseInt(prompt("Nhập số nguyên N:"));
}while(n<0);
for (var i = 1; i <=n; i++) {
	s=s*i;
     g+= i / s; 
}

document.write("tổng S = 1 /1! + 2 /2! + ….+ n / n! là: "+g);