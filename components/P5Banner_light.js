import { useRef, useEffect } from 'react';
import p5 from 'p5';

const P5BannerLight = () => {
  const sketchRef = useRef(null);

  useEffect(() => {
    const sketch = (p) => {
      let cols, rows;
      const cellSize = 60;  // Tamaño máximo del cuadrado
      let x, y;
      let positionTileX, positionTileY;
      let differenceTileMouseX, differenceTileMouseY;
      let sizeRect;
      let transparency;
      let rotation;
      let reponsiveWindowHeight = p.windowHeight;
      let windowWidthAdapted = p.windowWidth;
      let minSizeInteraction = cellSize/1.5;
      let asterisk;
      let tint;

      // p.preload = () => {
      //   asterisk = p.loadImage('/askterisk.png'); // Ruta a la imagen en el directorio public
      // };
      p.setup = () => {
        p.createCanvas(windowWidthAdapted, reponsiveWindowHeight);
        cols = windowWidthAdapted / cellSize;
        rows = reponsiveWindowHeight / cellSize;
        p.noStroke();
        asterisk = p.loadImage('/assets/img/asterisk.png'); // Ruta a la imagen en el directorio public
      };

      p.draw = () => {
        p.background(169, 177, 214);
       // mas oscuro
       // p.background(117, 129, 186);
        cols = p.windowWidth / cellSize;
        rows = reponsiveWindowHeight / cellSize;
        
        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            // Calcular la posición del cuadrado
            positionTileX = cellSize * i;
            positionTileY = cellSize * j + 30;
            differenceTileMouseX = p.abs(positionTileX - p.mouseX);
            differenceTileMouseY = p.abs(positionTileY - p.mouseY);
            
            x = p.map(differenceTileMouseX, 0, 1200, cellSize/2, -10);
            y = p.map(differenceTileMouseY, 0, 1200, cellSize/2, -10);
            
            sizeRect = x + y;
            
            p.push();  // Guardar el estado actual de las transformaciones
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
            p.strokeWeight(cellSize/7.5);
            p.rect(0, 0, cellSize/1.5, cellSize/1.5, cellSize/7.5);
            // asterisco bajo el mouse
            if (sizeRect >= cellSize-1) {
              p.imageMode(p.CENTER);
              tint = p.map(sizeRect, cellSize-1, cellSize, 50, 225);
              p.tint(255,tint);
              p.blendMode(p.DIFFERENCE);
              p.image(asterisk, 0, 0,cellSize/2, cellSize/2);
            }
            p.pop();  // Restaurar el estado anterior de las transformaciones    
          
          }
        
      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, reponsiveWindowHeight); // Resize the canvas when the window is resized
      };
        }
      };
    };

    // Crear una nueva instancia de p5 con el sketch
    const p5Instance = new p5(sketch, sketchRef.current);

    // Limpiar el sketch al desmontar el componente
    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div ref={sketchRef} className='absolute z-0 max-h-[100vh]' />;
};

export default P5BannerLight;
