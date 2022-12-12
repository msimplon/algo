let today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1;
const year = today.getFullYear();

if (day < 11) {
    day = "0" + day;
}

if (month < 10) {
    month = "0" + month;
}

today = year + "-" + month + "-" + day;

console.log(today);


const date = document.getElementById("date");
date.setAttribute("min", today); // modification de la valeur de l'attribut date en today


//---------------------------------------------------------------------------------------------------------------//



const inputsForm = document.querySelectorAll('input, select, textarea');
const form = document.querySelector('form'); //récupèration de l'ensemble par le form



const toastSucces = document.getElementById('liveToast');
const toast = new bootstrap.Toast(toastSucces);


//creation du toast
function createTooltip(element, message) {

    return (new bootstrap.Tooltip(element, { //object
        title: message,
        placement: "bottom",
        trigger: "focus"
    }));
}




for (let i = 0; i < inputsForm.length; i++) {
    const state = inputsForm[i];
    const helpText = document.getElementById(`${state.id}`);
    let message = "";
    let tooltip = null;
    message = tooltipMessage(state)
    tooltip = createTooltip(state, message);
    const firstInvalidField = form.querySelector('invalid');

    state.addEventListener('invalid', event => {
        event.preventDefault();
        state.classList.add("is-invalid");
        helpText.classList.add("text-danger");


        if (state === firstInvalidField) {
            tooltip.show();
            firstInvalidField.focus()
        }
        // onChangeSuccess(state, helpText);

    });


    //Evenement change 

    state.addEventListener('change', event => {
        state.checkValidity();
        event.preventDefault();
        if (state.validity) {
            helpText.classList.remove("text-danger");
            helpText.classList.add("text-success");
            state.classList.remove("is-invalid");
            state.classList.add("is-valid");
            if (tooltip != null) {
                const tooltips = document.querySelectorAll(".tooltip");
                tooltips.forEach(element => {
                    element.remove();
                });
                tooltip.dispose();
            }
        }
    })
}



//personnalisation des messages en cas d'erreur de validation

function tooltipMessage(element) {
    if (element.validity.valueMissing) {
        return "Le champ obligatoire";
    } else if (element.value < element.min && element.validity.rangeUnderflow) {
        return "Doit être positif"; //ne fonctionne pas 
    } else if (element.type === "date") {
        return "Doit être égale ou supérieure à aujourd'hui";   //ne fonctionne pas 
    }
}



//Réinitialiser complètement le formulaire et afficher le toaster 
form.addEventListener('submit', event => {
    event.preventDefault();
    form.reset();
    toast.show()


    const elements = form.elements;
    const type = elements.type;
    for (const _element of elements) {
        if (type != 'submit') {
            helpText.classList.add("text-success");
            helpText.classList.remove("text-danger");


        }
    }
})