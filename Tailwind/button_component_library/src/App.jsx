import React from 'react';
import Button from './Button';
import './App.css'; // Assuming you have your Tailwind CSS imported here

const App = () => {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Button Variations</h1>
      <div className="flex flex-wrap gap-4 items-center">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="success">Success</Button>
        <Button size="large" variant="primary">Large Size</Button>
        <Button size="small" variant="primary">Small Size</Button>
      </div>
      
    </div>
  );
};

export default App;