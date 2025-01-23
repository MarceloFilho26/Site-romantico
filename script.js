document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');
    const alertBox = document.getElementById('custom-alert');
    const alertMessage = document.getElementById('alert-message');
    const closeAlert = document.getElementById('close-alert');

    const carouselImages = document.querySelector('.carousel-images');
    const totalImages = carouselImages.children.length;

    let currentIndex = 0;

    // Função para atualizar o carrossel automaticamente
    function updateCarousel() {
        const offset = -currentIndex * 300; // 300px é a largura da imagem
        carouselImages.style.transform = `translateX(${offset}px)`;
        currentIndex = (currentIndex + 1) % totalImages; // Loop infinito
    }

    // Alterar imagem a cada 3 segundos
    setInterval(updateCarousel, 3000);

    // Exibir a mensagem personalizada
    function showAlert(message) {
        alertMessage.textContent = message;
        alertBox.classList.add('show');
    }

    // Fechar o alerta
    closeAlert.addEventListener('click', function () {
        alertBox.classList.remove('show');
    });

    // Botão "Sim"
    yesButton.addEventListener('click', function () {
        showAlert('Foi uma excelente escolha para a sua vida! Neném te ama muito e esta com saudades❤️!');
    });

    // Botão "Não"
    noButton.addEventListener('click', function () {
        showAlert('ERROR! Não é possível recusar este pedido!');
    });
});
