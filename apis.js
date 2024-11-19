const fetchCats = async () => {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=6'); // Obtener 6 imágenes de gatos
        const cats = await response.json();

        const container = document.getElementById('cat-container');

        // Crear tarjetas para cada gato
        cats.forEach(cat => {
            const catCard = document.createElement('div');
            catCard.classList.add('cat-card');

            catCard.innerHTML = `
                <img src="${cat.url}" alt="Gato">
                <p>ID: ${cat.id}</p>
            `;

            container.appendChild(catCard);
        });
    } catch (error) {
        console.error('Error fetching cats:', error);
    }
};

// Evento para cargar más gatos
document.getElementById('load-more').addEventListener('click', () => {
    fetchCats();
});

// Cargar gatos iniciales al abrir la página
fetchCats();