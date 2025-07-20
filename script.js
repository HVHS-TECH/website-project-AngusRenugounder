const typography_ids = ['bottomOfT_Typography', 'topOfT_Typography', 'Y_typography','bottomOfP_Typography', 'topOfP_Typography', 'O_Typography', 'G_Typography','R_Typography', 'A_Typography', 'bottomOfP2_Typography', 'topOfP2_Typography', 'H_Typography', 'Y2_Typography', 'underline_Typography'];
const circle_ids = ['Typography_Circle', 'Repetition_Circle', 'Colour_And_Contrast_Circle','Size_And_Scale_Circle'];
const line_ids = ['Typography_line', 'Repetition_line', 'Colour_And_Contrast_line', 'Size_And_Scale_line',];

const animationDuration = 0.25;

typography_ids.forEach((id, index) => {
  const path = document.getElementById(id);
  if (path) {
    const length = path.getTotalLength();
    
    // Set stroke dash properties initially
    TweenMax.set(path, { strokeDasharray: length, strokeDashoffset: length });

    // Delay each subsequent path by the duration of previous animation
    TweenMax.to(path, animationDuration, {
      strokeDashoffset: 0,
      delay: index * animationDuration // 0 for first, 3s for second
    });
  }
});

circle_ids.forEach((id) => {
  const path = document.getElementById(id);
  if (path) {
    const length = path.getTotalLength();
    
    // Set stroke dash properties initially
    TweenMax.set(path, { strokeDasharray: length, strokeDashoffset: length });

    TweenMax.to(path, 3, {
      strokeDashoffset: 0,
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
    });
  }
});

TweenMax.to('#Repitition_1', 1.5, {y:61, opacity:0.4});
TweenMax.to('#Repitition_2', 1.5, {opacity: 0.65});
TweenMax.to('#Repitition_3', 1.5, {y:79});

TweenMax.to("#Colour_ColourAndContrast", {
  fill: "#FFFFFF",
  stroke: "#FFFFFF",
  duration: 4,
  ease: "power1.inOut"
});

TweenMax.to("#AndContrast_ColourAndContrast", {
  fill: "#FEC63D",
  stroke: "#FEC63D",
  duration: 4,
  ease: "power1.inOut"
});

TweenMax.to("#Size_SizeAndScale", {
  scale: 1.5,
  duration: 3,
  y: 230,
  x: 37
});

TweenMax.to("#AndScale_SizeAndScale", {
  duration: 3,
  y: 248,
  x: 38,
  fill: "#FEC63D",
  stroke: "#FEC63D"
});