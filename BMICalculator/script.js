const form = document.querySelector("form")

form.addEventListener('click', function(e) {
    e.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#result")
    if(height === '' || height < 0 ||isNaN(height)){
        result.innerHTML = "(Please Provide A Valid Height)"
    }  if(weight === '' || weight < 0 ||isNaN(weight)){
        result.innerHTML = "(Please Provide A Valid weight)"
    } else {
       const bmi =  (weight / ((height*height)/10000)).toFixed(2)
       let category = ''
       if(bmi < 18.6){
        category = "Under Weight"
       } else if (bmi >= 18.6 && bmi < 24.9 ) {
        category = "Normal Range"
       } else if (bmi > 24.9) {
        category = "Over Weight"
       } else {
        category = "obeese"
       }
       result.innerHTML = `<span>${bmi}</span> (<b>${category}</b>)`
    }
})

const setTime = function() {
    document.querySelector("#friend").innerHTML = "Calculate Your BMI My Friend!!"
}
setTimeout(setTime, 2000)

