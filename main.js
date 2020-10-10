const cards = document.querySelectorAll('.card:not(hidden)')
const textBoxBusqueda = document.getElementById('nombre')
const filtroColor = document.querySelectorAll('input[type="checkbox"]')
const filtroSexo = document.querySelectorAll('input[type="radio"]')

let coloresSeleccionados = []
let sexoSeleccionado = ""


const hide = (element) => {
  return element.classList.add("hidden")
}
const show = (element) => {
  return element.classList.remove("hidden")
}



const validarInput = (card) => {
  if (hayAlgoEscritoEnElInput()) {
    if (compararInputConTarjeta(card)) {
      return true
    }
    else {
      return false
    }
  }
  else {
    return true
  }
}


const validarRadios = (card) => {
  if (hayAlgunRadioChequeado()) {
    if (compararRadioConTarjeta(card)) {
      return true;
    }
    else {
      return false;
    }
  }
  else {
    return true;
  }

}



const validarchecks = (card) => {

  if (hayAlgunCheckBoxChequeado()) {
    if (compararCheckboxConTarjeta(card)) {
      return true
    }
    else {
      return false
    }
  }
  else {
    return true
  };

}

const pasaFiltros = (card) => {

  if (validarInput(card) && validarRadios(card) && validarchecks(card)) {

    return true
  } else {
    return false
  }

}


const filtrarTarjetas = () => {
  for (let card of cards) {
    if (pasaFiltros(card)) {
      show(card)
    }
    else {
      hide(card)
    }
  }
}


const compararInputConTarjeta = (card) => {
  if (card.dataset.nombre.includes(textBoxBusqueda.value.toLowerCase())) {
    return true
  }
  else {
    return false
  }
}


const hayAlgunRadioChequeado = () => {
  for (let radio of filtroSexo) {

    if (radio.checked) {

      if (radio.value === "indistinto") {
        return false;
      }
      sexoSeleccionado = radio.value;
      return true
    }
  }
  return false
}


const compararRadioConTarjeta = (card) => {
  if (card.dataset.sexo === sexoSeleccionado) {
    return true
  }
  else {
    return false
  }
}

const hayAlgunCheckBoxChequeado = () => {
  for (let checkbox of filtroColor) {
    if (checkbox.checked) {
      return true
    }
  }
  return false
}
const compararCheckboxConTarjeta = (card) => {

  for (let checkbox of filtroColor) {
    if (checkbox.checked) {
      if (checkbox.value === card.dataset.color || checkbox.value === "todos") {
        return true
      }
    }
  }
  return false
}


const hayAlgoEscritoEnElInput = () => {
  if (textBoxBusqueda.value) {
    return true
  }
  else {
    return false
  }
}

textBoxBusqueda.oninput = () => {
  filtrarTarjetas()

}


for (let checkbox of filtroColor) {
  checkbox.oninput = () => {
    filtrarTarjetas()
  }
}

for (let radio of filtroSexo) {
  radio.oninput = () => {
    filtrarTarjetas()
  }
}



