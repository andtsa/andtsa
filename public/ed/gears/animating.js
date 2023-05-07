let deg = 0;
let w = window.innerWidth / 2;
let h = (window.innerHeight / 2) + 1;

let animate = () => {
	requestAnimationFrame(animate);
	c.clearRect(0,0,w,h);

	if (deg > 359) {
		deg = 0;
	}

	c1(r1.value);
	c2(r2.value);

	outputr.innerText = calc(r1.value, r2.value, rpmInitial.value);
	outputp1.innerText = perimeter(r1.value);
	outputp2.innerText = perimeter(r2.value);

	deg += rpmInitial.value / 600;
}