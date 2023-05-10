const sortBtn = document.querySelector(`.sort`);
const userInput = document.querySelector(`.do-input`);
const deleteBtn = document.querySelectorAll(`.delete-icon`);
const addBtn = document.querySelector(`.add-btn`);
const inputList = document.querySelector(`.list-wrapper`);
const inputLine = document.querySelector(`.input-wrapper`);

//----------------------------------------------------------------------------
// ставлю обработчики событий на иконку сортировки

// 1. изменяется при наведении курсора мыши
sortBtn.addEventListener(`mouseover`, (event) => {
  // pomenay na event i arrow function
  if (event.target.src.includes("sort-blind-down.png")) {
    event.target.src = "./img/sort-hover-down.png";
  } else if (sortBtn.src.includes("sort-blind-up.png")) {
    event.target.src = "./img/sort-hover-up.png";
  }
});
// 2. изменяется при отведении курсора мыши
sortBtn.addEventListener(`mouseout`, (event)=> {
  if (event.target.src.includes("sort-hover-down.png")) {
    event.target.src = "./img/sort-blind-down.png";
  } else if (event.target.src.includes("sort-hover-up.png")) {
    event.target.src = "./img/sort-blind-up.png";
  }
});

// 3. изменяется при клике
sortBtn.addEventListener(`click`, (event)=> {
  if (event.target.src.includes("sort-hover-down.png")) {
    event.target.src = "./img/sort-hover-up.png";
    sortInputsUp(); //вызов функции сортировки
  } else if (event.target.src.includes("sort-hover-up.png")) {
    event.target.src = "./img/sort-hover-down.png";
    sortInputsDown(); //вызов функии сортировки
  }
});

//----------------------------------------------------------------------------
// ставлю обработчики событий на иконку удаления
function getDelete() {
  deleteBtn.forEach((el) => {
    // 1. изменяется при наведении
    el.addEventListener(`mouseover`, (event) => {
      event.target.src = "./img/delete-hover.svg";
    });
    // 2. изменяется при отведении
    el.addEventListener(`mouseout`, (event) => {
      event.target.src = "./img/delete-blind.svg";
    });
    //
    // 3. изменения при удалении
    el.addEventListener(`click`, (event) => {
      userInput.value = "";
      
    });
  });
}
getDelete();
//----------------------------------------------------------------------------
// ставлю обработчики событий на кнопку добавления

addBtn.addEventListener(`click`, function () {
  userInput.focus(); // выделяет инпут

  const newInput = inputLine.cloneNode(true); // копирует инпут
  // меняю класснэйм клонированных элементов
  // newInput.classList.remove(`input-wrapper`);
  newInput.classList.add(`new-input-wrapper`);
  const inputChange = newInput.querySelector(`.do-input`);
  // inputChange.classList.remove(`do-input`);
  // inputChange.classList.add(`new-do`);
  const resetBtnChange = newInput.querySelector(`.delete-icon`);
  resetBtnChange.classList.remove(`delete-icon`);
  resetBtnChange.classList.add(`new-delete`);

  userInput.value = ""; // удаляет содержимое
  
  inputList.append(newInput); // вставляет в начало

  // получаю новые элементы
  const newDeleteBtn = document.querySelectorAll(`.new-delete`);
  const newUserInput = document.querySelectorAll(`.new-input-wrapper`);
  const newDoInput = document.querySelectorAll(`.new-do`);

  newDeleteBtn.forEach((el, i) => {
    // 1. изменяется при наведении
    el.addEventListener(`mouseover`, (event) => {
      event.target.src = "./img/delete-hover.svg";
    });
    // 2. изменяется при отведении
    el.addEventListener(`mouseout`, (event) => {
      event.target.src = "./img/delete-blind.svg";
    });
    // 3. изменения при удалении
    el.addEventListener(`click`, function () {
      // newInput.value = "";
      newUserInput[i].remove();
      userInput.focus(); // выделяет инпут
    });
  });
});

//----------------------------------------------------------------------------
// сортировка

// по-возростанию
function sortInputsUp() {
  const inputs = document.querySelectorAll(".do-input");
  
  const inputsArr = Array.from(inputs);
  const valueArr = [];
  inputsArr.forEach(el => {valueArr.push(el.value)});
  let check = 0;
  valueArr.forEach(el => {
    if (isNaN(el) === true){ 
      return check = true;
    } else {
      return check = false;
    }
    });
  console.log(check);
  if (check === true){
  valueArr.sort();
  } else {
  valueArr.sort((a, b) => {
    return a - b; 

  });
  };

  valueArr.forEach((el, i) => {
    inputs[i].value = el;
  });
};

// по-убыванию
function sortInputsDown() {
  const inputs = document.querySelectorAll(".do-input");
  
  const inputsArr = Array.from(inputs);
  const valueArr = [];
  inputsArr.forEach(el => {valueArr.push(el.value)});
  let check = 0;
  valueArr.forEach(el => {
    if (isNaN(el) === true){ 
      return check = true;
    } else {
      return check = false;
    }
    });
  console.log(check);
  if (check === true){
  valueArr.sort().reverse();
  } else {
  valueArr.sort((a, b) => {
    return a - b; 

  }).reverse();
  };

  valueArr.forEach((el, i) => {
    inputs[i].value = el;
  });
  
}

// ---------------------------------------------------------------------------
//----------------------------------------------------------------------------



