
  $('.name-menu').slick(
    {
        prevArrow:`<button type='button' class='slick-prev pull-left'><i class="fa-solid fa-arrow-left"></i></button>`,
        nextArrow:`<button type='button' class='slick-next pull-right'><i class="fa-sharp fa-solid fa-arrow-right"></i></button>`,

    }
  );
  //loading

  var loader = document.getElementById("loading")
  window.addEventListener("load",function(){
    loader.style.display="none";
  })