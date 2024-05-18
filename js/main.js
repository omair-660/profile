let header = document.getElementsByTagName("header")[0];
let up = document.getElementById("up");
let logo = document.getElementById("logo");

window.onscroll = function(){
    if (scrollY >= 800){
        header.classList.add("bg");
        up.classList.add("open");
        logo.classList.add("open");
    } else {
        header.classList.remove("bg");
        up.classList.remove("open");
        logo.classList.remove("open");
    }
}

up.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
document.addEventListener("DOMContentLoaded", function () {
    function startProgress(entry) {
        const target = entry.target;
        const progressValue = parseInt(target.getAttribute('aria-valuenow'));
        let currentProgress = 0;
        const progressInterval = setInterval(function () {
            target.querySelector('.progress-bar').style.width = currentProgress + '%';
            currentProgress++;
            if (currentProgress > progressValue) clearInterval(progressInterval);
        }, 20); // Adjust the interval for smoother progress animation
    }

    const progressObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startProgress(entry);
                progressObserver.unobserve(entry.target);
            }
        });
    });

    document.querySelectorAll('.progress').forEach(progress => {
        progressObserver.observe(progress);
    });
});

let closeBtn = document.getElementById("close");
let show = document.getElementById("show");
let port1 = document.getElementById("port1");
let port2 = document.getElementById("port2");
let port3 = document.getElementById("port3");
let port4 = document.getElementById("port4");
let port5 = document.getElementById("port5");
let port6 = document.getElementById("port6");
let port7 = document.getElementById("port7");
let port8 = document.getElementById("port8");
let port9 = document.getElementById("port9");
let port10 = document.getElementById("port10");
let port11 = document.getElementById("port11");
let port12 = document.getElementById("port12");
let port13 = document.getElementById("port13");
let port14 = document.getElementById("port14");
let port15 = document.getElementById("port15");
let port16 = document.getElementById("port16");
let port17 = document.getElementById("port17");
let port18 = document.getElementById("port18");


closeBtn.addEventListener("click", function() {
    show.classList.add("none");
  });

  port1.addEventListener("click", function() {
    show.classList.remove("none");
  });

  port2.addEventListener("click", function() {
    show.classList.remove("none");
  });

  port3.addEventListener("click", function() {
    show.classList.remove("none");
  });

  port4.addEventListener("click", function() {
    show.classList.remove("none");
  });

  port5.addEventListener("click", function() {
    show.classList.remove("none");
  });

  port6.addEventListener("click", function() {
    show.classList.remove("none");
  });

  port7.addEventListener("click", function() {
    show.classList.remove("none");
  });

  port8.addEventListener("click", function() {
    show.classList.remove("none");
  });

  port9.addEventListener("click", function() {
    show.classList.remove("none");
  });
  
  port10.addEventListener("click", function() {
    show.classList.remove("none");
  });

  port11.addEventListener("click", function() {
    show.classList.remove("none");
  });

  port12.addEventListener("click", function() {
    show.classList.remove("none");
  });

  port13.addEventListener("click", function() {
    show.classList.remove("none");
  });

  port14.addEventListener("click", function() {
    show.classList.remove("none");
  });

  port15.addEventListener("click", function() {
    show.classList.remove("none");
  });

  port16.addEventListener("click", function() {
    show.classList.remove("none");
  });
  
  port17.addEventListener("click", function() {
    show.classList.remove("none");
  });
  
  port18.addEventListener("click", function() {
    show.classList.remove("none");
  });

let moreBtn = document.getElementById("more");
let moreSec = document.getElementById("moreSec");

moreBtn.onclick = function(){
    moreSec.classList.toggle ("het");
    if (more.innerHTML === "See More") {
        more.innerHTML = "See Less";
    } else {
        more.innerHTML = "See More";
    }
}

let color0 = document.getElementById("color0");
let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let color3 = document.getElementById("color3");
let body = document.getElementsByTagName("body")[0];

color0.onclick = function() {
  body.classList.add("color0");
  body.classList.remove("color1");
  body.classList.remove("color2");
  body.classList.remove("color3");
  localStorage.setItem("color", "color0");
};

color1.onclick = function() {
  body.classList.add("color1");
  body.classList.remove("color0");
  body.classList.remove("color2");
  body.classList.remove("color3");
  localStorage.setItem("color", "color1");
};

color2.onclick = function() {
  body.classList.add("color2");
  body.classList.remove("color0");
  body.classList.remove("color1");
  body.classList.remove("color3");
  localStorage.setItem("color", "color2");
};

color3.onclick = function() {
  body.classList.add("color3");
  body.classList.remove("color0");
  body.classList.remove("color1");
  body.classList.remove("color2");
  localStorage.setItem("color", "color3");
};



let load = document.getElementById("load");

addEventListener("load", (event) => {
  let savedColor = localStorage.getItem("color");
  if (savedColor) {
    body.classList.add(savedColor);
  }
  if (load) {
    load.classList.add("anim"); 
    body.classList.add("anim"); 
    // body.style.overflow = "hidden";
}
});

let setting = document.getElementById("setting");
let openColor = document.getElementById("openColor");

openColor.onclick = function(){
  setting.classList.toggle("open");
  openColor.classList.toggle("open");
}

var span = document.getElementById("span");
var span2 = document.getElementById("span2");

span.onclick = function(){
  span2.classList.toggle("open");
}
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar',
  offset: 74,
})
