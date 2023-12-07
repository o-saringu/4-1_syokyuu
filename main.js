function buttonClick(){
	one.value = one.value.replace(/\s+/g, "");
	two.value = two.value.replace(/\s+/g, "");
	three.value = three.value.replace(/\s+/g, "");
	
	if (one.value == "intx=60;"){
		text1.innerHTML = "正解";
	}else{
		text1.innerHTML = "不正解　解答：int x=60;";
	}

	if (two.value == "inty=60;"){
		text2.innerHTML = "正解";
	}else{
		text2.innerHTML = "不正解　解答：int y=60;";
	}

	if (three.value == "intd=120;"){
		text3.innerHTML = "正解";
	}else{
		text3.innerHTML = "不正解　解答：int d=120;";
	}
	
}

//解答欄１
var textBox1 = document.getElementById("one");
const text1 = document.getElementById("text1");

//解答欄２
var textBox2 = document.getElementById("two");
const text2 = document.getElementById("text2");

//解答欄3
var textBox3 = document.getElementById("three");
const text3 = document.getElementById("text3");




let checkButton = document.getElementById("btn");
checkButton.addEventListener("click", buttonClick);



