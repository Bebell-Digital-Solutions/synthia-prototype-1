(function () {
  try {
    if (CSS && CSS.registerProperty) {
      CSS.registerProperty({
        name: '--a',
        syntax: '<angle>',
        inherits: true,
        initialValue: '0deg'
      });
      CSS.registerProperty({
        name: '--l',
        syntax: '<number>',
        inherits: true,
        initialValue: '0'
      });
      CSS.registerProperty({
        name: '--o',
        syntax: '<number>',
        inherits: false,
        initialValue: '1'
      });
    }
  } catch (e) {
    console.log('CSS Houdini not supported');
  }

  const circles = document.querySelectorAll('.c');
  const count = circles.length;
  document.documentElement.style.setProperty('--count', count);
  document.documentElement.style.setProperty('--radius', '6vmin');
})();
