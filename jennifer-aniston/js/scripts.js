$(document).ready(function () {
  const header = document.querySelector("#header-canvas");

  // pixi.js header
  const app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerWidth / 1.488,
    antialias: true,
    resolution: devicePixelRatio,
    view: header
  });
  app.stage.interactive = true;
  let posX, displacmentSprite, displacmentFilter, bg, vx;
  const container = new PIXI.Container();
  app.stage.addChild(container);
  PIXI.loader
    .add("../assets/img/ripple.png")
    .add("../assets/img/jennifer.jpg")
    .load(setup);

  // in the setup function the displacment sprite is created that will create
  // the effect. then will add the displacment sprite to the displacment filter
  // it's then set to move its anchor point to the center of the image and position on screen
  function setup() {
    posX = app.renderer.width / 2;
    displacmentSprite = new PIXI.Sprite(
      PIXI.loader.resources["../assets/img/ripple.png"].texture
    );
    displacmentFilter = new PIXI.filters.DisplacementFilter(displacmentSprite);
    displacmentSprite.anchor.set(0.5);
    displacmentSprite.x = app.renderer.width / 2;
    displacmentSprite.y = app.renderer.height / 2;
    vx = displacmentSprite.x;

    // to finish up the setup function, the displacment filter scale is set and the background positioned
    // notice the scale is 0 for the displacement, that's because, it will set to a height as soon as the mouse moves
    app.stage.addChild(displacmentSprite);
    container.filters = [displacmentFilter];
    displacmentFilter.scale.x = 0;
    displacmentFilter.scale.y = 0;
    bg = new PIXI.Sprite(
      PIXI.loader.resources["../assets/img/jennifer.jpg"].texture
    );
    bg.width = app.renderer.width / 1.25;
    bg.height = app.renderer.height / 1.2;
    container.addChild(bg);
    app.stage.on("mousemove", onPointerMove).on("touchMove", onPointerMove);
    loop();
  }
  // grap the position of the mouse on the x-axis whenever the mouse moves
  function onPointerMove(eventData) {
    posX = eventData.data.global.x;
  }
  // // listen to "scroll" event
  // window.onscroll = function() {
  //   posX = window.scrollY + 200;
  // };
  // create a function that continually updates the screen. A velocity for the x-axis is worked out using the position of the mouse and the ripple.
  function loop() {
    requestAnimationFrame(loop);
    vx += (posX - displacmentSprite.x) * 0.045;
    displacmentSprite.x = vx;
    let disp = Math.floor(posX - displacmentSprite.x);
    if (disp < 0) disp = -disp;
    var fs = map(disp, 0, 500, 0, 120);
    disp = map(disp, 0, 500, 0.1, 0.6);
    displacmentSprite.scale.x = disp;
    displacmentFilter.scale.x = fs;
  }
  // finally the map function is declared that maps value ranges to new values
  map = function (n, start1, stop1, start2, stop2) {
    var newVal = ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
    return newVal;
  };
});