let canvas = document.getElementById('c');
canvas.width = window.innerWidth / 2;
canvas.height = (window.innerHeight / 2) + 1;
let c = canvas.getContext('2d');

let circle = (x, y, r) => {
	c.beginPath();
	c.arc(x, y, r, 0, Math.PI * 2);
	c.fillStyle = 'white';
	c.fill();
	c.closePath();
}

let outlineRectPos = (deg, r) => {
	return [Math.sin(deg) * r, Math.cos(deg) * r];
}

let drawORect = (cx, cy, deg, r,rv) => {
	let x = outlineRectPos(deg, r)[1];
	let y = outlineRectPos(deg, r)[0];
	c.fillStyle = 'whitesmoke';
	c.fillRect(cx + x - (rv / 2), cy + y - (rv/2), rv, rv);
	// circle(cx + x, cy + y, 5);
}

let c1 = r => {
	circle((w / 2) - r, h / 2, r);
	drawORect((w / 2) - r, h / 2, deg, r, r / 10);
}
let c2 = r => {
	circle((w / 2) + r, h / 2, r);
	drawORect((w / 2) + r, h / 2, ((Math.round(1000 * ((rpmInitial.value * (2 * Math.PI * r1.value)) / (2 * Math.PI * r)))) / 1000), r, r / 10);
}