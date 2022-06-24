let num = document.getElementById('numbertxt')
let list = document.getElementById('select')
let res = document.getElementById('res')
let array = []
function validaçao(x){
    if(Number(x) >= 1 &&  Number(x) <= 100){
        return true
    } else {
        return false
    }
}
function validaçaolista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}
function adicionar(){
    if(validaçao(num.value) && !validaçaolista(num.value , array)){
        array.push(Number(num.value))
        let add = document.createElement('option')
        add.text = `valor ${num.value} adicionado a lista`
        list.appendChild(add)
    } else {
        window.alert('número inválido ou presente na lista')
    }
num.value = ''
num.focus()   
}

function finalizar(){
    if (array.length ==  0){
        window.alert('a lista está vazia')
    }else{
        let total = array.length
        let maior = array[0]
        let menor = array[0]
        let soma = 0
        let media = 0
        for(let pos in array){
            soma += array[pos]
            if(array[pos] > maior){
                maior = array[pos]}
            if(array[pos] < menor){
                    menor = array[pos]}
                }
        media = soma / array.length
        res.innerHTML= ''
        res.innerHTML+= `<p> o total de itens desta lista é ${total}<p>`
        res.innerHTML+=`<p> o maior número da lista é ${maior} <p>` 
        res.innerHTML+=`<p> o menor número da lista é ${menor} <p>` 
        res.innerHTML+=`<p> a soma de todos os números da lista é ${soma} <p>` 
        res.innerHTML+=`<p> a média dos números da lista é ${media} <p>` 
    }
    }
    
