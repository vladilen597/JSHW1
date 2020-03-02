document.getElementById("btn").onclick = function(){
	changeStyle();
}

var image = document.getElementById("img");
var inct = document.getElementById("inner_ct");
var ct = document.getElementById("ct1");
var btnTask2 = document.getElementById('btn2');


var term = {
	canada: 20,
	russia: 15,
	belarus: 13,
	usa: 19,
	Mexico: 30,
	Krym: 29
}

function changeStyle(){
	image.style.display = 'block';
	inct.style.backgroundColor = 'pink';
}

document.getElementById("btn1").onclick = function(){
	inct.remove();
	ct.style.display = 'flex';
	ct.innerHTML += '<div class="cm"><span>Флекс-бокс 1</span></div>';
	ct.innerHTML += '<div class="cm"><span>Флекс-бокс 2</span></div>';
	ct.innerHTML += '<div class="cm"><span>Флекс-бокс 3</span></div>';
}

var maxTemp = -999;

btnTask2.addEventListener('click', function(){
	inct.remove();
	for (var avg in term) {
		document.write(avg + ': ' + term[avg] + '   ');
		if (maxTemp < term[avg]) {
			maxTemp = term[avg];
		}
	}
	document.write('Максимальная температура: ' + maxTemp);
});
