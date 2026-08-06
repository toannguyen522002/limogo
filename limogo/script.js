document.addEventListener("DOMContentLoaded", function(){


    console.log("LIMO GO website ready");



    // Hiệu ứng xuất hiện khi cuộn trang

    const elements = document.querySelectorAll(
        ".why-card, .car-box, .price-card, .process-card, .policy-box, .contact"
    );


    elements.forEach(el => {

        el.style.opacity = "0";

        el.style.transform = "translateY(40px)";

        el.style.transition = "all .8s ease";

    });



    function showOnScroll(){


        elements.forEach(el=>{


            const position =
            el.getBoundingClientRect().top;


            if(position < window.innerHeight - 80){


                el.style.opacity = "1";

                el.style.transform =
                "translateY(0)";


            }


        });


    }



    window.addEventListener(
        "scroll",
        showOnScroll
    );


    showOnScroll();






    // Header đổi bóng khi cuộn


    const header =
    document.querySelector("header");


    window.addEventListener(
        "scroll",
        ()=>{


            if(window.scrollY > 50){

                header.style.boxShadow =
                "0 8px 25px rgba(0,0,0,.15)";

            }

            else{

                header.style.boxShadow =
                "0 5px 20px rgba(0,0,0,.08)";

            }


        }
    );








    // Đổi title trình duyệt


    let originalTitle =
    document.title;


    let change = false;



    setInterval(()=>{


        document.title =
        change
        ? originalTitle
        : "🛵 LIMO GO | Thuê Xe Điện Đà Nẵng";


        change = !change;


    },4000);







    // Click smooth cho menu


    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(link=>{


        link.addEventListener(
            "click",
            function(e){


                e.preventDefault();


                const target =
                document.querySelector(
                    this.getAttribute("href")
                );


                if(target){


                    target.scrollIntoView({

                        behavior:"smooth"

                    });


                }


            }
        );


    });



});