# PROJETO DESAFIO 2 DNC

Este código cria uma página web que permite ao usuário consultar endereços e previsões do tempo.

O usuário digita o CEP no campo designado e clica em "Acessar".
A página busca a informação do endereço através da AwesomeAOI API CEP (cep.awesomeapi.com.br) e preenche os campos "Logradouro/Nome", "Bairro/Distrito" e "Localidade/UF" e os input's de Latitude/Longitude com os dados obtidos.
A pagina preenche automaticamente a latitude e longitude, ultilizando os dados da AwesomeAOI API CEP, para consultar a previsão do tempo na região. A página utiliza a API OpenWeatherMap (https://openweathermap.org/api) para buscar a temperatura e exibi-la na seção "Previsão do tempo na região".


## Tecnologias utilizadas

HTML: linguagem de marcação utilizada para estruturar o conteúdo da página.
CSS: linguagem de estilo utilizada para definir a aparência da página (cores, fontes, layout).
JavaScript: linguagem de programação utilizada para interação com a página (buscar informações nas APIs e preencher campos).
Bootstrap: framework CSS utilizado para facilitar a criação de layouts responsivos (que se adaptam a diferentes dispositivos).
AwesomeAOI API CEP: serviço gratuito que fornece informações de endereço e Latitude/Longitude a partir do CEP.
API OpenWeatherMap: serviço gratuito que fornece dados meteorológicos a partir da Latitude/Longitude.

## Link's
Link para a hospedagem do site no Vercel: (https://implatacao-api-taskdnc.vercel.app/)