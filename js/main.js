document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const holidayNamesTest = document.querySelector('input').value
    try{
        const response = await fetch(`https://holiday-destination-api.herokuapp.com/api${holidayNamesTest}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.HolidayReference
    }catch(error){
        console.log(error)
    }
}