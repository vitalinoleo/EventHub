// URL da API (substitua pela URL correta se necessário)
const apiUrl = 'http://localhost:3000/eventos';


// Função para buscar os eventos na API e renderizar na tabela
function buscarEventos() {
    fetch(apiUrl)
        .then(response => response.json()) // Converte a resposta para JSON
        .then(eventos => {
            const tabelaCorpo = document.getElementById('eventosCorpo');
            tabelaCorpo.innerHTML = ''; // Limpa a tabela antes de renderizar


            // Itera sobre os eventos e cria uma linha para cada um
            eventos.forEach(evento => {
                const linha = document.createElement('tr');

                // Cria as células da linha
                const idCelula = document.createElement('td');
                idCelula.textContent = evento._id; // Ou evento.id_livro dependendo da estrutura


                const tituloCelula = document.createElement('td');
                tituloCelula.textContent = evento.titulo;

                // Cria e adiciona a célula para a imagem
                const imagemCelula = document.createElement('td');
                const imagemElemento = document.createElement('img');
                imagemElemento.src = evento.imagem; // URL da imagem
                imagemElemento.alt = 'Imagem do Evento'; // Texto alternativo para a imagem
                imagemElemento.style.maxWidth = '100px'; // Opcional: define a largura máxima da imagem
                imagemCelula.appendChild(imagemElemento);

                // Cria e adiciona a célula para a data
                const dataCelula = document.createElement('td');
                dataCelula.textContent = new Date(evento.data).toLocaleDateString(); // Formata a data para uma string legível
                novaLinha.appendChild(dataCelula);



                // Adiciona as células na linha
                linha.appendChild(idCelula);
                linha.appendChild(tituloCelula);
                linha.appendChild(dataCelula);
                linha.appendChild(imagemCelula);


                // Adiciona a linha na tabela
                tabelaCorpo.appendChild(linha);
            });
        })
        .catch(error => console.error('Erro ao buscar eventos:', error)); // Loga um erro em caso de falha
}


// Chama a função para buscar e renderizar os livros ao carregar a página
window.onload = buscarEventos;
