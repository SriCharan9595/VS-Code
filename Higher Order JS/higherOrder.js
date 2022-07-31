let primeNumber = (number = 29) =>
{
    let flag = 0;
    
    if (number == 0 || number == 1)
        flag = 1;
    
        for (let i = 2; i <= number / 2; ++i) {
            if (number % i == 0) 
            {
                flag = 1;
                break;
            }
        }

        if (flag == 0)
            return number+" is Prime";
        else
            return number+" is not a prime"
};

var f = primeNumber(59);

console.log(f);
