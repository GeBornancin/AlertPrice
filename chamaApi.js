// let contadorExecucoes = 0; // Inicializa o contador
// var priceAlertBtcLow;
// var priceAlertBtcHigh;

// function capturePriceAlertBtcLow() {
//     const inputPriceAlertBtcLow = document.getElementById('inputPriceAlertBtcLow');
//     priceAlertBtcLow = parseFloat(inputPriceAlertBtcLow.value);
//     console.log('Preço de alerta definido:', priceAlertBtcLow);
// }
// function saveBtcLow(){
//     const btPriceAlertBtcLow = document.getElementById('btPriceAlertBtcLow');
//     btPriceAlertBtcLow.addEventListener('click', capturePriceAlertBtcLow);
//     // btPriceAlert.textContent = `Guardado`;
//     btPriceAlertBtcLow.style.backgroundColor = 'green';
//     console.log('saveBTC clickado');
// }

// function capturePriceAlertBtcHigh() {
//     const inputPriceAlertBtcHigh = document.getElementById('inputPriceAlertBtcHigh');
//     priceAlertBtcHigh = parseFloat(inputPriceAlertBtcHigh.value);
//     console.log('Preço de alerta definido:', priceAlertBtcHigh);
// }
// function saveBtcHigh(){
//     const btPriceAlertBtcHigh = document.getElementById('btPriceAlertBtcHigh');
//     btPriceAlertBtcHigh.addEventListener('click', capturePriceAlertBtcHigh);
//     // btPriceAlert.textContent = `Guardado`;
//     btPriceAlertBtcHigh.style.backgroundColor = 'green';
//     console.log('saveBTC clickado');
// }

// function btc() {
//     axios.get('https://economia.awesomeapi.com.br/last/BTC-USD')
//         .then(response => {
//             const data = response.data['BTCUSD'];
            
//             if (!data) {
//                 console.error('Dados não recebidos da API.');
//                 return;
//             }
            
//             const lowestPrice = parseFloat(data.low);
//             const highestPrice = parseFloat(data.high);

//             const price = {
//                 low: lowestPrice,
//                 high: highestPrice
//             };
            
//             console.log('Preço:', price);
 
//             if(priceAlertBtcHigh <=price.high ){
//                 console.log('EXPLODIU O BITCOIN')
//             }
//             if (price.low <= priceAlertBtcLow) {

//                 console.log('CRASSHHHH! O preço atingiu:',price.low);
//             } else {
//                 console.log('Preço não atingiu o valor necessário.');
//             }
            
//             contadorExecucoes++; // Incrementa o contador
//             console.log('Contador de execuções:', contadorExecucoes);
            
//             warningPriceBtc(price);
//         })
//         .catch(error => {
//             console.error('Erro na requisição:', error);
//         }); 
// }

// function warningPriceBtc(price) {
//     const warningPriceBtc = document.getElementById('warningPriceBtc');
//     const h1PriceLowBtc = document.getElementById('h1PriceLowBtc');
//     const alertAudioBtcLow = document.getElementById('alertAudioBtcLow');
//     const h1PriceHighBtc = document.getElementById('h1PriceHighBtc');
//     const alertAudioBtcHigh = document.getElementById('alertAudioBtcHigh');

//     if(priceAlertBtcHigh <= price.high){
//         warningPriceBtc.style.backgroundColor = 'green';


//         h1PriceHighBtc.textContent = `O BitCoin Atingiu o valor: ${price.high}`;

//         setTimeout(() => {
//             alertAudioBtcHigh.muted = false; // Desmuda o áudio após um breve atraso
//         }, 100);

//         alertAudioBtcHigh.volume = 1; // Defina o volume desejado (0 a 1)
//         // Reproduz o som de alerta
//         alertAudioBtcHigh.play();
        
//     }
//     if (price.low <= priceAlertBtcLow) {
//         warningPriceBtc.style.backgroundColor = 'red';


//         h1PriceLowBtc.textContent = `O BitCoin Atingiu o valor: ${price.low}`;

//         setTimeout(() => {
//             alertAudioBtcLow.muted = false; // Desmuda o áudio após um breve atraso
//         }, 100);

//         alertAudioBtcLow.volume = 1; // Defina o volume desejado (0 a 1)
//         // Reproduz o som de alerta
//         alertAudioBtcLow.play();
        
//     } else {
//         h1PriceLowBtc.textContent;
//         h1PriceHighBtc.textContent;

//         warningPriceBtc.style.backgroundColor = '#2F81F7'; // Volta ao estilo original (ou defina outra cor)
//     }

    
// }

// function startAutoTesting() {
//     btc();
//     console.log('btc executado.');
// }

// const intervalTime = 5000; // 5 segundos

// startAutoTesting(); // Executa uma vez quando o script é carregado
// setInterval(startAutoTesting, intervalTime); // Executa a cada 5 segundos após o carregamento

// console.log('Auto testing iniciado.');