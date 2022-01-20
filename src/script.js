$(document).ready(() => {
    const slickOptions = {
        dots: false,
        autoplay: true,
        prevArrow:'<button type="button" class="slick-prev slider__prev-arrow">Previous</button>;',
        nextArrow: '<button type="button" class="slick-next slider__next-arrow">Next</button>',
    };
    $('.slider').slick(slickOptions);


    let value = 1;
    setInterval(() => {
       const numberCollection = document.querySelectorAll(".counter__number");
       
       numberCollection.forEach ((number) => {
        const currentNumber = parseInt (number.innerHTML);
        number.innerHTML = currentNumber + 1;
       });
  }, 5000);

    const counterOptions = {
        delay: 10,
        time: 1000,
    }

    $(".counter__number").counterUp({counterOptions});


    $(".footer__form-button").on('click', () => {
        const email = $('#email').val();
        Email.send({
            Host : "smtp.yourisp.com",
            Username : "username",
            Password : "password",
            To : 'monicaschnei@gmail.com',
            From : email,
            Subject : "Please add me to your newsletter",
            Body : `Olá, eu gostaria de ser adicionado a newsletter do site. Meu email é $email.
            Obrigada!`
        }).then(
          message => alert(message)
        );
    })
  });

 