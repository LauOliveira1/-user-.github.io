



if (jQuery('html').hasClass('page-product')) {

    jQuery('#button-buy').click(() => {

        if (jQuery('#selectedVariant').val() == '') {

            jQuery('.blocoNenza').show();

        } else {

            jQuery('.blocoNenza').toggle();



        }

    });
    jQuery(".slick-this.product-gallery img").click(function () {
        var url = jQuery(this).attr("src")
        jQuery("#zoom_imagem_modal img").attr("src", url)
        jQuery("#zoom_imagem_modal").css("display", "block")
    })
    jQuery("div#zoom_imagem_modal .conteudo #fechar").click(function () {
        jQuery("#zoom_imagem_modal").css("display", "none")
    })

}



if (jQuery('html').hasClass('page-home')) {

    if (window.innerWidth < 990) {

        jQuery('.page-home #meio .nenza-slick-banner').slick({

            dots: false,

            infinite: true,

            speed: 300,

            autoplay: true,

            autoplaySpeed: 2000,

            slidesToShow: 1,

            arrows: true,

            prevArrow: '<i class="fa fa-arrow-left"></i>',

            nextArrow: '<i class="fa fa-arrow-right"></i>',

        });

    }



    jQuery('.nenza-slick-banner .slick-this-nenza').slick({

        slidesToShow: 3,

        slidesToScroll: 1,

        speed: 800,

        infinite: true,

        prevArrow: '<button class="slick-arrow slick-prev"><i class="fa fa-chevron-left"></i></button>',

        nextArrow: '<button class="slick-arrow slick-next"><i class="fa fa-chevron-right"></i></button>',

        arrows: true,

        dots: false,

        focusOnSelect: false,

        responsive: [

            {

                breakpoint: 990,

                settings: {

                    slidesToShow: 3,

                    slidesToScroll: 3,

                },



            },

            {

                breakpoint: 600,

                settings: {

                    slidesToShow: 2,

                    slidesToScroll: 2,

                    autoplay: true,

                    autoplaySpeed: 2000,

                }

            },

            {

                breakpoint: 400,

                settings: {

                    slidesToShow: 1,

                    slidesToScroll: 1,

                    autoplay: true,

                    autoplaySpeed: 2000,

                },

            }

        ]

    });





    jQuery('.vitrine-slick-1').slick({

        slidesToShow: 4,

        slidesToScroll: 4,

        autoplaySpeed: 2000,

        speed: 800,

        infinite: true,

        prevArrow: '<button class="slick-arrow slick-prev"><i class="fa fa-chevron-left"></i></button>',

        nextArrow: '<button class="slick-arrow slick-next"><i class="fa fa-chevron-right"></i></button>',

        arrows: true,

        dots: false,

        focusOnSelect: false,

        asNavFor: '.vitrine-slick-2',

        responsive: [

            {

                breakpoint: 990,

                settings: {

                    slidesToShow: 3,

                    slidesToScroll: 3,

                },



            },

            {

                breakpoint: 600,

                settings: {

                    slidesToShow: 2,

                    slidesToScroll: 2

                }

            },

            {

                breakpoint: 400,

                settings: {

                    slidesToShow: 2,

                    slidesToScroll: 2,

                },

            }

        ]

    });

    jQuery('.vitrine-slick-2').slick({

        slidesToShow: 4,

        slidesToScroll: 4,
        
        autoplaySpeed: 2000,

        speed: 800,

        speed: 600,

        infinite: true,

        arrows: false,

        asNavFor: '.vitrine-slick-1',

        dots: false,

        focusOnSelect: false,

        responsive: [

            {

                breakpoint: 990,

                settings: {

                    slidesToShow: 3,

                    slidesToScroll: 3,

                },



            },

            {

                breakpoint: 600,

                settings: {

                    slidesToShow: 2,

                    slidesToScroll: 2

                }

            },

            {

                breakpoint: 400,

                settings: {

                    slidesToShow: 2,

                    slidesToScroll: 2,

                },

            }

        ]

    });

    if (window.innerWidth < 990) {

        jQuery('.vitrine-slick-destaques').slick({

            slidesToShow: 4,

            slidesToScroll: 4,

            speed: 1000,

            autoplay: true,

            autoplaySpeed: 2000,

            infinite: true,

            prevArrow: '<button class="slick-arrow slick-prev"><i class="fa fa-chevron-left"></i></button>',

            nextArrow: '<button class="slick-arrow slick-next"><i class="fa fa-chevron-right"></i></button>',

            arrows: true,

            dots: false,

            focusOnSelect: false,

            responsive: [

                {

                    breakpoint: 990,

                    settings: {

                        slidesToShow: 3,

                        slidesToScroll: 3,

                    },



                },

                {

                    breakpoint: 600,

                    settings: {

                        slidesToShow: 2,

                        slidesToScroll: 2

                    }

                },

                {

                    breakpoint: 400,

                    settings: {

                        slidesToShow: 2,

                        slidesToScroll: 2,

                    },

                }

            ]

        });

    }



    jQuery('.content-tarja').slick({

        dots: false,

        arrows: false,

        infinite: false,

        speed: 300,

        slidesToShow: 4,

        slidesToScroll: 1,

        autoplay: true,

        autoplaySpeed: 4000,

        infinite: true,

        focusOnSelect: false,

        responsive: [



            {

                breakpoint: 990,

                settings: {

                    slidesToShow: 2,

                    slidesToScroll: 2,

                }

            }

            // You can unslick at a given breakpoint now by adding:

            // settings: "unslick"

            // instead of a settings object

        ]

    });



    jQuery('.vitrine-slick').slick({

        slidesToShow: 4,

        slidesToScroll: 4,

        speed: 300,

        infinite: true,

        prevArrow: '<button class="slick-arrow slick-prev"><i class="fa fa-chevron-left"></i></button>',

        nextArrow: '<button class="slick-arrow slick-next"><i class="fa fa-chevron-right"></i></button>',

        autoplay: true,

        autoplaySpeed: 5000,

        arrows: true,

        dots: false,

        focusOnSelect: false,

        responsive: [

            {

                breakpoint: 990,

                settings: {

                    slidesToShow: 3,

                    slidesToScroll: 3,

                },



            },

            {

                breakpoint: 600,

                settings: {

                    slidesToShow: 2,

                    slidesToScroll: 2

                }

            },

            {

                breakpoint: 400,

                settings: {

                    slidesToShow: 2,

                    slidesToScroll: 2,

                },

            }

        ]

    });

}



if (jQuery('html').hasClass('page-search')) {
    var titleAbaCat = document.querySelectorAll("[data-titlecat]");

    var itensAbaCat = document.querySelectorAll("[data-tabcat]");

    titleAbaCat.forEach((title) => {

        title.addEventListener("click", () => {

            if (title.classList.contains("ativo")) {

                titleAbaCat.forEach((title) => {

                    title.classList.remove("ativo")

                });



                itensAbaCat.forEach((aba) => {

                    aba.classList.remove("ativo");

                });

            } else {

                titleAbaCat.forEach((title) => {

                    title.classList.remove("ativo")

                });



                itensAbaCat.forEach((aba) => {

                    aba.classList.remove("ativo");

                });



                itensAbaCat.forEach((aba) => {

                    if (title.dataset.titlecat == aba.dataset.tabcat) {

                        title.classList.add("ativo");

                        aba.classList.add("ativo")

                    }

                });

            }



        });

    });
}

if (jQuery('html').hasClass('page-catalog')) {





    var titleAbaCat = document.querySelectorAll("[data-titlecat]");

    var itensAbaCat = document.querySelectorAll("[data-tabcat]");

    titleAbaCat.forEach((title) => {

        title.addEventListener("click", () => {

            if (title.classList.contains("ativo")) {

                titleAbaCat.forEach((title) => {

                    title.classList.remove("ativo")

                });



                itensAbaCat.forEach((aba) => {

                    aba.classList.remove("ativo");

                });

            } else {

                titleAbaCat.forEach((title) => {

                    title.classList.remove("ativo")

                });



                itensAbaCat.forEach((aba) => {

                    aba.classList.remove("ativo");

                });



                itensAbaCat.forEach((aba) => {

                    if (title.dataset.titlecat == aba.dataset.tabcat) {

                        title.classList.add("ativo");

                        aba.classList.add("ativo")

                    }

                });

            }



        });

    });

}



var lvl1Nenza = document.querySelectorAll('[data-nenza="lvl1"]');
lvl1Nenza.forEach((lvl) => {
    lvl.addEventListener('click', (e) => {
        e.preventDefault();
    })
})


setTimeout(() => {

    jQuery('.close-overlay').click(function () {

        jQuery('#overlay').removeClass('ativo');

        document.cookie = "nenzim" + "=" + "brabo" + ";" + ";path=/";

    });



    function getCookie(cname) {

        var name = cname + "=";

        var ca = document.cookie.split(';');

        for (var i = 0; i < ca.length; i++) {

            var c = ca[i];

            while (c.charAt(0) == ' ') {

                c = c.substring(1);

            }

            if (c.indexOf(name) == 0) {

                return c.substring(name.length, c.length);

            }

        }

        return "";

    }





    var user = getCookie("nenzim");

    if (user != "") {



    } else {

        jQuery('#overlay').addClass('ativo');



    }

}, 4000)



var datePromo = document.getElementById('endPromoBanner').value;
var newDatePromo = moment(datePromo, 'YYYY-MM-DD').format('MMMM D, Y')

var target_date = new Date(newDatePromo).getTime();
var current_date = new Date().getTime();
var horasTotais = parseInt(((target_date - current_date) / 1000) / 3600);

if (horasTotais <= 0) {
    jQuery('.moment-nenza').hide();
} else {

    jQuery('#timeTotal').text(horasTotais);
    var dias, horas, minutos, segundos;

    setInterval(function () {
        var current_date = new Date().getTime();
        var target_date = new Date(newDatePromo).getTime();

        var segundos_f = (target_date - current_date) / 1000;

        dias = parseInt(segundos_f / 86400);
        segundos_f = segundos_f % 86400;

        horas = parseInt(segundos_f / 3600);
        segundos_f = segundos_f % 3600;

        minutos = parseInt(segundos_f / 60);
        segundos = parseInt(segundos_f % 60);

        document.getElementById('diaBanner').innerHTML = dias;
        document.getElementById('horaBanner').innerHTML = horas < 10 ? '0' + horas : horas;
        document.getElementById('minutoBanner').innerHTML = minutos < 10 ? '0' + minutos : minutos;
        document.getElementById('segundoBanner').innerHTML = segundos < 10 ? '0' + segundos : segundos;

        // console.log(dias, horas, minutos, segundos)


    }, 1000);

}
