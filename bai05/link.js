var sn;
var n;
do{
	sn=prompt("nhập số nguyên dương n= ");
	n=parseInt(sn);
}while(n<0);
var smang= new Array(n);
var mang= new Array(n);
for (var i =0; i < mang.length; i++) {
	smang[i]= prompt("nhập phần tử thứ"+(i+1));
	mang[i]=parseInt(smang[i]);
}
var tong=0;
for (var i =0; i < mang.length; i++) {
	tong=tong + mang[i];
}
document.writeln("tổng mảng có số phần tử là :"+tong);


