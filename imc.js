const pessoa1 = {
    nome: 'João',
    altura: 1.68,
    peso: 85
}

const pessoa2 = {
    nome: 'Poliana',
    altura: 1.56,
    peso: 48
}

const pessoa3 = {
    nome: 'Gabriel',
    altura: 1.2,
    peso: 30
}

const pessoa4 = {
    nome: 'Maria',
    altura: 1.80,
    peso: 72
}

const listaPessoas = [pessoa1, pessoa2, pessoa3, pessoa4]

Number.prototype.entre = function (Inicio, fim) {
    return this >= Inicio && this <= fim
}

let calculoImc = 0

const exibirResultado = function (calculoImc) {
    if (calculoImc.entre(1, 18.5)) {
        console.log('Classificação: Abaixo do Peso')
    } else if (calculoImc.entre(18.6, 24.9)) {
        console.log('Classificação: Peso Normal')
    } else if (calculoImc.entre(25, 29.9)) {
        console.log('Classificação: Sobrepeso')
    } else if (calculoImc.entre(30, 34.9)) {
        console.log('Classificação: Obesidade Grau I')
    } else if (calculoImc.entre(35, 39.9)) {
        console.log('Classificação: Obesidade Grau II')
    }else if (calculoImc >= 40) {
        console.log('Classificação: Obesidade Grau III')
    }
}

for (let index = 0; index < listaPessoas.length; index++) {
    
    calculoImc = listaPessoas[index].peso / (listaPessoas[index].altura * listaPessoas[index].altura)
    console.log('Nome: ' + listaPessoas[index].nome)
    console.log('IMC: '+ Math.floor(calculoImc))
    exibirResultado(calculoImc)
    console.log("")
}