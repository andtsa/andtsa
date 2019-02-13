let rpmInitial = document.getElementById('rpm');
let r1 = document.getElementById('r1');
let r2 = document.getElementById('r2');
let r1o = document.getElementById('r1o');
let r2o = document.getElementById('r2o');
let rpmo = document.getElementById('rpmo');
let rpmRes = document.getElementById('rpm2');
let btn = document.getElementById('btn');

let perimeter = r => {
	return 2 * Math.PI * r;
}

let calc = (r1, r2, rpm) => {
	return ((Math.round(1000 * ((rpm * (2 * Math.PI * r1)) / (2 * Math.PI * r2)))) / 1000);
}

r1.oninput = () => {
	r1o.innerText = r1.value;
}
r2.oninput = () => {
	r2o.innerText = r2.value;
}
rpm.oninput = () => {
	rpmo.innerText = rpmInitial.value;
}

animate();