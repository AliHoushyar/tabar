window.onscroll = function() {scrollFunction()};

function scrollFunction() {
      let fix = document.getElementById("fixnavbar");
      if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        fix.style.backgroundColor = "white";
        fix.style.height = "60px";
        document.getElementById('linkedcomp').style.color = "#7825cb";
        document.getElementsByClassName("signin_link")[0].style.color = "#7825cb";
        document.getElementsByClassName("nav-btn-stay")[0].style.borderColor = "#7825cb";
        document.getElementsByClassName("login_icon")[0].style.color = "#7825cb";
        let links = document.getElementsByClassName("nav-link");
        for(let i =0;i<5;i++){
            links[i].style.color = "#7825cb";
        }
        document.getElementById("navlogo").style.height = "40px";
        document.getElementById("navlogo").style.width = "40px";
        fix.style.boxShadow = "1px 9px 37px -2px rgba(0,0,0,0.75)";
        $("#navlogo").attr("src","../img/logo.png")
      }
      else{
        fix.style.backgroundColor = "rgba(0, 0, 0, 0.475)";
        fix.style.height = "90px";
        let links = document.getElementsByClassName("nav-link");
        document.getElementById('linkedcomp').style.color = "white";
        document.getElementsByClassName("signin_link")[0].style.color = "white";
        document.getElementsByClassName("nav-btn-stay")[0].style.borderColor = "white";
        document.getElementsByClassName("login_icon")[0].style.color = "white";
        for(let i =0;i<5;i++){
            links[i].style.color = "white";
        }
        document.getElementById("navlogo").style.height = "55px";
        document.getElementById("navlogo").style.width = "60px";
        fix.style.boxShadow = "none";
        $("#navlogo").attr("src","../img/logo3.png")
      }
}