function isPalindrome(x: number): boolean {
    let algarismos = x.toString().split('');
    let algarismosReversos = [...algarismos].reverse(); // Utiliza o "spread" dentro de um array, gerando uma cópia com os valores do array algarismos

    let aux = 0
    for (let i = 0; i < algarismos.length; i++) {
        if (algarismos[i] === algarismosReversos[i]) {
            aux++
        }

        if(aux === algarismos.length){
            return true
        }
    }

    return false;
};

console.log(isPalindrome(121));