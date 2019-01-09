var tabs=document.getElementsByTagName("tab");
for (var i = 0; i <tabs.length; i++) {
	tabs.addEventListener("click", function(){
		var active= document.getElementsByClassName('active')[0];
		active.className="secstion";
		this.parentNode().className="cha active";
	})
}	