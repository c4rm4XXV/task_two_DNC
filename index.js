async function getAddbyCep(){
    const cep = document.getElementById("inputCep").value;

    try{
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        document.getElementById("rua").innerHTML = data.logradouro;
        document.getElementById("bairro").innerHTML = data.bairro;
        document.getElementById("uf").innerHTML = data.uf;
    }catch(error){
        alert(error)
    }
}

async function getAddbyMeteo(){
    const lat = document.getElementById("latitude").value;
    const lon = document.getElementById("longitude").value;
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m`);
        const data = await response.json();         
        document.getElementById("previTemp").innerHTML=`
            <p id="previTemp">Previsão de tempo de acordo com a região:${data.hourly.temperature_2m[data.hourly.temperature_2m.length-1]}° C </p>
        `;         
    } catch (error) {
        alert(error)
    }
}