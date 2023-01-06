module.exports = function toReadable (n) {
    let zero = ['zero']
    let oneToNine = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let tenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let twentyToNinety = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let hundred = ['one hundred'];
    if (n === 0){
        return zero[0];
    }
    else if (n < 10){
        return oneToNine[n];
    }
    else if ((n >= 10) && (n < 20)){
        return tenToNineteen[n%10];
    }
    else if ((n >= 20) && (n < 100)){
        return (twentyToNinety[Math.floor(n/10)] + ' ' + oneToNine[n%10]).trim();
    }
    else if (n === 100){
        return hundred[0];
    }
    else if (n >= 100 && n < 1000){
        if ((n%100 === 0)){
            return (oneToNine[Math.floor(n/100)] + ' hundred');
        }else if (n%100 < 10 && n%100 > 0 ){
            return (oneToNine[Math.floor(n/100)] + ' hundred ' + oneToNine[n%100]);
        }else if (n%100 < 20 && 9 < n%100){
            return (oneToNine[Math.floor(n/100)] + ' hundred ' + tenToNineteen[n%10]);
        }else if (n%10 === 0 && n%100 !== 0){
            return (oneToNine[Math.floor(n/100)] + ' hundred ' + twentyToNinety[((n%100)/10)]);
        }else if (n%100 >= 20 && n%10 !== 0){
            return (oneToNine[Math.floor(n/100)] + ' hundred ' + twentyToNinety[Math.floor((n%100)/10)] + ' ' + oneToNine[n%10]);
        }
    }
}