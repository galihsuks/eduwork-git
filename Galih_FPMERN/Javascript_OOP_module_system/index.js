import Kotakkotak from "./kotakkotak.js";

const table = new Kotakkotak([
    {
        nama: "galih",
        email: "galiha@gmail.com",
    },
    {
        nama: "sukma",
        umur: 2,
        tglLahir: "8 April 2020",
    },
    {
        nama: "mukti",
        email: "mukti@gmail.com",
        umur: 3,
    },
]);
const appElm = document.getElementById("app");
table.render(appElm);
