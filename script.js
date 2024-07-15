const p_red = document.createElement("p");
p_red.setAttribute("style", "color: red"); // css
p_red.innerText = "Hey I'm red!";



const h3 = document.createElement("h3");
h3.style.cssText = "color: blue"; // css
h3.innerText = "I'm a blue h3!";



const div = document.createElement("div");
div.style.cssText = "border: 5px solid black; background-color: pink;";

const div_h1 = document.createElement("h1");
div_h1.textContent = "I'm in a div";

const div_p = document.createElement("p");
div_p.textContent = "ME TOO!";

div.appendChild(div_h1);
div.appendChild(div_p);



let container_ref = document.querySelector("#container"); // ref to element
container.appendChild(p_red);
container.appendChild(h3);
container.appendChild(div);

