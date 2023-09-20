/****************************************************************************************************************************************************************
 * *******************************************************************SYSTEM-CONFIGURATIONS***************************************************************************************
 * ***************************************************************************************************************************************************************
 * ***************************************************************************************************************************************************************
 */

function startAutoTesting() {
    requisitionBtc();
    requisitionEth();
    requisitionDoge();
    requisitionLtc();
    requisitionXrp();

    console.log('btc executado.');
    console.log('eth executado.');
    console.log('doge executado.');
    console.log('ltc executado.');
    console.log('xrp executado.');
}



const intervalTime = 5000; // 5 segundos

startAutoTesting(); // Executa uma vez quando o script é carregado
setInterval(startAutoTesting, intervalTime); // Executa a cada 5 segundos após o carregamento

console.log('Auto testing iniciado.');

function startBlinkingTitle() {
    let originalTitle = document.title;
    let isBlinking = false;

    function blinkTitle() {
        if (!isBlinking) {
            isBlinking = true;
            document.title = "******"+document.title;

            setTimeout(function () {
                document.title = originalTitle;
                isBlinking = false;
            }, 5000); 
        }
    }

    // Inicia o piscar do título
    let blinkInterval = setInterval(blinkTitle, 1000); // Inicia o piscar a cada segundo (1000 milissegundos)

    // Pare de piscar após algum tempo (opcional)
    setTimeout(function () {
        clearInterval(blinkInterval);
        document.title = originalTitle;
    }, 5000); // Pare de piscar após 5 segundos (opcional)
}
/****************************************************************************************************************************************************************
 * *******************************************************************BITCOIN***************************************************************************************
 * ***************************************************************************************************************************************************************
 * ***************************************************************************************************************************************************************
 */
const btPriceAlertBtcLow = document.getElementById('btPriceAlertBtcLow');
const inputPriceAlertBtcLow = document.getElementById('inputPriceAlertBtcLow');
const alertAudioBtcLow = document.getElementById('alertAudioBtcLow');
const inputPriceAlertBtcHigh = document.getElementById('inputPriceAlertBtcHigh');
const btPriceAlertBtcHigh = document.getElementById('btPriceAlertBtcHigh');
const alertAudioBtcHigh = document.getElementById('alertAudioBtcHigh');
const realPriceBtc = document.getElementById('realPriceBtc');
var priceAlertBtcLow;
var priceAlertBtcHigh;

function requisitionBtc(){

    axios.get('https://economia.awesomeapi.com.br/last/BTC-USD')
    .then(response => {
        const data = response.data['BTCUSD'];
        
        const priceBtc = data.bid;
        
        realPriceBtc.textContent = `${priceBtc}`;

        if(priceBtc <= priceAlertBtcLow){
        setTimeout(() => {
            alertAudioBtcLow.muted = false; 
        }, 100);

        alertAudioBtcLow.volume = 1; 
        // Reproduz o som de alerta
        alertAudioBtcLow.play();
        bgRowBtc.style.backgroundColor = 'red';

        startBlinkingTitle();
        
        }
        if (priceBtc >= priceAlertBtcHigh){
            setTimeout(() => {
                alertAudioBtcHigh.muted = false; 
            }, 100);
    
            alertAudioBtcHigh.volume = 1; 
            // Reproduz o som de alerta
            alertAudioBtcHigh.play();

            startBlinkingTitle();
            bgRowBtc.style.backgroundColor = 'green';
        } else {
            bgRowBtc.style.backgroundColor = 'white';
        }

    })
    .catch(error => {
        console.error('Erro na requisição:', error);
    }); 
}

btPriceAlertBtcLow.addEventListener('click', priceAlertBtcLow);
function savePriceAlertBtcLow(){
    try {
        priceAlertBtcLow = parseFloat(inputPriceAlertBtcLow.value);
       
        alert("Preço de alerta (LOW): " + priceAlertBtcLow + " definido com sucesso!");
    } catch (error) {
        alert("Algo deu errado!");
    }
}

btPriceAlertBtcHigh.addEventListener('click', priceAlertBtcHigh);
function savePriceAlertBtcHigh(){
    try {
        priceAlertBtcHigh = parseFloat(inputPriceAlertBtcHigh.value);
        
        alert("Preço de alerta (HIGH) definido com sucesso!");
    } catch (error) {
        alert("Algo deu errado!");
    }
}


/****************************************************************************************************************************************************************
 * *******************************************************************ETHERIUM***************************************************************************************
 * ***************************************************************************************************************************************************************
 * ***************************************************************************************************************************************************************
 */
const btPriceAlertEthLow = document.getElementById('btPriceAlertEthLow');
const inputPriceAlertEthLow = document.getElementById('inputPriceAlertEthLow');
const alertAudioEthLow = document.getElementById('alertAudioEthLow');
const inputPriceAlertEthHigh = document.getElementById('inputPriceAlertEthHigh');
const btPriceAlertEthHigh = document.getElementById('btPriceAlertEthHigh');
const alertAudioEthHigh = document.getElementById('alertAudioEthHigh');
const realPriceEth = document.getElementById('realPriceEth');
var priceAlertEthLow;
var priceAlertEthHigh;

function requisitionEth(){

    axios.get('https://economia.awesomeapi.com.br/last/ETH-USD')
    .then(response => {
        const data = response.data['ETHUSD'];
        
        const priceEth = data.bid;
        
        realPriceEth.textContent = `${priceEth}`;

        if(priceEth <= priceAlertEthLow){
        setTimeout(() => {
            alertAudioEthLow.muted = false; 
        }, 100);

        alertAudioEthLow.volume = 1; 
        // Reproduz o som de alerta
        alertAudioEthLow.play();
        bgRowEth.style.backgroundColor = 'red';

        startBlinkingTitle();
        
        }
        if (priceEth >= priceAlertEthHigh){
            setTimeout(() => {
                alertAudioEthHigh.muted = false; 
            }, 100);
    
            alertAudioEthHigh.volume = 1; 
            // Reproduz o som de alerta
            alertAudioEthHigh.play();

            startBlinkingTitle();
            bgRowEth.style.backgroundColor = 'green';
        } else {
            bgRowEth.style.backgroundColor = 'white';
        }

    })
    .catch(error => {
        console.error('Erro na requisição:', error);
    }); 
}

btPriceAlertEthLow.addEventListener('click', priceAlertEthLow);
function savePriceAlertEthLow(){
    try {
        priceAlertEthLow = parseFloat(inputPriceAlertEthLow.value);
       
        alert("Preço de alerta (LOW): " + priceAlertEthLow + " definido com sucesso!");
    } catch (error) {
        alert("Algo deu errado!");
    }
}

btPriceAlertEthHigh.addEventListener('click', priceAlertEthHigh);
function savePriceAlertEthHigh(){
    try {
        priceAlertEthHigh = parseFloat(inputPriceAlertEthHigh.value);
        
        alert("Preço de alerta (HIGH) definido com sucesso!");
    } catch (error) {
        alert("Algo deu errado!");
    }
}
/****************************************************************************************************************************************************************
 * *******************************************************************DOGE***************************************************************************************
 * ***************************************************************************************************************************************************************
 * ***************************************************************************************************************************************************************
 */
const btPriceAlertDogeLow = document.getElementById('btPriceAlertDogeLow');
const inputPriceAlertDogeLow = document.getElementById('inputPriceAlertDogeLow');
const alertAudioDogeLow = document.getElementById('alertAudioDogeLow');
const inputPriceAlertDogeHigh = document.getElementById('inputPriceAlertDogeHigh');
const btPriceAlertDogeHigh = document.getElementById('btPriceAlertDogeHigh');
const alertAudioDogeHigh = document.getElementById('alertAudioDogeHigh');
const realPriceDoge = document.getElementById('realPriceDoge');
var priceAlertDogeLow;
var priceAlertDogeHigh;

function requisitionDoge(){

    axios.get('https://economia.awesomeapi.com.br/last/DOGE-USD')
    .then(response => {
        const data = response.data['DOGEUSD'];
        
        const priceDoge = data.bid;
        
        realPriceDoge.textContent = `${priceDoge}`;

        if(priceDoge <= priceAlertDogeLow){
        setTimeout(() => {
            alertAudioDogeLow.muted = false; 
        }, 100);

        alertAudioDogeLow.volume = 1; 
        // Reproduz o som de alerta
        alertAudioDogeLow.play();
        bgRowDoge.style.backgroundColor = 'red';

        startBlinkingTitle();
        
        }
        if (priceDoge >= priceAlertDogeHigh){
            setTimeout(() => {
                alertAudioDogeHigh.muted = false; 
            }, 100);
    
            alertAudioDogeHigh.volume = 1; 
            // Reproduz o som de alerta
            alertAudioDogeHigh.play();

            startBlinkingTitle();
            bgRowDoge.style.backgroundColor = 'green';
        } else {
            bgRowDoge.style.backgroundColor = 'white';
        }

    })
    .catch(error => {
        console.error('Erro na requisição:', error);
    }); 
}

btPriceAlertDogeLow.addEventListener('click', priceAlertDogeLow);
function savePriceAlertDogeLow(){
    try {
        priceAlertDogeLow = parseFloat(inputPriceAlertDogeLow.value);
       
        alert("Preço de alerta (LOW): " + priceAlertDogeLow + " definido com sucesso!");
    } catch (error) {
        alert("Algo deu errado!");
    }
}

btPriceAlertDogeHigh.addEventListener('click', priceAlertDogeHigh);
function savePriceAlertDogeHigh(){
    try {
        priceAlertDogeHigh = parseFloat(inputPriceAlertDogeHigh.value);
        
        alert("Preço de alerta (HIGH) definido com sucesso!");
    } catch (error) {
        alert("Algo deu errado!");
    }
}
/****************************************************************************************************************************************************************
 * *******************************************************************lITECOIN***************************************************************************************
 * ***************************************************************************************************************************************************************
 * ***************************************************************************************************************************************************************
 */
const btPriceAlertLtcLow = document.getElementById('btPriceAlertLtcLow');
const inputPriceAlertLtcLow = document.getElementById('inputPriceAlertLtcLow');
const alertAudioLtcLow = document.getElementById('alertAudioLtcLow');
const inputPriceAlertLtcHigh = document.getElementById('inputPriceAlertLtcHigh');
const btPriceAlertLtcHigh = document.getElementById('btPriceAlertLtcHigh');
const alertAudioLtcHigh = document.getElementById('alertAudioLtcHigh');
const realPriceLtc = document.getElementById('realPriceLtc');
var priceAlertLtcLow;
var priceAlertLtcHigh;

function requisitionLtc(){

    axios.get('https://economia.awesomeapi.com.br/last/LTC-USD')
    .then(response => {
        const data = response.data['LTCUSD'];
        
        const priceLtc = data.bid;
        
        realPriceLtc.textContent = `${priceLtc}`;

        if(priceLtc <= priceAlertLtcLow){
        setTimeout(() => {
            alertAudioLtcLow.muted = false; 
        }, 100);

        alertAudioLtcLow.volume = 1; 
        // Reproduz o som de alerta
        alertAudioLtcLow.play();
        bgRowLtc.style.backgroundColor = 'red';

        startBlinkingTitle();
        
        }
        if (priceLtc >= priceAlertLtcHigh){
            setTimeout(() => {
                alertAudioLtcHigh.muted = false; 
            }, 100);
    
            alertAudioLtcHigh.volume = 1; 
            // Reproduz o som de alerta
            alertAudioLtcHigh.play();

            startBlinkingTitle();
            bgRowLtc.style.backgroundColor = 'green';
        } else {
            bgRowLtc.style.backgroundColor = 'white';
        }

    })
    .catch(error => {
        console.error('Erro na requisição:', error);
    }); 
}

btPriceAlertLtcLow.addEventListener('click', priceAlertLtcLow);
function savePriceAlertLtcLow(){
    try {
        priceAlertLtcLow = parseFloat(inputPriceAlertLtcLow.value);
       
        alert("Preço de alerta (LOW): " + priceAlertLtcLow + " definido com sucesso!");
    } catch (error) {
        alert("Algo deu errado!");
    }
}

btPriceAlertLtcHigh.addEventListener('click', priceAlertLtcHigh);
function savePriceAlertLtcHigh(){
    try {
        priceAlertLtcHigh = parseFloat(inputPriceAlertLtcHigh.value);
        
        alert("Preço de alerta (HIGH) definido com sucesso!");
    } catch (error) {
        alert("Algo deu errado!");
    }
}
/****************************************************************************************************************************************************************
 * *******************************************************************XRP***************************************************************************************
 * ***************************************************************************************************************************************************************
 * ***************************************************************************************************************************************************************
 */
const btPriceAlertXrpLow = document.getElementById('btPriceAlertXrpLow');
const inputPriceAlertXrpLow = document.getElementById('inputPriceAlertXrpLow');
const alertAudioXrpLow = document.getElementById('alertAudioXrpLow');
const inputPriceAlertXrpHigh = document.getElementById('inputPriceAlertXrpHigh');
const btPriceAlertXrpHigh = document.getElementById('btPriceAlertXrpHigh');
const alertAudioXrpHigh = document.getElementById('alertAudioXrpHigh');
const realPriceXrp = document.getElementById('realPriceXrp');
var priceAlertXrpLow;
var priceAlertXrpHigh;

function requisitionXrp(){

    axios.get('https://economia.awesomeapi.com.br/last/XRP-USD')
    .then(response => {
        const data = response.data['XRPUSD'];
        
        const priceXrp = data.bid;
        
        realPriceXrp.textContent = `${priceXrp}`;

        if(priceXrp <= priceAlertXrpLow){
        setTimeout(() => {
            alertAudioXrpLow.muted = false; 
        }, 100);

        alertAudioXrpLow.volume = 1; 
        // Reproduz o som de alerta
        alertAudioXrpLow.play();
        bgRowXrp.style.backgroundColor = 'red';

        startBlinkingTitle();
        
        }
        if (priceXrp >= priceAlertXrpHigh){
            setTimeout(() => {
                alertAudioXrpHigh.muted = false; 
            }, 100);
    
            alertAudioXrpHigh.volume = 1; 
            // Reproduz o som de alerta
            alertAudioXrpHigh.play();

            startBlinkingTitle();
            bgRowXrp.style.backgroundColor = 'green';
        } else {
            bgRowXrp.style.backgroundColor = 'white';
        }

    })
    .catch(error => {
        console.error('Erro na requisição:', error);
    }); 
}

btPriceAlertXrpLow.addEventListener('click', priceAlertXrpLow);
function savePriceAlertXrpLow(){
    try {
        priceAlertXrpLow = parseFloat(inputPriceAlertXrpLow.value);
       
        alert("Preço de alerta (LOW): " + priceAlertXrpLow + " definido com sucesso!");
    } catch (error) {
        alert("Algo deu errado!");
    }
}

btPriceAlertXrpHigh.addEventListener('click', priceAlertXrpHigh);
function savePriceAlertXrpHigh(){
    try {
        priceAlertXrpHigh = parseFloat(inputPriceAlertXrpHigh.value);
        
        alert("Preço de alerta (HIGH) definido com sucesso!");
    } catch (error) {
        alert("Algo deu errado!");
    }
}

