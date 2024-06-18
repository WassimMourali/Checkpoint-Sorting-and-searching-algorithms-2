function insertionSort(arr) {
    const n = arr.length; 
    
    for (let i = 1; i < n; i++) {
    // choix de l'élément courant à insérer
        let current = arr[i];  
        let j = i - 1;
        
        // déplacer les éléments de arr[0..i-1], qui sont plus grands que l'élément courant d'une position vers l'avant de leur position actuelle
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        // insérer l'élément courant dans la séquence triée
        arr[j + 1] = current;
    }
    
    return arr;
}


const tableau = [12, 11, 13, 5, 6];
console.log("Tableau d'origine:", tableau.slice()); 

const tableauTrie = insertionSort(tableau.slice());  
console.log("Tableau trié:", tableauTrie);
