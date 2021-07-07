function compute()
{
    p = document.getElementById("principal").value;
    
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // Calculate interest rate
    var interest = principal * years * rate / 100;

    // Convert no. of years into actual year in the future
    var year = new Date().getFullYear()+parseInt(years);
}

// Read the value of the range slider and display it in the <span> tag adjacent to the slider
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

<select onchange="updateRate()">

</select>
