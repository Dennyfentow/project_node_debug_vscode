const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const valor = req.query.dadoExterno
    const valorDoResponse = `Você me mandou tal valor ${valor}`;
    res.send(valorDoResponse);
});

const port = 3000;
app.listen(port, () => {
    console.log(`
        Servidor subiu
        http://localhost:${port}
        `);
});