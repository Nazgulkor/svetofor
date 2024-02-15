export function logWrite() {
    let current_light = $(".traffic-light .active");
    switch (current_light.data("color")) {
        case "red":
            requestFunction("Проезд на красный. Штраф!");
            break;
        case "yellow":
            if (vector) {
                requestFunction("Слишком рано начали движение!");
            } else {
                requestFunction("Успели на желтый!");
            }
            break;
        case "green":
            requestFunction("Проезд на зеленый!");
            break;
    }
}

export function svetoforRun() {
    let next;
    let lights = $(".traffic-light .active");
    // сколько будут гореть
    let times = {
        red: 5000,
        yellow: 2000,
        green: 5000,
    };
    setTimeout(function () {
        lights.removeClass("active");
        //если флаг true значит надо вниз и наоборот
        next = vector ? lights.next() : lights.prev();
        next.addClass("active");
        //если горит зеленый устанавливливаем направление вверх а если красный то вниз
        vector = next.hasClass("green")
            ? false
            : next.hasClass("red")
            ? true
            : vector;
        //запускаем светофор с новыми данными
        svetoforRun(vector);
    }, times[lights.data("color")]); //берется из массивка times установленная продолжительность для каждого цвета
}

export function buttonEffect() {
    var animateButton = function (e) {
        e.preventDefault;
        //reset animation
        e.target.classList.remove("animate");

        e.target.classList.add("animate");
        setTimeout(function () {
            e.target.classList.remove("animate");
        }, 700);
    };

    var bubblyButtons = document.getElementsByClassName("bubbly-button");

    for (var i = 0; i < bubblyButtons.length; i++) {
        bubblyButtons[i].addEventListener("click", animateButton, false);
    }
}

export function requestFunction(message) {
    axios
        .post("http://localhost:8080/api/write-log", { message: message })
        .then(function (response) {
            $("tbody").prepend(`
            <tr>
                <td>${response.data.message}</td>
                <td>${response.data.created_at}</td>
            </tr>
            `);
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}
