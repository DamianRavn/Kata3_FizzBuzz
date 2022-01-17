function FizzBuzz(startNumber, endNumber)
{
    let result = "";

    for (let i = startNumber; i < endNumber; i++) 
    {
        if (i % 15 == 0) 
        {
            result += "FizzBuzz";
        }
        else if (i % 3 == 0) 
        {
            result += "Fizz";
        }
        else if (i % 5 == 0) 
        {
            result += "Buzz";
        }
        else
        {
            result += i;
        }

        result += "\n";
    }

    return result;
}

function FizzBuzzHtml()
{
    const startNumber = document.getElementById("number1").value;
    const endNumber = document.getElementById("number2").value;

    const result = FizzBuzz(startNumber, endNumber);

    document.getElementById("result").innerText = result;
}

console.log(FizzBuzz(1, 100));