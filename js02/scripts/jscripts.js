/*1o Criar os objetos para os elementos que serão manipulados*/
const obj_cpf = document.querySelector('#cpf')
const obj_qtd = document.querySelector('#qtd')
const obj_bt_solic = document.querySelector('#bt_solic')
const obj_tab_solic = document.querySelector('#tab_solic')

const obj_envia_mail = document.querySelector('#envia_mail')
const obj_envia_msg = document.querySelector('#envia_msg')
const obj_exibe_contato = document.querySelector('#exibe_contato')

/* 2o Adicionar os eventos para chamar a função: */
obj_bt_solic.addEventListener('click', funPreencheTabela)

obj_envia_msg.addEventListener('click', function () {funExibeContato(this.alt)})
obj_envia_contato.addEventListener('click', function () {funExibeContato(this.alt)})

/*3o Declara a função para executar as ações:*/
function funPreencheTabela(){
    if(obj_cpf.value == '' || obj_qtd.value == '' || obj_qtd < 0 || obj_qtd.value > 20) {
        alert ('Preencha corretamente todos os campos')
    }
    else{
        const obj_novo_tr = document.createElement ('tr')
        const obj_td_cpf = document.createElement ('td')
        const obj_td_qtd = document.createElement ('td')
        obj_td_cpf.innerHTML = obj_cpf.value
        obj_td_qtd.innerHTML = obj_qtd.value
        obj_novo_tr.appendChild (obj_td_cpf)
        obj_novo_tr.appendChild (obj_td_qtd)
        obj_tab_solic.appendChild (obj_novo_tr)
    }
}

function funExibeContato(p_alt){
    obj_exibe_contato.setAttribute('value', p_alt)
}