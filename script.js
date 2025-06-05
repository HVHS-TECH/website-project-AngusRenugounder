const typography_ids = ['bottomOfT_Typography', 'topOfT_Typography', 'Y_typography','bottomOfP_Typography', 'O_Typography', 'G_Typography','R_Typography', 'A_Typography', 'bottomOfP2_Typography', 'topOfP2_Typography', 'H_Typography', 'Y2_Typography', 'underline_Typography'];
const circle_ids = ['bottomOfT_Typography', 'topOfT_Typography', 'Y_typography','bottomOfP_Typography', 'O_Typography', 'G_Typography','R_Typography', 'A_Typography', 'bottomOfP2_Typography', 'topOfP2_Typography', 'H_Typography', 'Y2_Typography', 'underline_Typography'];

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
