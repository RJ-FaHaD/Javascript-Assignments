function calculate(sign = "+") {
    var num1Val = num1.value;
    var num2Val = num2.value;
    if (sign == "+")
      return (result.innerText = parseInt(num1Val) + parseInt(num2Val));
    if (sign == "-") return (result.innerText = num1Val - num2Val);
    if (sign == "x") return (result.innerText = num1Val * num2Val);
    if (sign == "/") return (result.innerText = num1Val / num2Val);
    if (sign == "%") return (result.innerText = num1Val / num2Val*100 + " %");
    
  }