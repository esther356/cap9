document.getElementById('pyramidForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const numRows = parseInt(document.getElementById('numRows').value);
    
    // Verifica que numRows sea un número válido y mayor que 0
    if (isNaN(numRows) || numRows <= 0) {
        document.getElementById('result').textContent = 'Por favor, ingresa un número válido de filas.';
        return;
    }

    const totalCoins = (numRows * (numRows + 1)) / 2;
    document.getElementById('result').textContent = Total de monedas: ${totalCoins};
});