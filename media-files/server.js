const express = require('express');
const path = require('path');

const app = express();
const PORT = 8000; // Можно поменять на другой, если нужно

// Раздаем статические файлы из папки public
app.use(express.static(path.join(__dirname, 'public')));

// Отдаем model.json по запросу
app.get('/model.json', (req, res) => {
    res.sendFile(path.join(__dirname, 'model.json'));
});

// Запускаем сервер
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
