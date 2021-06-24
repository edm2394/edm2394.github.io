//Переменные
var navPhoneLink = document.querySelector('.nav_phone-link');
var navMainListElementPhoneForm =  document.querySelector('.nav-main_list-element_phone-form');
// var mapInfoEyeImg = document.querySelector('.map_info_eye_img');
// var mapInfo =  document.querySelector('.map_info');

//Задаём первоначальные значения 
navMainListElementPhoneForm.style.display = 'none';
// mapInfo.style.opacity = '1';

//Отслеживаем клики
navPhoneLink.addEventListener('click', phoneBlockDisplay);
// mapInfoEyeImg.addEventListener('click', mapInfoBlockOpacity);

//Вызываем функции 

//Функции
function phoneBlockDisplay () {
    switch (navMainListElementPhoneForm.style.display) {
        case 'none':
            navMainListElementPhoneForm.style.display = 'block';
            break;
        case 'block':
            navMainListElementPhoneForm.style.display = 'none';
            break;
    }
}

// function mapInfoBlockOpacity () {
//     switch (mapInfo.style.opacity) {
//         case '1':
//             mapInfo.style.opacity = '0.2';
//             break;
//         case '0.2':
//             mapInfo.style.opacity = '1';
//             break;
//     }
// }

