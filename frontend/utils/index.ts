export async function fetchCars() {
    const headers = {
          'X-RapidAPI-Key': 'bf08565187msh6ab485eaf2c5f59p1dec1ejsn5792cf738a91',
          'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla' , 
    { headers: headers});

    const result = await response.json()
    return result;
}

