const form = document.getElementById("user-form");
const submitButton = document.getElementById("submit-btn");
let errors={nickName:true,email:true,password:true,};
let timeout = null;
document.querySelectorAll(".form-box").forEach((box) => {
    const boxInput = box.querySelector("input");
    boxInput.addEventListener("keydown", (event) =>{
        clearTimeout(timeout);
        timeout = setTimeout(() =>{
            console.log(`Input ${boxInput.name} value: `, boxInput.value);
           // console.log("input "+boxInput+" value: ", boxInput.value);
            validacion(box,boxInput)
        },300);
    })
})

validacion = (box,boxInput) => {
    if(boxInput.name=="nickName"){
        if(boxInput.value==""){
            showError(true,box,boxInput);
        }
        else{
            showError(false,box,boxInput);

        }
    }
}

showError = (check,box,boxInput) => {
    if(check){
        box.classList.remove("form-success");
        box.classList.add("form-error");
        errors[boxInput.name]=true;
    }
    else{
        box.classList.remove("form-error");
        box.classList.add("form-success");
        errors[boxInput.name]=false;
    }
}