const cards = document.querySelectorAll('.card:not(hidden)')
const textBoxBusqueda = document.getElementById('nombre')
const filtroColor = document.querySelectorAll('input[type="checkbox"]')
const filtroSexo = document.querySelectorAll('input[type="radio"]')

let coloresSeleccionados = []
let sexoSeleccionado =""


const hide = (element) => {
  return element.classList.add("hidden")
}
const show = (element) => {
  return element.classList.remove("hidden")
}


// pasaFiltros -> param card -> return true o false 
// revisar si hay algo escrito en input // true / false
// CUMPLIDA revisar si hay algo chequeado en los checkbox // true / false
// revisar si hay algo chequeado en los radio // true / false 
// ver si el nombre escrit en el input coincide con el data-nombre de la tarjeta // true / false
// ver si alguno de los checkbox chequeados coincide con los colores de la tarjeta // true / false
// ver si el radio chequeado coincide con el sexo de la tarjeta // true / false 


const pasaFiltros = (card) => {

  // me fijo si hay algo escrito en el input, 
  // si hay algo escrito en el input me fijo si lo escrito coincide con la tarjeta
  // si coincide con lo escrito en la trajeta retorno true 
  // si no coincide, retorno false 

  // if (hayAlgoEscritoEnElInput()) {
  //   if (compararInputConTarjeta(card)) {
  //     return true
  //   }
  //   else {
  //     return false
  //   }
  // }
  // else {
  //   return true
  // }


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
  };


  // if (hayAlgunCheckBoxChequeado()) {
  //   if (compararCheckboxConTarjeta(card)) {
  //     return true
  //   }
  //   else {
  //     return false
  //   }
  // }
  // else {
  //   return true
  // };



  // me fijo si hay algo chequeado en los checkbox
  // si lo hay, me fijo que checkbox esta chequeado
  // si los checkbox chequeados coinciden con el color de alguna tarjeta
  // retorno true, sino retorno false 


  // codigo de los chedkbix

  // me fijo si hay algo chequeado en los radio
  // si lo hay, me fijo que radio esta chequeado
  // si el radio chequeado coinciden con el sexo de alguna tarjeta
  // retorno true, sino retorno false 

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

      if (radio.dataset.sexo === "indistinto") {
        return false;
      }
      sexoSeleccionado = radio.dataset.sexo
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

  let cont = 0;
  let i = 0;
  for (let checkbox of filtroColor) {

    if (checkbox.checked) {
      coloresSeleccionados[cont] = `${checkbox.dataset.color}`;
      cont++;

    } 
    //verifico que se cumplieron las 3 iteraciones y  que el arreglo no esta vacio 
     if (i >= 3 && coloresSeleccionados.length ) {
      console.log(coloresSeleccionados)
      return true
    }
    i++;

  }

  return false
}

const compararCheckboxConTarjeta = (card) => {

  if (coloresSeleccionados.includes(card.dataset.color)) {
    coloresSeleccionados = []
    return true
  }
  else {
    coloresSeleccionados = []
    return false
  }
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





















// =============CODIGO INUTIL QUE PUEDE SER UTIL ========================
// ==========================




// const cardValidation = () => {

//   let busqueda = textBoxBusqueda.value.toLowerCase();

//   for (let card of cards) {
//       let name = card.dataset.nombre;

//       if (name.includes(busqueda)) {
//         show(card);
//       } else {
//         hide(card);
//       }
//   }
// }




// const colorValidation = (checkbox) => {
//   if (checkbox.dataset.color === "todos") {
//     showAll();
//   } else {
//     checkCheckboxs(checkbox.dataset.color)

//   }

// }

// const sexoValidation = (checkbox) => {
//   let sexo = checkbox.dataset.sexo;
//   for (let card of cards) {

//     if (sexo === card.dataset.sexo ) {
//       show(card);
//     } else if (sexo === "indistinto") {
//       show(card);
//     }
//     else {
//       hide(card)
//     }

//   }
// }

// const showAll = () => {

//   filtroColor[1].checked = false;
//   filtroColor[2].checked = false;
//   filtroColor[3].checked = false;
//   for (let card of cards) {
//     show(card)
//   }


// }

// const isThereCheckboxChecked = () => {
//   for (let checkbox of filtroColor) {
//     if (checkbox.checked) {
//       return true;
//     }
//   }
// }

// const checkFilters = ()=>{

// }


// //eventos

// textBoxBusqueda.oninput = () => {
//   cardValidation();
// }


// for (let checkbox of filtroColor) {

//   checkbox.onclick = () => {
//     colorValidation(checkbox)
//   }

// }

// for (let checkbox of filtroSexo) {

//   checkbox.onclick = () => {
//     sexoValidation(checkbox)
//   }

// }



