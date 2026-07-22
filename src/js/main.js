const accordions = document.querySelectorAll(".accordion")

accordions.forEach(acc => {
    acc.addEventListener("click", () => {
        const body = acc.querySelector(".accordion-body")

        if(body.classList.contains("active")) {
            body.classList.remove("active")
            return;
        }

        accordions.forEach(el => {
            const elBody = el.querySelector(".accordion-body")

            if(elBody.classList.contains("active"))
                elBody.classList.remove("active")
        })

        body.classList.toggle("active")
    })
})