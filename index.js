async function getData(){
    await getAddbyCep();
    await getAddbyMeteo();
}

async function getAddbyCep(){
    
    const cep = document.getElementById("inputCep").value;

    try{
        const response = await fetch(`https://cep.awesomeapi.com.br/json/${cep}`);
        const data = await response.json();
        console.log(data)
        document.getElementById("rua").innerHTML = data.address;
        document.getElementById("bairro").innerHTML = data.district;
        document.getElementById("uf").innerHTML = data.state;
        document.getElementById("latitude").value = data.lat;
        document.getElementById("longitude").value = data.lng;
    }catch(error){
        alert(error)
    }
}

async function getAddbyMeteo(){

    const lat = document.getElementById("latitude").value;
    const lon = document.getElementById("longitude").value;
    try {
        console.log(lat,lon)
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m`);
        const data = await response.json();       
        document.getElementById("previTemp").innerHTML=`
            <p id="previTemp">Previsão de tempo de acordo com a região:${data.hourly.temperature_2m[0]}° C </p>
        `;         
    } catch (error) {
        alert(error)
    }
   
}