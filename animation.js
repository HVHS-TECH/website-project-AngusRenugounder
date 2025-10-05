const typography_ids = ['bottomOfT_Typography', 'topOfT_Typography', 'Y_typography','bottomOfP_Typography', 'topOfP_Typography', 'O_Typography', 'G_Typography','R_Typography', 'A_Typography', 'bottomOfP2_Typography', 'topOfP2_Typography', 'H_Typography', 'Y2_Typography', 'underline_Typography'];
const typography_page_svg_ids = ['typography_page_svg_bottom_of_T', 'typography_page_svg_top_of_T', 'typography_page_svg_Y','typography_page_svg_first_part_of_P', 'typography_page_svg_second_part_of_P', 'typography_page_svg_O', 'typography_page_svg_G','typography_page_svg_R', 'typography_page_svg_A', 'typography_page_second_P_first_part', 'typography_page_second_P_second_part', 'typography_page_svg_H', 'typography_page_svg_second_Y', 'typography_page_svg_underline'];

const circle_ids = ['Typography_Circle', 'Repetition_Circle', 'Colour_And_Contrast_Circle', 'Size_And_Scale_Circle'];
const line_ids = ['Typography_line', 'Repetition_line', 'Size_And_Scale_line', 'Colour_And_Contrast_line'];

const animationDuration = 0.25;

typography_ids.forEach((id, index) => {
  const path = document.getElementById(id);
  if (path) {
    const length = path.getTotalLength();

    TweenMax.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
      opacity: 0
    });
    
    const tl = new TimelineMax({ delay: 3 + index * animationDuration });

    tl.to(path, 0.1, { opacity: 1 }) // fade in
      .to(path, animationDuration, { strokeDashoffset: 0 }); // draw stroke
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
  stroke: "#FEC63D",
  opacity: 1,
  delay: 3
});

TweenMax.to('#design_box', 1, {x:200, ease: "power3.inOut"});
TweenMax.to('#principles_box', 1, {x:250, ease: "power3.inOut", delay: 0.5});
TweenMax.to('#one_zero_one_box', 2, {x:200, ease: "power3.in"});
TweenMax.to('#one_zero_one_underline_box', 2, {x:150, ease: "power3.inOut", delay: 1});
TweenMax.to('#learn_more', 2, {opacity: 1, delay: 2});
TweenMax.to('#learn_more_text', 2, {opacity: 1, delay: 2});

  gsap.registerPlugin(ScrollTrigger);

  gsap.from("#intro-content", {
    scrollTrigger: {
      trigger: "#intro-content",
      start: "top 90%",
      toggleActions: "play reverse play reverse"
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });

  function typography_page_animations() {
  typography_page_svg_ids.forEach((id, index) => {
  const path = document.getElementById(id);
  if (path) {
    const length = path.getTotalLength();

    TweenMax.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
      opacity: 0
    });
    
    const tl = new TimelineMax({ delay: 1.5 + index * animationDuration });

    tl.to(path, 0.1, { opacity: 1 }) // fade in
      .to(path, animationDuration, { strokeDashoffset: 0 }); // draw stroke
  }
});
    const length = document.querySelector("#typography_page_svg_circle").getTotalLength();
    TweenMax.set("#typography_page_svg_circle", { strokeDasharray: length, strokeDashoffset: length });
    TweenMax.to("#typography_page_svg_circle", 1.5, {
      strokeDashoffset: 0,
    });
    gsap.from("#typography_intro-content", {
    scrollTrigger: {
      trigger: "#typography_intro-content",
      start: "top 90%",
      toggleActions: "play reverse play reverse"
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });

    gsap.from("#typography_examples-header", {
    scrollTrigger: {
      trigger: "#typography_examples-header",
      start: "top 90%",
      toggleActions: "play reverse play reverse"
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });

    gsap.from("#typography_examples-cards", {
    scrollTrigger: {
      trigger: "#typography_examples-cards",
      start: "top 90%",
      toggleActions: "play reverse play reverse"
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });

    gsap.from("#typography-examples-explaination", {
    scrollTrigger: {
      trigger: "#typography-examples-explaination",
      start: "top 90%",
      toggleActions: "play reverse play reverse"
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });

    gsap.from("#typography_dos-header, #typography_donts-header", {
    scrollTrigger: {
      trigger: "#typography_dos-header, #typography_donts-header",
      start: "top 90%",
      toggleActions: "play reverse play reverse"
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });

    gsap.from("#typography_dos-list, typography_donts-list", {
    scrollTrigger: {
      trigger: "#typography_dos-list, typography_donts-list",
      start: "top 90%",
      toggleActions: "play reverse play reverse"
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
    });

  }

function size_and_scale_page_animations() {
    const length = document.querySelector("#Size_and_scale_page_svg_circle").getTotalLength();
    TweenMax.set("#Size_and_scale_page_svg_circle", { strokeDasharray: length, strokeDashoffset: length });
    TweenMax.to("#Size_and_scale_page_svg_circle", 1.5, {
      strokeDashoffset: 0,
    });
    gsap.to("#Size_and_scale_page_svg_size_part", {
      duration: 1,
      opacity: 1,
      delay: 0.9,
      onComplete: () => {
        // Fade in after movement finishes
        gsap.to("#Size_and_scale_page_svg_size_part", {
          duration: 3,
          scale: 1.5,
          x: 18,
          y: 22,
          ease: "power2.out",
        });
      }
    });

TweenMax.to("#Size_and_scale_page_svg_and_scale_part", 1, {
  opacity: 1,
  delay: 0.9,
  onComplete: () => {
    // After fade-in completes, move and change color
    TweenMax.to("#Size_and_scale_page_svg_and_scale_part", 3, {
      y: 40,
      x: 18,
      fill: "#FEC63D",
      stroke: "#FEC63D",
      ease: Power2.easeOut
    });
  }
});

gsap.from("#typography_intro-content", {
    scrollTrigger: {
      trigger: "#typography_intro-content",
      start: "top 90%",
      toggleActions: "play reverse play reverse"
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });

    gsap.from("#typography_examples-header", {
    scrollTrigger: {
      trigger: "#typography_examples-header",
      start: "top 90%",
      toggleActions: "play reverse play reverse"
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });

    gsap.from("#size_and_scale_examples-cards", {
    scrollTrigger: {
      trigger: "#size_and_scale_examples-cards",
      start: "top 90%",
      toggleActions: "play reverse play reverse"
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });

    gsap.from("#size_and_scale_examples-explaination", {
    scrollTrigger: {
      trigger: "#size_and_scale_examples-explaination",
      start: "top 90%",
      toggleActions: "play reverse play reverse"
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });

    gsap.from("#size_and_scale_dos-header, #size_and_scale_donts-header", {
    scrollTrigger: {
      trigger: "#size_and_scale_dos-header, #size_and_scale_donts-header",
      start: "top 90%",
      toggleActions: "play reverse play reverse"
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });

    gsap.from("#size_and_scale_dos-list, #size_and_scale_donts-list", {
    scrollTrigger: {
      trigger: "#size_and_scale_dos-list, #size_and_scale_donts-list",
      start: "top 90%",
      toggleActions: "play reverse play reverse"
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
    });
}