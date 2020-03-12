function gerarTabuada(){
    let num = Number(document.getElementById("num").value)
    let tab = document.getElementById("tabuada")
    tab.innerText = ''


    if(document.getElementById("num").value.length==0){
        window.alert("[ERRO] Insíra um valor")
    }else{
        for(x=1;x<=10;x++){
            let item = document.createElement('option')
            item.text = `${num} X ${x} = ${num*x}`
            item.value = `v${x}`
            tab.appendChild(item)
        }
    }




}