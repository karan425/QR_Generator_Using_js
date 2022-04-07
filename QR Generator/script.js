const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImage = wrapper.querySelector(".qr-code img");



generateBtn.addEventListener("click",() =>{
    let qrValue = qrInput.value;
    if(!qrValue) return; //if the input is empty then return from here
    generateBtn.innerHTML = "Generating QR Code.....";
    //getting a QR code of user enterd value useing the qrserver
    //API and passing the api returned img src to qrImg
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImage.addEventListener("load", () =>{
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });  
});

qrInput.addEventListener("keyup", () =>{
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }
});