import { fabric } from 'fabric';

let canvas: fabric.Canvas;

export const initCanvas = (id: string, width: number, height: number) => {
  if (canvas) {
    console.log('Canvas already initialized');
    return;
  }

  canvas = new fabric.Canvas(id, {
    width,
    height,
    backgroundColor: '#fff',
  });

  addRect();
  addText();
  // addImage('https://i.imgur.com/XqQXq.png');

  canvas.on('mouse:wheel', function (opt) {
    var delta = opt.e.deltaY;
    var zoom = canvas.getZoom();
    zoom *= 0.999 ** delta;
    if (zoom > 20) zoom = 20;
    if (zoom < 0.01) zoom = 0.01;
    canvas.setZoom(zoom);
    opt.e.preventDefault();
    opt.e.stopPropagation();
  });
};

export const resizeCanvas = (width: number, height: number) => {
  canvas.setWidth(width);
  canvas.setHeight(height);
};

export const setBackgroundColor = (color: string) => {
  canvas.setBackgroundColor(color, canvas.renderAll.bind(canvas));
};

export const addRect = () => {
  const rect = new fabric.Rect({
    left: 10,
    top: 10,
    fill: 'red',
    width: 50,
    height: 50,
  });

  canvas.add(rect);
};

export const addText = () => {
  const text = new fabric.Text('Hello World', {
    left: 100,
    top: 100,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 10,
    fill: 'black',
    originX: 'center',
    originY: 'center',
  });

  canvas.add(text);
};

export const addImage = (url: string) => {
  fabric.Image.fromURL(url, function (image) {
    canvas.add(image);
  });
};
