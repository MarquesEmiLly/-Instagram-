document.addEventListener('DOMContentLoaded', function (event) {
    console.log('Agora posso ver o HTML')

    const requestFriendshipEl = document.querySelector("#request-friendship")

    requestFriendshipEl.addEventListener('click', function (event) {
        const clickedElement = event.currentTarget
        const isFriendshipRequested = clickedElement.dataset.requestedFriendship === 'true'

        if (isFriendshipRequested) {
            clickedElement.innerText = "Solicitar amizade"
            clickedElement.classList.remove('button--active')
            clickedElement.dataset.requestedFriendship = false
        } else {
            clickedElement.innerText = "Amizade solicitada"
            clickedElement.classList.add('button--active')
            clickedElement.dataset.requestedFriendship = true
        }
    })
    /* Abaixo você vai ouvir quando o botão de enviar mensagem for clicado 
    e vai mostrar o elemtno com id "message" mudadndo o atributo "display" 
    para "inline-block" */
    const buttonMessageEl = document.querySelector("#button-message")
    buttonMessageEl.addEventListener('click', function (event) {
        const textareaEl = document.querySelector("#message")
        const clickedElement = event.currentTarget
        const isTextAreaRequested = clickedElement.dataset.requestedTextArea === 'true'

        if (isTextAreaRequested) {
            clickedElement.innerText = "Abrir chat"
            clickedElement.dataset.requestedTextArea = false
            textareaEl.style.display = "none"
        } else {
            clickedElement.innerText = "Mensagem enviada"
            textareaEl.style.backgroundColor = "cd7f32"
            textareaEl.style.display = "block"
            textareaEl.style.opacity = "10"
            textareaEl.style.marginTop = "1px"
            clickedElement.dataset.requestedTextArea = true

        }

    })

    /*
    Ao clicar em salvar um evento o texto deve mudar para "salvo" e o estilo do botão também deve mudar.*/

    document.querySelectorAll(".post-save").forEach(post => {
        post.addEventListener('click', function (event) {
            const clickedElement = event.currentTarget
            const isLikeRequested = clickedElement.dataset.requestedLike === 'true'

            if (isLikeRequested) {
                clickedElement.querySelector("span").innerText = "Salvar"
                clickedElement.dataset.requestedLike = false
            } else {
                clickedElement.querySelector("span").innerText = "Salvo"
                clickedElement.dataset.requestedLike = true
            }

            const savesQuantity = Array.from(document.querySelectorAll(".post-save")).filter(function (post) { return post.innerText == "SALVO" }).length
            document.querySelector("#likes").innerText = savesQuantity
        })
    })
})