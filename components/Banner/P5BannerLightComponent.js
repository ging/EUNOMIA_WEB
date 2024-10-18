import { useRef, useEffect } from 'react';
import p5 from 'p5';

const P5BannerLight = () => {
  const sketchRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {  // Verifica que window esté disponible
      const sketch = (p) => {
        let cols, rows;
        const cellSize = 60;  // Tamaño máximo del cuadrado
        let x, y;
        let positionTileX, positionTileY;
        let differenceTileMouseX, differenceTileMouseY;
        let sizeRect;
        let transparency;
        let rotation;
        let reponsiveWindowHeight = window.innerHeight;
        let windowWidthAdapted = window.innerWidth;
        let minSizeInteraction = cellSize / 1.5;
        let asterisk;
        let tint;
          // Arreglo para almacenar los asteriscos dibujados
          let asterisks = [];

        p.setup = () => {
          p.createCanvas(windowWidthAdapted, reponsiveWindowHeight);
          cols = windowWidthAdapted / cellSize;
          rows = reponsiveWindowHeight / cellSize;
          p.noStroke();
          asterisk = p.loadImage('/assets/img/asterisk-purple.png'); // Ruta a la imagen en el directorio public
        };

        p.draw = () => {
          p.background(169, 177, 214);
          cols = window.innerWidth / cellSize;
          rows = reponsiveWindowHeight / cellSize;

          for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
              positionTileX = cellSize * i;
              positionTileY = cellSize * j + 30;
              differenceTileMouseX = p.abs(positionTileX - p.mouseX);
              differenceTileMouseY = p.abs(positionTileY - p.mouseY);

              x = p.map(differenceTileMouseX, 0, 1200, cellSize / 2, -10);
              y = p.map(differenceTileMouseY, 0, 1200, cellSize / 2, -10);

              sizeRect = x + y;

              p.push();
              p.translate(positionTileX, positionTileY);

              if (sizeRect >= minSizeInteraction) {
                rotation = p.map(sizeRect, minSizeInteraction, cellSize, 0, p.PI / 4);
                p.rotate(rotation);
              } else {
                p.rotate(0);
              }

              p.rectMode(p.CENTER);
              transparency = p.map(sizeRect, 0, cellSize, -200, 200);
              p.stroke(118, 116, 228, transparency);
              p.noFill();
              p.strokeWeight(cellSize / 7.5);
              p.rect(0, 0, cellSize / 1.5, cellSize / 1.5, cellSize / 7.5);

              // if (sizeRect >= cellSize - 1) {
              //   p.imageMode(p.CENTER);
              //   tint = p.map(sizeRect, cellSize - 1, cellSize, 50, 225);
              //   p.tint(255, tint);
              //   p.blendMode(p.DIFFERENCE);
              //   p.image(asterisk, 0, 0, cellSize / 2, cellSize / 2);
              // }

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
            //p.blendMode(p.DIFFERENCE);
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
        };

        p.windowResized = () => {
          p.resizeCanvas(window.innerWidth, reponsiveWindowHeight);
        };
      };

      const p5Instance = new p5(sketch, sketchRef.current);

      return () => {
        p5Instance.remove();
      };
    }
  }, []);

  return <div ref={sketchRef} className='absolute z-0 max-h-[100vh]' />;
};

export default P5BannerLight;
