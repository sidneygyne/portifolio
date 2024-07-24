import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");



export default function constroiCard (name, html_url, homepage) {
    const projetos = document.createElement("li");
    projetos.className = `texto_texto_curriculo_li`;
    projetos.innerHTML = ` 
         <a class="texto_texto_curriculo_links" href="${html_url}" target="_blank"><strong>${name}</strong></a> 
        `
    return projetos;
}


async function listaProjetos() {
    try {
        const listaApi = await conectaApi.listaProjetos();
        if (listaApi.length > 0) {
            listaApi.forEach(elemento => {
                lista.appendChild(constroiCard(elemento.name, elemento.html_url, elemento.homepage));
            });
        } else {
            products.innerHTML = `<h2 class="mensagem__titulo">Nenhum projeto foi adicionado!</h2>`;
        }

    } catch (error) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Nenhum projeto foi adicionado!</h2>`;
        console.error("Erro ao listar projetos", error)
    }
}

listaProjetos();
