import { useRef, useEffect } from 'react';
import p5 from 'p5';

const P5Banner = () => {
  const sketchRef = useRef(null);

  useEffect(() => {
    const sketch = (p) => {
      let cols, rows;
      const cellSize = 64;  // Tamaño máximo del cuadrado
      let x, y;
      let positionTileX, positionTileY;
      let differenceTileMouseX, differenceTileMouseY;
      let sizeRect;
      let transparency;
      let rotation;
      let reponsiveWindowHeight = p.windowHeight*0.80
      let minSizeInteraction = 45;

    
      p.setup = () => {
        p.createCanvas(p.windowWidth, reponsiveWindowHeight);
        cols = p.windowWidth / cellSize;
        rows = reponsiveWindowHeight / cellSize;
        p.noStroke();
      };

      p.draw = () => {
        p.background(46, 54, 89);
        cols = p.windowWidth / cellSize;
        rows = reponsiveWindowHeight / cellSize;
        
        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            // Calcular la posición del cuadrado
            positionTileX = cellSize * i;
            positionTileY = cellSize * j;
            differenceTileMouseX = p.abs(positionTileX - p.mouseX);
            differenceTileMouseY = p.abs(positionTileY - p.mouseY);
            
            x = p.map(differenceTileMouseX, 0, 1200, 30, -10);
            y = p.map(differenceTileMouseY, 0, 1200, 30, -10);
            
            sizeRect = x + y;
            
            p.push();  // Guardar el estado actual de las transformaciones
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

export default P5Banner;
