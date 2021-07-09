function compute()
{
    p = document.getElementById("principal").value;
    
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // Calculate interest
    var interest = principal * years * rate / 100;

    // Convert no. of years into actual year in the future
    var year = new Date().getFullYear()+parseInt(years);
    
    // Display message inside "result" <span> element
    document.getElementById("result").innerHTML="If you deposit "+<span class='highlight'>principal</span>+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>";
}

// Read and update the value of rate_val
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML = rateval;
}
