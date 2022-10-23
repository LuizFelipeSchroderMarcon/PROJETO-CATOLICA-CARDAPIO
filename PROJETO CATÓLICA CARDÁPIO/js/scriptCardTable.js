const plus = document.querySelector(".mais1"),
  minus = document.querySelector(".menos1"),
  num = document.querySelector(".sacola1");
var a1 = 0;
plus.addEventListener("click", () => {
  a1++;
  a1 = a1 < 10 ? "0" + a1 : a1;
  num.innerText = a1;
});

minus.addEventListener("click", () => {
  if (a1 > 0) {
    a1--;
    a1 = a1 < 10 ? "0" + a1 : a1;
    num.innerText = a1;
  }
});

function redirecionar(){
	alert("Você será redirecionado");
	window.location="https://wa.me/47999124255?text=Fiz%20um%20pedido%20e%20gostaria%20de%20saber%20sobre%20o%20status%20dele.";
}


// {
// const plus = document.querySelector(".mais2"),
// minus = document.querySelector(".menos2"),
// num = document.querySelector(".sacola2");

// var a2 = 0;
// plus.addEventListener("click", () => {
//   a2++;
//   a2 = a2 < 10 ? "0" + a2 : a2;
//   num.innerText = a2;
// });

// minus.addEventListener("click", () => {
//   if (a2 > 0) {
//     a2--;
//     a2 = a2 < 10 ? "0" + a2 : a2;
//     num.innerText = a2;
//   }
// });
// }



