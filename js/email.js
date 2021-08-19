const limpieza = () =>{
    document.getElementById("nameProject").value = "";
    document.getElementById("emailName").value = "";
    document.getElementById("toName").value = "";
    document.getElementById("nameProject2").value = "";
    document.getElementById("toEmail").value = "";
    document.getElementById("textarea").value = "";
}

const enviarEmail = ()=> {
    const tempParams = {
        name: document.getElementById("toName").value,
        nameproject: document.getElementById("nameProject2").value,
        email: document.getElementById("toEmail").value,
        message: document.getElementById("textarea").value
    };
    
    if(tempParams.name && tempParams.nameproject && tempParams.email && tempParams.message){
        emailjs.send("service_xuygyke", "template_gyssnj4", tempParams)
        .then((res)=>{
            console.log("sucess", res.status);
            if(res.status === 200) {
                document.getElementsByClassName("section__form")[0].style.display = "none"
                document.getElementsByClassName("section__form--validado")[0].style.display = "flex"
                limpieza();
            }
        });
    } else {
        document.getElementById('errorForm').style.display = "flex"
        limpieza();
    }

    
}

const exchangeFrom = ()=> {
    const tempParams = {
        exchange: document.getElementById("nameProject").value,
        exchangeName: document.getElementById("nameExchange").textContent,
        message: document.getElementById("emailName").value
    };
    if (tempParams.exchange && tempParams.exchangeName && tempParams.message){
        emailjs.send("service_xuygyke", "template_5kmg5lw", tempParams)
        .then((res)=>{
            console.log("sucess", res.status);
            
            if(res.status === 200) {
                document.getElementsByClassName("section__content--form")[0].style.display = "none"
                document.getElementsByClassName("section__content--verificacion")[0].style.display = "flex"
                limpieza();
            }
        });
    }else {
        document.getElementsByClassName("section__content--form")[0].style.setProperty('--validacion', 'flex')
        
        limpieza();
    }
}