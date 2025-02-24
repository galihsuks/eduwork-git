class Kotakkotak {
    constructor(init) {
        this.init = init;
        this.kolom = [];
    }

    buatHeader() {
        let element = "";
        this.init.forEach((d) => {
            Object.keys(d).forEach((k) => {
                if (!this.kolom.includes(k)) {
                    this.kolom.push(k);
                    element += `<th>${k}</th>`;
                }
            });
        });
        return `<thead><tr>${element}</tr></thead>`;
    }
    buatIsi() {
        let element = "";
        this.init.forEach((d) => {
            let baris = "";
            this.kolom.forEach((k) => {
                if (d[k]) baris += `<td>${d[k]}</td>`;
                else baris += `<td class="text-secondary"><i>No data</i></td>`;
            });
            element += `<tr>${baris}</tr>`;
        });
        return `<tbody>${element}</tbody>`;
    }
    render(element) {
        const table = `${this.buatHeader()}${this.buatIsi()}`;
        element.innerHTML = `<table class="table table-hover">${table}</table>`;
    }
}

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
