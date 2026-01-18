/*const db = require('../config/db'); // pega a conexão com o banco

// LISTAR TODOS OS ATLETAS
exports.getAtletas = (req, res) => {
    db.query('SELECT * FROM atletas', (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
};

// PEGAR UM ATLETA PELO ID
exports.getAtletaById = (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM atletas WHERE id = ?', [id], (err, results) => {
        if (err) return res.status(500).json({ error: err });
        if (results.length === 0) return res.status(404).json({ message: 'Atleta não encontrado' });
        res.json(results[0]);
    });
};

// CRIAR UM NOVO ATLETA
exports.createAtleta = (req, res) => {
    const { nome, idade, modalidade } = req.body;
    db.query('INSERT INTO atletas (nome, idade, modalidade) VALUES (?, ?, ?)', [nome, idade, modalidade], (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({ message: 'Atleta criado com sucesso', id: results.insertId });
    });
};

// ATUALIZAR UM ATLETA
exports.updateAtleta = (req, res) => {
    const { id } = req.params;
    const { nome, idade, modalidade } = req.body;
    db.query('UPDATE atletas SET nome = ?, idade = ?, modalidade = ? WHERE id = ?', [nome, idade, modalidade, id], (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: 'Atleta atualizado com sucesso' });
    });
};

// DELETAR UM ATLETA
exports.deleteAtleta = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM atletas WHERE id = ?', [id], (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: 'Atleta deletado com sucesso' });
    });
};
*/

const db = require('../config/db'); // seu pool Promise

// LISTAR TODOS OS ATLETAS
exports.getAtletas = async (req, res) => {
  try {
    const [results] = await db.query('SELECT * FROM atletas');
    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar atletas' });
  }
};

// PEGAR UM ATLETA PELO ID
exports.getAtletaById = async (req, res) => {
  const { id } = req.params;
  try {
    const [results] = await db.query('SELECT * FROM atletas WHERE id = ?', [id]);
    if (results.length === 0) return res.status(404).json({ message: 'Atleta não encontrado' });
    res.json(results[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar atleta' });
  }
};

// CRIAR UM NOVO ATLETA
exports.createAtleta = async (req, res) => {
  const { nome, idade, modalidade } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO atletas (nome, idade, modalidade) VALUES (?, ?, ?)',
      [nome, idade, modalidade]
    );
    res.status(201).json({ message: 'Atleta criado com sucesso', id: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao criar atleta' });
  }
};

// ATUALIZAR UM ATLETA
exports.updateAtleta = async (req, res) => {
  const { id } = req.params;
  const { nome, idade, modalidade } = req.body;
  try {
    const [result] = await db.query(
      'UPDATE atletas SET nome = ?, idade = ?, modalidade = ? WHERE id = ?',
      [nome, idade, modalidade, id]
    );
    if (result.affectedRows === 0)
      return res.status(404).json({ message: 'Atleta não encontrado' });
    res.json({ message: 'Atleta atualizado com sucesso' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao atualizar atleta' });
  }
};

// DELETAR UM ATLETA
exports.deleteAtleta = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await db.query('DELETE FROM atletas WHERE id = ?', [id]);
    if (result.affectedRows === 0)
      return res.status(404).json({ message: 'Atleta não encontrado' });
    res.json({ message: 'Atleta deletado com sucesso' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao deletar atleta' });
  }
};

