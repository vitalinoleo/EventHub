// Este módulo define os controladores, onde cada método lida com as requisições HTTP correspondentes e interage com o modelo dos eventos.

const evento = require('./models/evento'); // Importa o modelo 'evento' do arquivo de modelos
// aqui tem um erro bem a cima

// Criar um novo evento
const evento = require('./models/evento'); 

app.post('/criar-evento', (req, res) => {
    // Validar se todos os campos necessários estão presentes
    const { titulo, data, imagem } = req.body;

    // Validar se 'titulo' e 'imagem' são fornecidos
    if (!titulo || !data || !imagem) {
        return res.status(400).json({ message: 'Título, data e imagem são obrigatórios.' });
    }

    // Validar o formato da data
    const dataevento = new Date(data);
    if (isNaN(dataevento.getTime())) {
        return res.status(400).json({ message: 'Data inválida.' });
    }

    // Criar um novo evento com os dados fornecidos
    const novoevento = new evento({
        titulo: titulo,
        data: dataevento,
        imagem: imagem
    });

    // Salvar o evento no banco de dados
    novoevento.save((err, evento) => {
        if (err) {
            return res.status(500).json({ message: 'Erro ao salvar o evento.' });
        }
        res.status(201).json(evento);
    });
});



// Listar todos os eventos
exports.listareventos = async (req, res) => {
    try {
        // Busca todos os eventos no banco de dados
        const eventos = await evento.find();
        // Retorna a lista de eventos
        res.json(eventos);
    } catch (err) {
        // Em caso de erro, retorna uma mensagem de erro com status 500 (Internal Server Error)
        res.status(500).json({ message: err.message });
    }
};


// Buscar um evento por ID
exports.buscarEventoPorId = async (req, res) => {
    try {
        // Busca um evento pelo ID recebido nos parâmetros da requisição
        const evento = await evento.findById(req.params.id);
        if (evento == null) {
            // Se o evento não for encontrado, retorna status 404 (Não Encontrado)
            return res.status(404).json({ message: 'evento não encontrado' });
        }
        // Retorna o evento encontrado
        res.json(evento);
    } catch (err) {
        // Em caso de erro, retorna uma mensagem de erro com status 500 (Internal Server Error)
        res.status(500).json({ message: err.message });
    }
};


// Atualizar um evento por ID
exports.atualizarEvento = async (req, res) => {
    try {
        // Busca o evento pelo ID
        const evento = await evento.findById(req.params.id);
        if (evento == null) {
            // Se o evento não for encontrado, retorna status 404 (Não Encontrado)
            return res.status(404).json({ message: 'evento não encontrado' });
        }
        // Verifica quais campos foram enviados na requisição e os atualiza
        if (req.body.titulo != null) {
            evento.titulo = req.body.titulo;
        }
        if (req.body.data != null) {
            evento.data = req.body.data;
        }
        if (req.body.imagem != null) {
            evento.imagem = req.body.imagem;
        }

        // Salva o evento atualizado no banco de dados
        const eventoAtualizado = await evento.save();
        // Retorna o evento atualizado
        res.json(eventoAtualizado);
    } catch (err) {
        // Em caso de erro, retorna uma mensagem de erro com status 400 (Bad Request)
        res.status(400).json({ message: err.message });
    }
};
