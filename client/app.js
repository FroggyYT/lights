var s = io();

var onButton = document.createElement("button");
onButton.textContent = "Lights ON"
document.body.append(onButton);
onButton.addEventListener("click", () => {
	s.emit("lightAction", "on");
});

var offButton = document.createElement("button");
offButton.textContent = "Lights OFF"
document.body.append(offButton);
offButton.addEventListener("click", () => {
	s.emit("lightAction", "off");
});