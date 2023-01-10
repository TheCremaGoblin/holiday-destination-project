document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const holidayNames = document.querySelector('input').value
    try {
        const response = await fetch(`https://holiday-destinations-api.herokuapp.com/api/${holidayNames}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.HolidayReference
    } catch(error) {
        console.log(error)
    }
}