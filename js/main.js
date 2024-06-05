(function() {
  
    var autoUpdate = true,
        timeTrans = 10000;
    
      var cdSlider = document.querySelector('.cd-slider'),
          item = cdSlider.querySelectorAll("li"),
          nav = cdSlider.querySelector("nav");
  
      item[0].className = "current_slide";
  
      for (var i = 0, len = item.length; i < len; i++) {
          var color = item[i].getAttribute("data-color");
          item[i].style.backgroundColor=color;
      }
  
      // Detect IE
      // hide ripple effect on IE9
      var ua = window.navigator.userAgent;
          var msie = ua.indexOf("MSIE");
          if ( msie > 0 ) {
              var version = parseInt(ua.substring(msie+ 5, ua.indexOf(".", msie)));
              if (version === 9) { cdSlider.className = "cd-slider ie9";}
      }
  
      if (item.length <= 1) {
          nav.style.display = "none";
      }
  
      function prevSlide() {
          var currentSlide = cdSlider.querySelector("li.current_slide"),
              prevElement = currentSlide.previousElementSibling,
              prevSlide = ( prevElement !== null) ? prevElement : item[item.length-1],
              prevColor = prevSlide.getAttribute("data-color"),
              el = document.createElement('span');
  
          currentSlide.className = "";
          prevSlide.className = "current_slide";
  
          nav.children[0].appendChild(el);
  
          var size = ( cdSlider.clientWidth >= cdSlider.clientHeight ) ? cdSlider.clientWidth*2 : cdSlider.clientHeight*2,
              ripple = nav.children[0].querySelector("span");
  
          ripple.style.height = size + 'px';
          ripple.style.width = size + 'px';
          ripple.style.backgroundColor = prevColor;
  
          ripple.addEventListener("webkitTransitionEnd", function() {
              if (this.parentNode) {
                  this.parentNode.removeChild(this);
              }
          });
  
          ripple.addEventListener("transitionend", function() {
              if (this.parentNode) {
                  this.parentNode.removeChild(this);
              }
          });
  
      }
  
      function nextSlide() {
          var currentSlide = cdSlider.querySelector("li.current_slide"),
              nextElement = currentSlide.nextElementSibling,
              nextSlide = ( nextElement !== null ) ? nextElement : item[0],
              nextColor = nextSlide.getAttribute("data-color"),
              el = document.createElement('span');
  
          currentSlide.className = "";
          nextSlide.className = "current_slide";
  
          nav.children[1].appendChild(el);
  
          var size = ( cdSlider.clientWidth >= cdSlider.clientHeight ) ? cdSlider.clientWidth*2 : cdSlider.clientHeight*2,
                ripple = nav.children[1].querySelector("span");
  
          ripple.style.height = size + 'px';
          ripple.style.width = size + 'px';
          ripple.style.backgroundColor = nextColor;
  
          ripple.addEventListener("webkitTransitionEnd", function() {
              if (this.parentNode) {
                  this.parentNode.removeChild(this);
              }
          });
  
          ripple.addEventListener("transitionend", function() {
              if (this.parentNode) {
                  this.parentNode.removeChild(this);
              }
          });
  
      }
  
      updateNavColor();
  
      function updateNavColor () {
          var currentSlide = cdSlider.querySelector("li.current_slide");
  
          var nextColor = ( currentSlide.nextElementSibling !== null ) ? currentSlide.nextElementSibling.getAttribute("data-color") : item[0].getAttribute("data-color");
          var	prevColor = ( currentSlide.previousElementSibling !== null ) ? currentSlide.previousElementSibling.getAttribute("data-color") : item[item.length-1].getAttribute("data-color");
  
          if (item.length > 2) {
              nav.querySelector(".prev").style.backgroundColor = prevColor;
              nav.querySelector(".next").style.backgroundColor = nextColor;
          }
      }
  
      nav.querySelector(".next").addEventListener('click', function(event) {
          event.preventDefault();
          nextSlide();
          updateNavColor();
      });
  
      nav.querySelector(".prev").addEventListener("click", function(event) {
          event.preventDefault();
          prevSlide();
          updateNavColor();
      });
    
    //autoUpdate
    setInterval(function() {
      if (autoUpdate) {
        nextSlide();
        updateNavColor();
      };
      },timeTrans);
  
  })();
const wrapper = document.querySelector(".wrappercontain");
const carousel = document.querySelector(".carousel2");
const firstCardWidth = carousel.querySelector(".newscard").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrappercontain i");
const carouselChildrens = [...carousel.children];
let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});
carousel.classList.add("no-transition");
carousel.classList.remove("no-transition");
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "leftbtn" ? -firstCardWidth : firstCardWidth;
    });
});
const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    if(!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}
const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}
const infiniteScroll = () => {
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}
const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; 
    timeoutId = setTimeout(() => carousel.scrollLeft -= firstCardWidth, 3000);
}
autoPlay();
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);
