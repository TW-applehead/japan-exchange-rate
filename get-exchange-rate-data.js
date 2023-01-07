function getExchangeRateData() {
    document.getElementById('result').innerHTML = '';
    var myHeaders = new Headers();
    myHeaders.append("apikey", "oNVHnatr93QM9HPYULmelCsnxs80eV7F");

    var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
    };

    var amount = document.getElementById("myAmount").value;
    var currency1 = document.getElementById("currency1").value;
    var currency2 = document.getElementById("currency2").value;
    var currencyText2 = document.getElementById("currency2").selectedOptions[0].text;
    fetch("https://api.apilayer.com/exchangerates_data/convert?to=" + currency2 + "&from=" + currency1 + "&amount=" + amount, requestOptions)
    .then(response => response.json())
    .then(result => { 
        console.log('test', result);
        document.getElementById('result').innerHTML = '目前匯率為: ' + result.info.rate + '<br>換算成' + currencyText2 + '為: ' + result.result.toFixed(2);
    })
    .catch(error => console.log('error', error));
}