import "./bootstrap";
import jQuery from "jquery";
// в этом файле находятся все функции js
import { buttonEffect, logWrite, svetoforRun } from "./functions";
window.$ = jQuery;

//нужен чтобы ориентироваться куда переключать светофор вниз или вверх
window.vector = false;

$(document).ready(function () {
    //запускаем светофор
    svetoforRun();
    //логика при клике
    $(".bubbly-button").on("click", logWrite);

    // просто красивый эффект при нажатии
    buttonEffect();
});
