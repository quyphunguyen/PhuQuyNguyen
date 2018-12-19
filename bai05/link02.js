var dem=0;
for (var i =0; i<=100; i++) {
	if (i%3==0||i%7==0) {
		dem++;
		document.writeln(" số nguyên chia hết cho 3 hoặc 7 nằm trong đoạn 1 đến 100"+i);
	}
}

document.writeln(dem);