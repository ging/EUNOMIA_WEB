import { useRef, useEffect } from "react";
import p5 from "p5";

const P5Banner = () => {
  const sketchRef = useRef(null);
  if (typeof window !== "undefined") {
    useEffect(() => {
      const sketch = (p) => {
        let cols, rows;
        const cellSize = 64; // Tamaño máximo del cuadrado
        let x, y;
        let positionTileX, positionTileY;
        let differenceTileMouseX, differenceTileMouseY;
        let sizeRect;
        let transparency;
        let rotation;
        let reponsiveWindowHeight = p.windowHeight;
        let windowWidthAdapted = p.windowWidth;
        let minSizeInteraction = 45;
        let asterisk;

        // Arreglo para almacenar los asteriscos dibujados
        let asterisks = [];

        p.setup = () => {
          p.createCanvas(windowWidthAdapted, reponsiveWindowHeight);
          cols = windowWidthAdapted / cellSize;
          rows = reponsiveWindowHeight / cellSize;
          p.noStroke();
          asterisk = p.loadImage("/assets/img/asterisk.png"); // Ruta a la imagen en el directorio public
        };

        p.draw = () => {
          p.background(46, 54, 89);
          cols = p.windowWidth / cellSize;
          rows = reponsiveWindowHeight / cellSize;

          // Dibujar los cuadrados y detectar interacción del mouse
          for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
              positionTileX = cellSize * i;
              positionTileY = cellSize * j;
              differenceTileMouseX = p.abs(positionTileX - p.mouseX);
              differenceTileMouseY = p.abs(positionTileY - p.mouseY);

              x = p.map(differenceTileMouseX, 0, 1200, 30, -10);
              y = p.map(differenceTileMouseY, 0, 1200, 30, -10);
              sizeRect = x + y;

              p.push();
              p.translate(positionTileX, positionTileY);

              if (sizeRect >= minSizeInteraction) {
                rotation = p.map(sizeRect, minSizeInteraction, 60, 0, p.PI / 4);
                p.rotate(rotation);
              } else {
                p.rotate(0);
              }

              p.rectMode(p.CENTER);
              transparency = p.map(sizeRect, 0, 60, -200, 255);
              p.stroke(94, 106, 160, transparency);
              p.noFill();
              p.strokeWeight(8);
              p.rect(0, 0, 45, 45, 10);

              // Agregar asterisco a la lista cuando el mouse está sobre el cuadrado
              if (sizeRect >= 59) {
                asterisks.push({
                  x: positionTileX,
                  y: positionTileY,
                  opacity: 255, // Opacidad inicial
                });
              }

              p.pop();
            }
          }

          // Dibujar y actualizar los asteriscos en el arreglo
          for (let i = asterisks.length - 1; i >= 0; i--) {
            let ast = asterisks[i];

            p.push();
            p.translate(ast.x, ast.y);
            p.imageMode(p.CENTER);
            p.tint(255, ast.opacity); // Aplicar opacidad
            p.image(asterisk, 0, 0, 32, 32);
            p.pop();

            // Reducir la opacidad del asterisco
            ast.opacity -= 18;

            // Eliminar el asterisco si se desvanece completamente
            if (ast.opacity <= 0) {
              asterisks.splice(i, 1);
            }
          }

          p.windowResized = () => {
            p.resizeCanvas(p.windowWidth, reponsiveWindowHeight); // Resize the canvas when the window is resized
          };
        };
      };

      // Crear una nueva instancia de p5 con el sketch
      const p5Instance = new p5(sketch, sketchRef.current);

      // Limpiar el sketch al desmontar el componente
      return () => {
        p5Instance.remove();
      };
    }, []);

    return <div ref={sketchRef} className="absolute z-0 max-h-[100vh]" />;
  }
};

export default P5Banner;
