<script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.19.0/matter.min.js"></script>
<script>
function initSimulation() {
  var Engine = Matter.Engine,
    Render = Matter.Render,
    Events = Matter.Events,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    World = Matter.World,
    Bodies = Matter.Bodies;

  // create an engine
  var engine = Engine.create(),
    world = engine.world;

// Adjust gravity here
world.gravity.y = 0.2; // Change this value to adjust the gravity strength

  // Get the container element and its dimensions
  var containerElement = document.querySelector(".tag-canvas");
  var containerWidth = containerElement.clientWidth + 2;
  var containerHeight = containerElement.clientHeight + 2;

  // create a renderer
  var render = Render.create({
    element: containerElement,
    engine: engine,
    options: {
      width: containerWidth,
      height: containerHeight,
      pixelRatio: 2,
      background: "transparent",
      border: "none",
      wireframes: false
    }
  });

  // create bounds
  var ground = Bodies.rectangle(
    containerWidth / 2 + 160,
    containerHeight + 80,
    containerWidth + 320,
    160,
    { render: { fillStyle: "#000000" }, isStatic: true }
  );
  var wallLeft = Bodies.rectangle(
    -80,
    containerHeight / 2,
    160,
    containerHeight,
    { isStatic: true }
  );
  var wallRight = Bodies.rectangle(
    containerWidth + 80,
    containerHeight / 2,
    160,
    1200,
    { isStatic: true }
  );
  var roof = Bodies.rectangle(
    containerWidth / 2 + 160,
    -80,
    containerWidth + 320,
    160,
    { isStatic: true }
  );

  // object colors & variables
  var tagVideos = "#EDDC8C";
  var videos = "#B3E8F3";
  var abouts = "#4D4D4D";

  var border = 1;
  var radius = 20;

// create objects

// tagVideo & design
var tagOpenAccredit = Bodies.rectangle(containerWidth / 2 + 150, 500, 187, 43, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/602a71db55b62d3a742d5bf2/65347a006047abfdf80dae80_Asset%2036.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
var tagOpenAdvise = Bodies.rectangle(containerWidth / 2+ 122, 479, 187, 43, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/602a71db55b62d3a742d5bf2/652e88f5591ff8063423a70f_OpenAdvise.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
var tagOpenAssess = Bodies.rectangle(containerWidth / 2+ 126, 479, 179, 43, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/602a71db55b62d3a742d5bf2/652e88f42454e615db021d80_OpenAssess.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
var tagOpenBin = Bodies.rectangle(containerWidth / 2+ 120, 479, 161, 43, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/602a71db55b62d3a742d5bf2/652e88f45aca0e6ba5b08327_OpenBin.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
// video
var tagOpenCCT = Bodies.rectangle(containerWidth / 2+ 121, 479, 158, 43, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/602a71db55b62d3a742d5bf2/652e88f494c2ce62cae30b47_OpenCCT.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
var tagOpenCommons = Bodies.rectangle(containerWidth / 2 + 148, 479, 205, 43, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/602a71db55b62d3a742d5bf2/652e88f496288da051c37124_OpenCommons.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
var tagOpenComposer = Bodies.rectangle(containerWidth / 2 + 144, 479, 212, 43, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/602a71db55b62d3a742d5bf2/652e88f52bc517d18a0e1b45_OpenComposer.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
var tagOpenCurate = Bodies.rectangle(containerWidth / 2 + 154, 479, 173, 43, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/602a71db55b62d3a742d5bf2/652e88f4f021488c4632b6d3_OpenCurate.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
//misc
var tagOpenEmbedding = Bodies.rectangle(containerWidth / 2 + 158, 470, 216, 43, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/602a71db55b62d3a742d5bf2/652e88f521404645b3dc9144_OpenEmbedding.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
var tagOpenExpert = Bodies.rectangle(containerWidth / 2 + 159, 469, 180, 43, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/602a71db55b62d3a742d5bf2/652e88f55771d18223834c33_OpenExpert.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
var tagOpenFora = Bodies.rectangle(containerWidth / 2 + 141, 469, 162, 43, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/602a71db55b62d3a742d5bf2/652e88f5b1e9e898450ecade_OpenFora.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
var tagOpenGrantor = Bodies.rectangle(containerWidth / 2 + 128, 469, 195, 43, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/602a71db55b62d3a742d5bf2/652e88f5172b7751d1f4c880_OpenGrantor.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
var tagOpenIBC = Bodies.rectangle(containerWidth / 2 + 123, 469, 154, 43, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
        "https://uploads-ssl.webflow.com/602a71db55b62d3a742d5bf2/652e88f57923bd13ba293cb5_OpenIBC.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
var tagOpenIDO = Bodies.rectangle(containerWidth / 2 + 93, 470, 157, 43, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
            "https://uploads-ssl.webflow.com/602a71db55b62d3a742d5bf2/652e88f57bbb69aff2a777ff_OpenIDO.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
  var tagOpenInstruct = Bodies.rectangle(containerWidth / 2 + 103, 469, 194, 43, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture:
          "https://uploads-ssl.webflow.com/602a71db55b62d3a742d5bf2/652e88f6591ff8063423a7b4_OpenInstruct.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
var tagOpenIPO = Bodies.rectangle(containerWidth / 2 + 78, 470, 143, 43, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture: "https://uploads-ssl.webflow.com/602a71db55b62d3a742d5bf2/652e88f62454e615db0221c8_OpenIPO.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
var tagOpenLead = Bodies.rectangle(containerWidth / 2 + 93, 470, 157, 43, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture: "https://uploads-ssl.webflow.com/602a71db55b62d3a742d5bf2/652e88f694c2ce62cae30eef_OpenLead.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
var tagOpenMO = Bodies.rectangle(containerWidth / 2 + 78, 470, 144, 43, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture: "https://uploads-ssl.webflow.com/602a71db55b62d3a742d5bf2/652e88f647c5c7558f12482c_OpenMO.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
var tagOpenPix = Bodies.rectangle(containerWidth / 2 + 78, 470, 143, 43, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture: "https://uploads-ssl.webflow.com/602a71db55b62d3a742d5bf2/652e88f66bb642c24bd9c454_OpenPix.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
var tagOpenRMS = Bodies.rectangle(containerWidth / 2 + 81, 470, 147, 43, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture: "https://uploads-ssl.webflow.com/602a71db55b62d3a742d5bf2/652e88f6e1c4b08d24289cf9_OpenRMS.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
var tagOpenStaking = Bodies.rectangle(containerWidth / 2 + 149, 470, 204, 43, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture: "https://uploads-ssl.webflow.com/602a71db55b62d3a742d5bf2/652e88f726888654e7aaf86a_OpenStaking.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
var tagOpenStanding = Bodies.rectangle(containerWidth / 2 + 149, 470, 204, 43, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture: "https://uploads-ssl.webflow.com/602a71db55b62d3a742d5bf2/652e88f601915f3f2382e2e3_OpenStanding.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
var tagOpenSTO = Bodies.rectangle(containerWidth / 2 + 85, 470, 150, 43, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture: "https://uploads-ssl.webflow.com/602a71db55b62d3a742d5bf2/652e88f677e85d8f2f36948e_OpenSTO.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
var tagOpenTokenize = Bodies.rectangle(containerWidth / 2 + 142, 470, 198, 43, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture: "https://uploads-ssl.webflow.com/602a71db55b62d3a742d5bf2/652e88f66bb642c24bd9c761_OpenTokenize.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
var tagOpenTransform = Bodies.rectangle(containerWidth / 2 + 141, 470, 195, 43, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture: "https://uploads-ssl.webflow.com/602a71db55b62d3a742d5bf2/652e88f656127c7a44debf8f_OpenTransform.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
var tagOpenTrustee = Bodies.rectangle(containerWidth / 2 + 138, 470, 190, 43, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture: "https://uploads-ssl.webflow.com/602a71db55b62d3a742d5bf2/652e88f721404645b3dc9713_OpenTrustee.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });
var tagOpenValidate = Bodies.rectangle(containerWidth / 2 + 138, 470, 190, 43, {
    chamfer: { radius: radius },
    render: {
      sprite: {
        texture: "https://uploads-ssl.webflow.com/602a71db55b62d3a742d5bf2/652e88f656127c7a44debf92_OpenValidate.svg",
        xScale: 1,
        yScale: 1
      }
    }
  });

  // add all of the bodies to the world
  World.add(engine.world, [
    ground,
    wallLeft,
    wallRight,
    roof,
    tagOpenAccredit,
    tagOpenAdvise,
    tagOpenAssess,
    tagOpenBin,
    tagOpenCCT,
    tagOpenCommons,
    tagOpenComposer,
    tagOpenCurate,
    tagOpenEmbedding,
    tagOpenExpert,
    tagOpenFora,
    tagOpenGrantor,
    tagOpenIBC,
    tagOpenIDO,
    tagOpenInstruct,
    tagOpenIPO,
    tagOpenLead,
    tagOpenMO,
    tagOpenPix,
    tagOpenRMS,
    tagOpenStaking,
    tagOpenStanding,
    tagOpenSTO,
    tagOpenTokenize,
    tagOpenTransform,
    tagOpenTrustee,
    tagOpenValidate
  ]);

  // add mouse control
  var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });

  World.add(world, mouseConstraint);

  // keep the mouse in sync with rendering
  render.mouse = mouse;

  // Allow page scrolling in matter.js window
  mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
  mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

  // Detect clicks vs. drags
  let click = false;

  document.addEventListener("mousedown", () => (click = true));
  document.addEventListener("mousemove", () => (click = false));
  document.addEventListener("mouseup", () =>
    console.log(click ? "click" : "drag")
  );

  // Create a On-Mouseup Event-Handler
  Events.on(mouseConstraint, "mouseup", function (event) {
    var mouseConstraint = event.source;
    var bodies = engine.world.bodies;
    if (!mouseConstraint.bodyB) {
      for (i = 0; i < bodies.length; i++) {
        var body = bodies[i];
        // Check if clicked or dragged
        if (click === true) {
          if (
            Matter.Bounds.contains(body.bounds, mouseConstraint.mouse.position)
          ) {
            var bodyUrl = body.url;
            console.log("Body.Url >> " + bodyUrl);
            // Hyperlinking feature
            if (bodyUrl != undefined) {
              //window.location.href = bodyUrl;
              window.open(bodyUrl, "_blank");
              console.log("Hyperlink was opened");
            }
            break;
          }
        }
      }
    }
  });

  // run the engine
  Engine.run(engine);

  // run the renderer
  Render.run(render);
}

// Get the container element
var containerElement = document.querySelector(".tag-canvas");

// Create an intersection observer
var observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Initialize the simulation when the element is visible
      initSimulation();

      // Disconnect the observer after triggering the tagSocialstrategie
      observer.disconnect();
    }
  });
}, {});

// Observe the container element
observer.observe(containerElement);

</script>