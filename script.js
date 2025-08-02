const typography_ids = ['bottomOfT_Typography', 'topOfT_Typography', 'Y_typography','bottomOfP_Typography', 'topOfP_Typography', 'O_Typography', 'G_Typography','R_Typography', 'A_Typography', 'bottomOfP2_Typography', 'topOfP2_Typography', 'H_Typography', 'Y2_Typography', 'underline_Typography'];

const animationDuration = 0.25;

typography_ids.forEach((id, index) => {
  const path = document.getElementById(id);
  if (path) {
    const length = path.getTotalLength();

<<<<<<< Updated upstream
    // Delay each subsequent path by the dur ation of previous animation
    TweenMax.to(path, animationDuration, {
      strokeDashoffset: 0,
      delay: index * animationDuration // 0 for first, 3s for second
=======
    TweenMax.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
      opacity: 0
>>>>>>> Stashed changes
    });
    
    const tl = new TimelineMax({ delay: 3 + index * animationDuration });

    tl.to(path, 0.1, { opacity: 1 }) // fade in
      .to(path, animationDuration, { strokeDashoffset: 0 }); // draw stroke
  }
});

<<<<<<< Updated upstream
TweenMax.to('#Repitition_1', 1.5, {y:61, opacity:0.4});
TweenMax.to('#Repitition_2', 1.5, {opacity: 0.65});
TweenMax.to('#Repitition_3', 1.5, {y:79});
=======
circle_ids.forEach((id) => {
  const path = document.getElementById(id);
  if (path) {
    const length = path.getTotalLength();
    
    // Set stroke dash properties initially
    TweenMax.set(path, { strokeDasharray: length, strokeDashoffset: length });

    TweenMax.to(path, 3, {
      strokeDashoffset: 0,
      delay: 1.5
    });
  }
});

line_ids.forEach((id) => {
  const path = document.getElementById(id);
  if (path) {
    const length = path.getTotalLength();
    
    // Set stroke dash properties initially
    TweenMax.set(path, { strokeDasharray: length, strokeDashoffset: length });

    TweenMax.to(path, 3, {
      strokeDashoffset: 0,
      delay: 3
    });
  }
});

TweenMax.to('#design_box', 1, {x:200, ease: "power3.inOut"});
TweenMax.to('#principles_box', 1, {x:250, ease: "power3.inOut", delay: 0.5});
TweenMax.to('#one_zero_one_box', 2, {x:200, ease: "power3.in"});
TweenMax.to('#one_zero_one_underline_box', 2, {x:150, ease: "power3.inOut", delay: 1});
TweenMax.to('#learn_more', 2, {opacity: 1, delay: 2});
>>>>>>> Stashed changes

TweenMax.to('#Repitition_1', 1.5, {y:13, opacity: 0.4, delay: 3});
TweenMax.to('#Repitition_2', 1.5, {opacity: 0.65, delay: 3});
TweenMax.to('#Repitition_3', 1.5, {opacity: 1, y:30, delay: 3});


const tl = gsap.timeline({  delay: 3 });

tl.to("#AndContrast_ColourAndContrast", { 
  opacity: 1
})
.to("#AndContrast_ColourAndContrast", {
  fill: "#FEC63D",
  stroke: "#FEC63D",
  duration: 4,
  ease: "power1.inOut",
}, ">") 

.to("#Colour_ColourAndContrast", {
  opacity: 1,
}, "<") 

.to("#Colour_ColourAndContrast", {
  fill: "#FFFFFF",
  stroke: "#FFFFFF",
  duration: 4,
  ease: "power1.inOut",
}, "<")

TweenMax.to("#Size_SizeAndScale", {
  scale: 1.5,
  duration: 3,
  y: 182,
  x: 37,
  opacity: 1,
  delay: 3
});

TweenMax.to("#AndScale_SizeAndScale", {
  duration: 3,
  y: 200,
  x: 38,
  fill: "#FEC63D",
<<<<<<< Updated upstream
  stroke: "#FEC63D"
});
=======
  stroke: "#FEC63D",
  opacity: 1,
  delay: 3
});

TweenMax.to("#Design_HomePage", {
  duration: 3,
  opacity: 1
});
>>>>>>> Stashed changes
