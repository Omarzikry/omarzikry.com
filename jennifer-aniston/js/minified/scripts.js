$(document).ready((function(){var e,r,i,t,n,a=document.querySelector("#header-canvas"),d=new PIXI.Application({width:window.innerWidth,height:window.innerWidth/1.488,antialias:!0,resolution:devicePixelRatio,view:a});d.stage.interactive=!0;var s=new PIXI.Container;function o(r){e=r.data.global.x}function l(){requestAnimationFrame(l),n+=.045*(e-r.x),r.x=n;var t=Math.floor(e-r.x);t<0&&(t=-t);var a=map(t,0,500,0,120);t=map(t,0,500,.1,.6),r.scale.x=t,i.scale.x=a}d.stage.addChild(s),PIXI.loader.add("../assets/img/ripple.png").add("../assets/img/jennifer.jpg").load((function(){e=d.renderer.width/2,r=new PIXI.Sprite(PIXI.loader.resources["../assets/img/ripple.png"].texture),i=new PIXI.filters.DisplacementFilter(r),r.anchor.set(.5),r.x=d.renderer.width/2,r.y=d.renderer.height/2,n=r.x,d.stage.addChild(r),s.filters=[i],i.scale.x=0,i.scale.y=0,(t=new PIXI.Sprite(PIXI.loader.resources["../assets/img/jennifer.jpg"].texture)).width=d.renderer.width/1.25,t.height=d.renderer.height/1.2,s.addChild(t),d.stage.on("mousemove",o).on("touchMove",o),l()})),map=function(e,r,i,t,n){return(e-r)/(i-r)*(n-t)+t}}));