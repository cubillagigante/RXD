function mostrarImagenes() {
    const maximoimagenes = 10;
    const content = document.getElementById('content'); 
    const saludo = document.querySelector('.saludo .mensaje'); 

    const frases = [
        "Amar no es mirarse el uno al otro, es mirar juntos en la misma dirección. – Antoine de Saint-Exupéry",
        "Te amo no por lo que eres, sino por lo que soy cuando estoy contigo. – Roy Croft",
        "El amor verdadero no tiene final feliz, porque el amor verdadero nunca termina. – Anónimo",
        "La felicidad es estar a tu lado, siempre. Te amo. – Anónimo",
        "El amor no se trata de lo que queremos, sino de lo que podemos dar. – Leo Buscaglia",
        "Te amé desde el primer momento en que te vi, y sigo amándote más cada día. – Anónimo",
        "Tú y yo somos una historia de amor que nunca quiero que termine. – Anónimo",
        "Si tuviera que elegir entre respirar y amarte, usaría mi último aliento para decirte que te amo. – Anónimo",
        "Contigo, cada día es un regalo que me llena de alegría. Te amo. – Anónimo",
        "El amor es lo que hace que la vida valga la pena. – Anónimo"
    ];


    for (let i = 1; i <= maximoimagenes; i++) {
        const divContain = document.createElement('div');
        divContain.classList.add('contain');
        divContain.innerHTML = `<img data-frase='${frases[i - 1]}' src="img/img${i}.jpeg" alt="img">`;
        divContain.dataset.frase = frases[i - 1];

        content.appendChild(divContain);
    }

    const images = document.querySelectorAll('.contain img');

    images.forEach((image) => {
        image.addEventListener('mouseenter', () => {
            saludo.style.opacity = '1'; // Mostrar .saludo
            saludo.innerText='';
            saludo.innerText=image.dataset.frase;
            console.log(image.dataset.frase);
        });
        
        image.addEventListener('mouseleave', () => {
            saludo.style.opacity = '0'; // Ocultar .saludo
            
        });
    });
}


window.onload = mostrarImagenes;




