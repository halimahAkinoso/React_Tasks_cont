const ColorDisplay = ({ r, g, b }) => {
  const toHex = (c) => {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  const hexCode = `#${toHex(r)}${toHex(g)}${toHex(b)}`;

  return (
    <div>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: `rgb(${r}, ${g}, ${b})`,
          border: '1px solid black',
        }}
      ></div>
      <p>RGB: ({r}, {g}, {b})</p>
      <p>Hex: {hexCode}</p>
    </div>
  );
};

export default ColorDisplay;