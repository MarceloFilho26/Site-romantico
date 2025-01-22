document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');
    const alertBox = document.getElementById('custom-alert');
    const alertMessage = document.getElementById('alert-message');
    const closeAlert = document.getElementById('close-alert');

    // Exibir a mensagem personalizada
    function showAlert(message) {
        alertMessage.textContent = message; // Define a mensagem
        alertBox.style.display = 'block'; // Mostra a caixinha de aviso
    }

    // Ocultar a mensagem personalizada
    closeAlert.addEventListener('click', function () {
        alertBox.style.display = 'none'; // Oculta a caixinha de aviso
    });

    // Botão "Sim"
    yesButton.addEventListener('click', function () {
        showAlert('Foi uma excelente escolha para a sua vida. Neném te ama e está com saudades❤️!');
    });

    // Botão "Não"
    noButton.addEventListener('click', function () {
        showAlert('Não é possível recusar este pedido!');
    });
});
