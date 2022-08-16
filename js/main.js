let input = document.querySelector("#input");
let btnClick = document.querySelector("button");
const array = [];
btnClick.addEventListener("click", () => {
  let inputValue = input.value;
  if (!isNaN(inputValue)) {
    for (let i = 1; i <= Number(inputValue); i++) {
      let user = Number(prompt("Enter" + " " + i + " " + "number"));
      array.push(user);
    }
    if (inputValue.length == 0){
        alert("Please enter number")
    }else{
        alert(array)
    }
  }else{
    alert("Please enter numbers only")
  }
});
