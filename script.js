$(document).ready(function() {
    // Гамбургер-меню
    $('.burger').click(function() {
        toggleMenu();
    });
    
    // Закрыть меню при клике на ссылку (кроме внешних)
    $('.nav-menu a').click(function(e) {
        // Если это внешняя ссылка (Telegram/Instagram), не закрываем меню
        const href = $(this).attr('href');
        if (href.startsWith('http') || href.startsWith('https')) {
            // Внешняя ссылка - открывается в новом окне, меню можно оставить открытым
            return;
        }
        
        // Для внутренних ссылок - закрываем меню
        closeMenu();
    });
    
    // Плавная прокрутка для внутренних ссылок
    $('a[href^="#"]').on('click', function(e) {
        if ($(this).attr('href') === '#') return;
        
        e.preventDefault();
        const target = $(this).attr('href');
        
        if (target === '#home') {
            $('html, body').animate({ scrollTop: 0 }, 600);
        } else {
            const offset = $(target).offset().top - 70;
            $('html, body').animate({ scrollTop: offset }, 600);
        }
        
        // Обновляем активную ссылку
        $('.nav-menu a').removeClass('active');
        $(this).addClass('active');
        
        // Закрываем меню на мобильных
        closeMenu();
    });
    
    // Подсветка активного раздела при прокрутке
    $(window).scroll(function() {
        const scrollPos = $(window).scrollTop() + 100;
        
        $('section').each(function() {
            const sectionTop = $(this).offset().top;
            const sectionBottom = sectionTop + $(this).outerHeight();
            const sectionId = $(this).attr('id');
            
            if (scrollPos >= sectionTop && scrollPos <= sectionBottom) {
                $('.nav-menu a').removeClass('active');
                $('.nav-menu a[href="#' + sectionId + '"]').addClass('active');
            }
        });
    });
});

function toggleMenu() {
    $('.nav-menu').toggleClass('active');
    $('.burger').toggleClass('active');
    
    // Анимация бургера
    if ($('.burger').hasClass('active')) {
        $('.burger .line:nth-child(1)').css('transform', 'rotate(45deg) translate(5px, 5px)');
        $('.burger .line:nth-child(2)').css('opacity', '0');
        $('.burger .line:nth-child(3)').css('transform', 'rotate(-45deg) translate(7px, -6px)');
    } else {
        $('.burger .line:nth-child(1)').css('transform', 'none');
        $('.burger .line:nth-child(2)').css('opacity', '1');
        $('.burger .line:nth-child(3)').css('transform', 'none');
    }
}

function closeMenu() {
    $('.nav-menu').removeClass('active');
    $('.burger').removeClass('active');
    $('.burger .line:nth-child(1)').css('transform', 'none');
    $('.burger .line:nth-child(2)').css('opacity', '1');
    $('.burger .line:nth-child(3)').css('transform', 'none');
}

// Открыть описание чая в новом окне
function openTea(type) {
    const teas = {
        green: {
            title: "Зеленый чай",
            desc: "Свежий чай с легкой горчинкой. Богат антиоксидантами, тонизирует организм. Идеален для утреннего пробуждения.",
            price: "250-800 сом",
            brew: "70-80°C, 2-3 минуты",
            benefits: "Улучшает обмен веществ, бодрит"
        },
        black: {
            title: "Черный чай", 
            desc: "Насыщенный чай с ярким вкусом. Идеален для утреннего пробуждения. Отлично сочетается с лимоном.",
            price: "180-600 сом",
            brew: "95-100°C, 3-5 минут",
            benefits: "Повышает энергию, улучшает концентрацию"
        },
        white: {
            title: "Белый чай",
            desc: "Нежный чай с цветочным ароматом. Минимальная обработка сохраняет все полезные свойства чайного листа.",
            price: "350-1200 сом", 
            brew: "70-80°C, 4-7 минут",
            benefits: "Антиоксиданты, успокаивает нервную систему"
        },
        herbal: {
            title: "Травяной чай",
            desc: "Ароматный сбор трав без кофеина. Успокаивает и расслабляет. Можно пить перед сном.",
            price: "150-450 сом",
            brew: "95-100°C, 5-10 минут",
            benefits: "Расслабляет, улучшает сон, успокаивает"
        }
    };
    
    const tea = teas[type];
    
    const newWindow = window.open('', '_blank', 'width=800,height=600');
    newWindow.document.write(`
        
    `);
}