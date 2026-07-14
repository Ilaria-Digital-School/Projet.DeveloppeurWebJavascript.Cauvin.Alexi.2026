function afficherTagFilter(){

    let bouton = document.querySelector("#afficherFiltreTag");
    let wrapperTag = document.querySelector(".wrapper_tag");

    bouton.addEventListener("click", () => {
        wrapperTag.classList.toggle("hidden");
    });

    
}

afficherTagFilter();
