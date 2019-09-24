// Blotter JS ///////////////////////////////////////////////////////////////////////
$(document).ready(function () {
  const blotterContainer = document.querySelector("#blotterTextContainer");
  const text = new Blotter.Text("JENNIFER ANISTON", {
    family: "Averta",
    size: window.innerWidth / 12.8,
    fill: "#ffffff",
    paddingLeft: window.innerWidth / 15.36,
    paddingRight: window.innerWidth / 15.36,
    paddingBottom: window.innerWidth / 15.36,
    paddingTop: window.innerWidth / 15.36
  });

  const material = new Blotter.LiquidDistortMaterial();
  material.uniforms.uSpeed.value = 0.1;
  material.uniforms.uVolatility.value = 0.04;
  material.uniforms.uSeed.value = 0.1;

  const blotter = new Blotter(material, {
    texts: text
  });

  const scope = blotter.forText(text);

  scope.appendTo(blotterContainer);

  // $("body").mousemove(function(e) {
  //   const formula = (e.pageX * e.pageY) / 200000 / 20;
  //   //const number = formula.toFixed(1);
  //   material.uniforms.uVolatility.value = formula;
  //   material.uniforms.uSeed.value = formula;
  // });
});