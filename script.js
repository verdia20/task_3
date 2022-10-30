//Nomor 1
let changeText = document.getElementById("name");
changeText.innerText = "Membuat Teks (No. 1)";

//Nomor 2
let newElement = document.createElement("p");
newElement.innerHTML = "Menambah Elemen Baru (No. 2)";
changeText.appendChild(newElement);

//Nomor 3

function increment() {
  document.getElementById("count").innerText++;

  if (document.getElementById("count").innerText == 7) {
    const hiddenMessage = document.createElement("h4");
    hiddenMessage.innerText = "Selamat! Anda menemukan hadiah tersembunyi...";
    const image = document.createElement("img");
    image.setAttribute("src", "https://i.ibb.co/tZnQvNG/pexels-francesco-ungaro-96938.jpg");
    const contents = document.querySelector(".contents");
    contents.appendChild(hiddenMessage).appendChild(image);
  }
}

document.getElementById("incrementButton").addEventListener("click", increment);
