let btn=document .getElementById ("btn");
btn.addEventListener("click",()=>{

    let a = Number(document.getElementById("inp1").value);
      let b = Number(document.getElementById("inp2").value);
      let op = document.getElementById("select").value;
      let ans = "";

  {    if (op == "+") {
        ans = a + b;
      } else if (op == "-") {
        ans = a - b;
      } else if (op == "*") {
        ans = a * b;
      } else if (op == "/") {
        if (b == 0) {
          ans = "Can't divide by 0";
        } else {
          ans = a / b;
        }
      } else if (op == "%") {
        ans = a % b;
      }

      document.getElementById("result").value = ans;
    }
})

      