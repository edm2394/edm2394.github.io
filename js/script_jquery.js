 $(document).ready(function(){
    $('.legal-aid_kinds_item--criminal').hover(
        function(){ 
            $(this).find('.criminal').toggleClass('legal-aid_transform-item');
        }
    );
    $('.legal-aid_kinds_item--arbitration').hover(
        function(){ 
            $(this).find('.arbitration').toggleClass('legal-aid_transform-item');
        }
    );
    $('.legal-aid_kinds_item--civil').hover(
        function(){ 
            $(this).find('.civil').toggleClass('legal-aid_transform-item');
        }
    );
    $('.legal-aid_kinds_item--criminal').hover(
        function(){ 
            $(this).find('.legal-aid_desc').toggleClass('hidden');
        }
    );
    $('.legal-aid_kinds_item--arbitration').hover(
        function(){ 
            $(this).find('.legal-aid_desc').toggleClass('hidden');
        }
    );
    $('.legal-aid_kinds_item--civil').hover(
        function(){ 
            $(this).find('.legal-aid_desc').toggleClass('hidden');
        }
    );
    $('.principles-slider').slick({
        //Вместо прокрутки элемент исчезает и появляется
        fade: false,
        //Кол-во отображаемых одновременно слайдов
        slidesToShow: 3,
        //Кол-во прокручивающихся за раз слайдов
        slidesToScroll: 1,
        //Автопрокрутка слайдов
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnFocus: true,
        pauseOnHover: false,
        pauseOnDotsHover: true,
        //Включение стрелок и дотов
        arrows: true,
        dots: true,
        //Скорость прокрутки
        speed: 500,
        //Анимация прокрутки
        easing: 'linear',
        //Бесконечная карусель
        infinite: true,
        //Стартовый слайд
        initialSlide: 0,
        //Свайпы
        draggable: false,
        swipe: true,
        verticalSwiping: false,
        touchThreshold: 10,
        touchMove: true,
        //Задержка перед прокруткой
        waitForAnimate: false,
        //Центрирование главного слайда
        centerMode: true,
        //Ряды
        rows: 1,
        slidesPerRow: 1,
        //Вертикальная прокрутка
        vertical: false,
        //Связь с другим слайдером
        asNavFor: "",
        //Адаптивность
        variableWidth: false,
        mobileFirst: false,
        responsive:[
            {
                breakpoint: 768,
                settings:{
                    slidesToShow: 1
                }
            }
        ],
        //Перемещение стрелок и дотов в блок с другим классом
        //appendArrows: $('.primer'),
        //appendDots: $('.primer'),
    });
    $('.offer-slider').slick({
        //Вместо прокрутки элемент исчезает и появляется
        fade: false,
        //Кол-во отображаемых одновременно слайдов
        //slidesToShow: 1,
        //Кол-во прокручивающихся за раз слайдов
        //slidesToScroll: 1,
        //Автопрокрутка слайдов
        // autoplay: true,
        // autoplaySpeed: 5000,
        // pauseOnFocus: true,
        // pauseOnHover: false,
        // pauseOnDotsHover: true,
        //Включение стрелок и дотов
        arrows: true,
        dots: true,
        //Скорость прокрутки
        //speed: 500,
        //Анимация прокрутки
        //easing: 'linear',
        //Бесконечная карусель
        //infinite: true,
        //Стартовый слайд
        //initialSlide: 0,
        //Свайпы
        // draggable: false,
        // swipe: true,
        // verticalSwiping: false,
        // touchThreshold: 10,
        // touchMove: true,
        //Задержка перед прокруткой
        // waitForAnimate: false,
        //Центрирование главного слайда
        // centerMode: true,
        //Ряды
        // rows: 1,
        // slidesPerRow: 1,
        //Вертикальная прокрутка
        // vertical: false,
        //Связь с другим слайдером
        // asNavFor: "",
        //Адаптивность
        // variableWidth: false,
        // mobileFirst: false,
        // responsive:[
        //     {
        //         breakpoint: 768,
        //         settings:{
        //             slidesToShow: 1
        //         }
        //     }
        // ],
        //Перемещение стрелок и дотов в блок с другим классом
        //appendArrows: $('.primer'),
        //appendDots: $('.primer'),
    });

    $('.map_info_slider').slick({
        //Вместо прокрутки элемент исчезает и появляется
        fade: false,
        //Кол-во отображаемых одновременно слайдов
        slidesToShow: 1,
        //Кол-во прокручивающихся за раз слайдов
        slidesToScroll: 1,
        //Автопрокрутка слайдов
        // autoplay: true,
        // autoplaySpeed: 5000,
        // pauseOnFocus: true,
        // pauseOnHover: false,
        // pauseOnDotsHover: true,
        //Включение стрелок и дотов
        arrows: true,
        dots: true,
        //Скорость прокрутки
        //speed: 500,
        //Анимация прокрутки
        //easing: 'linear',
        //Бесконечная карусель
        infinite: true,
        //Стартовый слайд
        initialSlide: 0,
        //Свайпы
        // draggable: false,
        // swipe: true,
        // verticalSwiping: false,
        // touchThreshold: 10,
        // touchMove: true,
        //Задержка перед прокруткой
        // waitForAnimate: false,
        //Центрирование главного слайда
        // centerMode: true,
        //Ряды
        // rows: 1,
        // slidesPerRow: 1,
        //Вертикальная прокрутка
        // vertical: false,
        //Связь с другим слайдером
        // asNavFor: "",
        //Адаптивность
        //variableWidth: true,
        // mobileFirst: false,
        // responsive:[
        //     {
        //         breakpoint: 768,
        //         settings:{
        //             slidesToShow: 1
        //         }
        //     }
        // ],
        //Перемещение стрелок и дотов в блок с другим классом
        //appendArrows: $('.primer'),
        //appendDots: $('.primer'),
    });
});