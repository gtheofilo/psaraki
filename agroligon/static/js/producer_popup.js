var alertsContainer = document.getElementsByClassName("alerts-container")[0];
var alertCode = '<div class="alert alert-primary d-flex align-items-baseline m-0 mt-5" role="alert">\n' +
    '<div>\n' +
    '<i class="fas fa-fish mr-2"></i>O Γιώργος Θεοφιλόπουλος θέλει <strong>10kg Σφυρίδα</strong> και\n' +
    '<strong>5kg Πεσκανδρίτσα</strong> στην Αθήνα.\n' +
    '</div>\n' +
    '<a href="#" class="btn btn-success ml-auto">\n' +
    '<i class="fas fa-check mr-2"></i>Αποδοχή παραγγελίας\n' +
    '</a>\n' +
    '</div>';

const sound = new Audio("../../static/sounds/ui_popup.mp3");

document.addEventListener('keydown', eventHandler, false);

function eventHandler(event) {

    const keyName = event.key;

    if (keyName === 'A' || keyName === "a") {
        sound.load()
        sound.play()

        alertsContainer.innerHTML = alertsContainer.innerHTML + alertCode;
    }
}