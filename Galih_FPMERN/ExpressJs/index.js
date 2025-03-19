const express = require("express");
const app = express();
const port = 8081;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend Tugas Eduwork");
});
app.get("/welcome", (req, res) => {
    res.status(200).json({
        pesan: "Selamat Datang di Tugas Eduwork",
    });
});
app.get("/about", (req, res) => {
    res.status(200).json({
        pesan: "Ini halaman tentang",
    });
});

app.listen(port, () => {
    console.log(`Backend Absensi app listening on port ${port}`);
});
