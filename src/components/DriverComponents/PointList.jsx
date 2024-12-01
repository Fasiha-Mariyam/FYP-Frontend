import React from 'react';

export default function PointsList({ onSelectPoint }) {
  const points = Array.from({ length: 10 }, (_, i) => `Point ${i + 1}`);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {points.map((point, index) => (
        <div
          key={index}
          onClick={() => onSelectPoint(point)}
          style={{
            cursor: 'pointer',
            margin: '10px',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            textAlign: 'center',
            width: '150px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#f9f9f9',
          }}
        >
          {point}
        </div>
      ))}
    </div>
  );
}
