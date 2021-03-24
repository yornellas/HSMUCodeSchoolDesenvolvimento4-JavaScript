let salario = prompt("Informe seu salário: ")
let choose = prompt("Escolha um dos planos (A/B/C)")

let salarioInt = parseInt(salario)

switch (choose) {
    case "A" :
        salarioInt = salarioInt + (10 * salarioInt / 100)
        break
    case "B" :
        salarioInt = salarioInt + (15 * salarioInt / 100)
        break
    case "C" :
        salarioInt = salarioInt + (20 * salarioInt / 100)
        break
    default:
        alert("Escolha uma opcão válida!")
}

document.write("Seu novo salário é R$" +salarioInt)