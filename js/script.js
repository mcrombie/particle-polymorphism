/* --------------------------------- */
/* ADD SHAPES */
/* --------------------------------- */

const addShape = () => {
    let element = document.createElement('div');
    let shape = document.querySelector('input[name="shape"]:checked').value;
    element.innerHTML = `<div class="particle ${shape}"></div>`;
    document.getElementById("particle-container").insertAdjacentElement("beforeend", element);
}

/* --------------------------------- */
/* POLYMORPHISM EXEMPLIFIED */
/* --------------------------------- */

// https://code.tutsplus.com/tutorials/generating-a-particle-system-with-javascript--net-10668


class Particle{
    constructor(){

    }
}