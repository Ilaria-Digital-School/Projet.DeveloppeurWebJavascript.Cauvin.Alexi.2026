function menuBurger() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector("nav");
    const navLinks = document.querySelectorAll("nav a");

    if (!burger || !nav) {
        return;
    }

    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        nav.classList.toggle("active");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            burger.classList.remove("active");
            nav.classList.remove("active");
        });
    });
}

menuBurger();

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

    if (!showSignIn || !showSignUp || !wrapper) {
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


function addIngredient() {
    const buttonAdd = document.getElementById('add_ingredient');
    const buttonRemove = document.getElementById('remove_ingredient');
    const parentDiv = document.querySelector('.input_ingredient');
    const actionDiv = document.querySelector('.input_ingredient_action');

    let i = 1;


    if (!buttonAdd || !buttonRemove || !parentDiv || !actionDiv) {
        return;
    }

    buttonAdd.addEventListener('click', () => {
        i++;

        const addInput = document.createElement('input');

        addInput.setAttribute('type', 'text');
        addInput.setAttribute('name', `ingredient${i}`);
        addInput.setAttribute('placeholder', `ingredient ${i}`);
        addInput.setAttribute('aria-label', `Ingredient ${i}`);
        addInput.classList.add('input');
        actionDiv.before(addInput);
    });

    buttonRemove.addEventListener('click', () => {
        const inputs = parentDiv.querySelectorAll('input');

        if (inputs.length > 1) {
            inputs[inputs.length - 1].remove();
            i--;
        }
    });
}

addIngredient();

