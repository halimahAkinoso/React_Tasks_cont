import { useState } from 'react';
import RGBSlider from './RGBSlider';
import ColorDisplay from './ColorDisplay';

const ColorPicker = () => {
  const [r, setR] = useState(0);
  const [g, setG] = useState(0);
  const [b, setB] = useState(0);

  return (
    <div>
      <h1>Color Picker</h1>
      <RGBSlider label="R" value={r} onChange={setR} />
      <RGBSlider label="G" value={g} onChange={setG} />
      <RGBSlider label="B" value={b} onChange={setB} />
      <ColorDisplay r={r} g={g} b={b} />
    </div>
  );
};

export default ColorPicker;
