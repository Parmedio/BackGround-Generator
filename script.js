const but01 = document.getElementById("col01");
const but02 = document.getElementById("col02");
const backGstyle = document.getElementById("current_grad");
const deg_grad = document.getElementById("deg");
const css_param = document.getElementsByClassName("centr param_update");
const col_text = document.getElementsByClassName("txt_inv");

const page_edit = (variable) => {
    variable.addEventListener("input", morph = () => {
        a = "linear-gradient(" + Number(deg_grad.value) + "deg, " + but01.value + ", " + but02.value + ") no-repeat fixed";
        backGstyle.style.background = a
        css_param[0].textContent = a
        var list_text = [0, 1, 3, 4];
        const paint_all = (iterable) => {
            for (const x of iterable) {
                col_text[x].style.color = but01.value
            }
        }
        paint_all(list_text)
    })
}

page_edit(but01);
page_edit(but02);
page_edit(deg_grad);

//deg_grad.addEventListener("mouseenter", function() {console.log(deg_grad.value);})
//but01.addEventListener("mouseenter", function() {console.log("sei passato sopra il colore 01");})
//but02.addEventListener("mouseenter", function() {console.log("sei passato sopra il colore 02");})
//css_param.addEventListener("mouseenter", function() {console.log("sei passato sopra la scheda parametri");})

//onclick & oninput --- mettendo "oninput="nome_funzione(argomento)" tra gli attributi dell'elemento html saremmo riusciti ad ottenere lo stesso risultato senza invocare la funzione sul foglio js "page_edit(but01)" 🤙. 