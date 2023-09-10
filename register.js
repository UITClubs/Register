

$(window).on("load",function() {
  $(".loader").fadeOut("4000")
  /*if (window.innerWidth <= 1200) {
    // For example, if the screen width is less than or equal to 768px
    // Trigger some specific action for smaller screens
    document.querySelector(".wholeWrapper").style.visibility = "hidden";
    document.querySelector("#forTwo").style.visibility = "hidden";
    console.log("Screen width is smaller or equal to 768px");
    document.querySelector(".qq").style.visibility = "visible";
    document.querySelector(".qq").style.display = "block";
  } else {
    // For larger screens
    console.log("Screen width is larger than 768px");
    document.querySelector(".wholeWrapper").style.visibility = "visible";
    document.querySelector("#forTwo").style.visibility = "visible";
    document.querySelector(".qq").style.visibility = "hidden";
    document.querySelector(".qq").style.display = "none";
    
  }*/});

$(document).ready(function() {

  document.querySelector(".loader").style.position = "absolute";

    const firstIn = document.getElementById("name");
    const secondIn = document.getElementById("ids");
    const lastIn = document.querySelector("textarea");
    const radioOne = document.getElementById("one");
    const radioTwo = document.getElementById("two");
    const mainBut = document.getElementById("mail");
    const idtext = document.querySelector(".dip");
    const measurer = document.querySelector(".idStrength")
    var perfect = 0;
    const logos = document.querySelectorAll('.circle img');
    const images = ["./photoss/art.jpg","./photoss/badminton.jpg","./photoss/football.jpg","./photoss/dance.jpg","./photoss/chess.png","./photoss/table_tennis.webp","./photoss/swimming.jpg","./photoss/basketball.jpg"];
    const heading = ["Art club","Badminton club","Football club","Music&Dance club","Chess club","Table-tennis club","Swimming club","Basketball club"];
    const links = ["./photoss/The Ultimate Gift for Your Soulmate_ Custom Sketches from SoulMate Sketch.jfif","https://i.pinimg.com/236x/ae/5c/33/ae5c33441ef2a2b4ad4586604deb6628.jpg","./photoss/Messi and Ronaldo Football iPhone Wallpaper _ Ronaldo football, Messi and ronaldo, Cristiano ronaldo junior.jfif","./photoss/For the vinyl curious_ Pioneer PL-30-K turntable.jfif","./photoss/d063397a-aa66-444c-aa0f-15c983fa6718.jfif","https://i.pinimg.com/236x/a2/89/cf/a289cf17d12726335b9a3badf9c288e5.jpg","https://i.pinimg.com/564x/88/2a/a4/882aa40a27b566089d6fc8f0d8f2e0ac.jpg","./photoss/9bfb1ed2-3d3d-4db9-97aa-6bbe0930f446.jfif"];
    fonts = ["fa-solid fa-palette","fa-solid fa-face-grin-beam-sweat","fa-solid fa-futbol","fa-solid fa-music","fa-solid fa-chess-bishop","fa-solid fa-table-tennis-paddle-ball","fa-solid fa-person-swimming","fa-solid fa-basketball"]

    logos.forEach(a => a.addEventListener("mouseover",function(e) {
      console.log("hover")
      for(var i = 0; i < logos.length; i++) {
        logos[i].style.animationPlayState = 'paused';
      }
      
      document.querySelector(".circle").style.animationPlayState = 'paused';
      document.querySelector(".circle").style.animationPlayState = 'paused';
    }))

    

    

   const focusr = document.querySelector(".focus");
    console.log(focusr.src)
    logos.forEach(a => a.addEventListener("click",function(e) {
      var ja;
      var appendes;
      var store;


      
      for(var i = 0; i < logos.length; i++) {
        document.querySelector(".circle").animate(
          [{ width: "200px",height: "200px"}, {  width: "100px",height: "100px" }, {width: "200px",height: "200px"}],
          {
            duration: 2000,
          },
        );
        for(var j = 0; j < logos.length; j++) {
          if(j != 0) {
            logos[j].animate(
              [{opacity: 1},{ opacity: 0 }, { opacity: 1 }],
              {
                duration: 4000,
              },
            );
          
          }
          
         
        }
        logos[0].animate(
          [{opacity: 1},{ opacity: 0 }, { opacity: 1 }],
          {
            duration: 4000,
          },
        );
        document.querySelector(".reduce").animate(
          [{ opacity: 0,width: "40vw"},{ opacity: 0,width: 0}, { opacity: 1,width: "40vw" }],
          {
            duration: 2000,
          },
        );
        document.querySelector(".info").animate(
          [{ opacity: 1,width: "70vw" },{ opacity: 0,width: "100vw"}, { opacity: 1,width: "70vw" }],
          {
            duration: 2000,
          },
        );

        
        if(e.target == logos[i]) {
          ja = i;
          //document.querySelector(".focus").src = e.target.src;
          var haee = document.querySelector(".focus").src;
          document.querySelector(".focus").src = logos[i].src;
          var cool = links[0];
          var god = heading[0];
          var last = fonts[0];
          links[0] = links[i];
          heading[0] = heading[i];
          fonts[0] = fonts[i];
          links[i] = cool;
          heading[i] = god;
          fonts[i] = last;
          e.target.src = haee;
          document.querySelector(".reduce").src = links[0];
          
        
            // Destroy Typed instance during cleanup to stop animation
            
          document.querySelector(".modified").innerText = heading[0];
          document.querySelectorAll(".container i").forEach(a => a.setAttribute("class",fonts[0]))

           
          appendes = document.querySelector(".focus").src;
          
          

         
        } else {
          logos[i].classList.remove("wee")
        }

        
      }

      document.querySelector(".circle").style.animationPlayState = 'paused';
      document.querySelector(".circle").style.animationPlayState = 'paused';
    }))

    

    document.querySelector(".circle").addEventListener("mouseout",function(e) {
      for(var i = 0; i < logos.length; i++) {
        logos[i].style.animationPlayState = 'running';
      }
      
      document.querySelector(".circle").style.animationPlayState = 'running';
      document.querySelector(".circle").style.animationPlayState = 'running';
    })
    const inputHandler = function(e) {
        if(e.target.value.length >= 1) {
            document.querySelector("#idWow").style.visibility = "hidden";
            document.querySelector(".replacement").style.visibility = "visible";
            measurer.style.visibility = "visible";
        }
        if(e.target.value.length == 0) {
            document.querySelector("#idWow").style.visibility = "visible";
            measurer.style.visibility = "hidden";
            document.querySelector(".replacement").style.visibility = "hidden";
        }
        if(e.target.value.length <= 2) {
           idtext.innerText = "Too short";
           measurer.style.backgroundColor = "red";
           
        } else if(e.target.value.length > 2 && e.target.value.length <= 7) {
            idtext.innerText = "Keep going";
            measurer.style.backgroundColor = "black";
           
        } else {
            idtext.innerText = "Perfect";
            idtext.style.color = "green";
            measurer.style.visibility = "hidden";
        }

        
        
      }
      
      
      
        anime({
            targets: '.idStrength',
            width: '100px', // -> from '28px' to '100%',
            easing: 'easeInOutQuad',
            direction: 'alternate',
            loop: true
          });
       

      firstIn.addEventListener('focus', () => {
        firstIn.style.border = "2px solid #2ecc71"
        firstIn.style.borderRadius = "5px";
        document.querySelector("#oo").style.opacity = "0";
        anime({
            
            targets: '#nameWow',
            left: [
              { value: 0, duration: 1000, delay: 500 }
            ],
            easing: 'easeOutElastic(1, .8)',
            loop: false
          }); // Add a CSS class or apply any styling you want
      });

      firstIn.addEventListener('blur', () => {
        firstIn.style.borderLeft = "none"
        firstIn.style.borderRight = "none";
        firstIn.style.borderTop = "none";
        firstIn.style.borderRadius = "0";
        document.querySelector("#oo").style.opacity = "1";
        for(var i = 0; i< 3; i++) {
            document.querySelectorAll(".container i")[i].setAttribute("class",fonts[0])
            document.querySelectorAll(".container i")[i].style.color = "#2ecc71";
        }
        anime({
            
            targets: '#nameWow',
            left: [
              { value: -1000, duration: 1000, delay: 500 }
            ],
            easing: 'easeOutElastic(1, .8)',
            loop: false
          }); // Add a CSS class or apply any styling you want
      });

      secondIn.addEventListener('focus', () => {
        secondIn.style.border = "2px solid #2ecc71"
        secondIn.style.borderRadius = "5px";
        document.querySelector("#tt").style.opacity = "0";
        anime({
            
            targets: '#idWow',
            left: [
              { value: 0, duration: 1000, delay: 500 }
            ],
            easing: 'easeOutElastic(1, .8)',
            loop: false
          }); // Add a CSS class or apply any styling you want
      });

      secondIn.addEventListener('blur', () => {
        secondIn.style.borderLeft = "none"
        secondIn.style.borderRight = "none";
        secondIn.style.borderTop = "none";
        secondIn.style.borderRadius = "0";
        document.querySelector(".replacement").style.visibility = "hidden";
        document.querySelector("#tt").style.opacity = "1";
        measurer.style.visibility = "hidden";
        for(var i = 0; i< 3; i++) {
            document.querySelectorAll(".container i")[i].setAttribute("class",fonts[0]);
            document.querySelectorAll(".container i")[i].style.color = "#2ecc71";

        }
        anime({
            
            targets: '#idWow',
            left: [
              { value: -1000, duration: 1000, delay: 500 }
            ],
            easing: 'easeOutElastic(1, .8)',
            loop: false
          }); // Add a CSS class or apply any styling you want
      });

      lastIn.addEventListener('focus', () => {
        lastIn.style.border = "2px solid #2ecc71"
        lastIn.style.borderRadius = "5px";
        document.querySelector("#ff").style.opacity = "0";
        anime({
            
            targets: '#desWow',
            left: [
              { value: 0, duration: 1000, delay: 500 }
            ],
            easing: 'easeOutElastic(1, .8)',
            loop: false
          }); // Add a CSS class or apply any styling you want
      });

      lastIn.addEventListener('blur', () => {
        lastIn.style.borderLeft = "none"
        lastIn.style.borderRight = "none";
        lastIn.style.borderTop = "none";
        lastIn.style.borderRadius = "0";
        document.querySelector("#ff").style.opacity = "1";
        for(var i = 0; i< 3; i++) {
            document.querySelectorAll(".container i")[i].setAttribute("class",fonts[0]);
            document.querySelectorAll(".container i")[i].style.color = "#2ecc71";
        }
        anime({
            
            targets: '#desWow',
            left: [
              { value: -1000, duration: 1000, delay: 500 }
            ],
            easing: 'easeOutElastic(1, .8)',
            loop: false
          }); // Add a CSS class or apply any styling you want
      });
      


    secondIn.addEventListener('input', inputHandler);
    secondIn.addEventListener('propertychange', inputHandler); 
    firstIn.addEventListener('input', inputHandler1);
    firstIn.addEventListener('propertychange', inputHandler1); 
    
    function inputHandler1(e) {
        console.log(e)
        
    }

    function here(e) {
      (radioOne.checked)?document.querySelector("#forOne").style.visibility = "visible" : document.querySelector("#forTwo").style.visibility = "visible";

      (radioOne.checked)?document.querySelector("#forTwo").style.visibility = "hidden" : document.querySelector("#forOne").style.visibility = "hidden";
    }
    radioOne.addEventListener("click",here);
    radioTwo.addEventListener("click",here);
    
    
    const inputField = document.querySelectorAll(".input-field");
    const igroup = document.querySelectorAll(".container i")

    mainBut.addEventListener("click",function() {
        if(firstIn.value != "" && secondIn.value != "" && lastIn.value != "") {
            var regex = /^(CST)-\d{4}/gi;
            if(regex.test(secondIn.value)) {
                
                //receiver mail
                const mailAdress = "thikemin01@gmail.com"

                //cc mail
                const ccRecipients =  "luunapp@gmail.com"
                const subject = encodeURIComponent("Request to join to " + "Art club")

                //contents template you wanna receive
                //firstIn.value,lastIn.value are just the value inputed by text boxes.
                const body = encodeURIComponent("Hi I am " + firstIn.value + ".Glad to meet you. My Id is " + secondIn.value + ". I wanna join  because " + lastIn.value + ". I am " + ((radioOne.checked)?"male":"female") + ". I wanna be a part of " + heading[0])
                const  link= `mailto:${mailAdress}?cc=${ccRecipients}&subject=${subject}&body=${body}`
                window.location.href = link;
                for(var i = 0; i< 3; i++) {
                    igroup[i].setAttribute("class","fa-solid fa-check")
                }
                document.querySelector(".centering").style.opacity = "1";
                document.querySelector(".centering").style.display = "block";
                document.querySelector(".wholeWrapper").style.opacity = "0.3";
                document.querySelector(".wholeWrapper").style.filter = "blur(1.3rem)"
            
                
            } else {
                secondIn.focus();
                secondIn.value = "";
                secondIn.setAttribute("placeholder","Invalid input...");
                    secondIn.style.borderColor = "red";
                    igroup[1].setAttribute("class","fa-regular fa-circle-xmark");
                    igroup[1].style.borderColor = "red";
                    document.querySelector("#idWow").style.visibility = "visible";
            }
            
        } else {
            for(var i = 0; i < 3; i++) {
                if(inputField[i].value == "") {
                    inputField[i].setAttribute("placeholder","Please fill .....");
                    inputField[i].style.borderColor = "red";
                    igroup[i].setAttribute("class","fa-regular fa-circle-xmark");
                    igroup[i].style.color = "red";
                } else {
                    inputField[i].style.borderColor = "#2ecc71";
                    igroup[i].setAttribute("class",fonts[0]);
                    igroup[i].style.color = "#2ecc71";
                }
            }
        }
        
})

/*window.addEventListener('resize', function() {
  // Code to run when the screen width is changed
  // You can check the new width using window.innerWidth
  var screenWidth = window.innerWidth;
  
  // You can perform actions or call functions based on the screen width
  if (screenWidth <= 1200) {
    // For example, if the screen width is less than or equal to 768px
    // Trigger some specific action for smaller screens
    document.querySelector(".wholeWrapper").style.visibility = "hidden";
    document.querySelector("#forTwo").style.visibility = "hidden";
    console.log("Screen width is smaller or equal to 768px");
    document.querySelector(".qq").style.visibility = "visible";
    document.querySelector(".qq").style.display = "block";
  } else {
    // For larger screens
    console.log("Screen width is larger than 768px");
    document.querySelector(".wholeWrapper").style.visibility = "visible";
    document.querySelector("#forTwo").style.visibility = "visible";
    document.querySelector(".qq").style.visibility = "hidden";
    document.querySelector(".qq").style.display = "none";
    
  }
});*/

    
        // Use a library like fetch() or XMLHttpRequest to send the email
       
  
  
  });
  
  
  
  
  
