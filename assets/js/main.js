function afficherTagFilter() {

    let bouton = document.querySelector("#afficherFiltreTag");
    let wrapperTag = document.querySelector(".wrapper_tag");

    if (!bouton || !wrapperTag) {
        return;
    }


    bouton.addEventListener("click", () => {
        wrapperTag.classList.toggle("hidden");
    });
}

afficherTagFilter();


function connexion() {
    const showSignIn = document.getElementById('showSignIn');
    const showSignUp = document.getElementById('showSignUp');
    const wrapper = document.getElementById('wrapper_connexion');

    if(!showSignIn || !showSignUp || !wrapper){
        return;
    }

    showSignUp.addEventListener('click', () => {
        wrapper.classList.add('right_panel_active');
    });

    showSignIn.addEventListener('click', () => {
        wrapper.classList.remove('right_panel_active');
    });
}

connexion();