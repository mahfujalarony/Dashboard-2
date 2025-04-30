import React, { useState } from 'react';
import * as FeatherIcons from 'react-icons/fi'; 
import { IconType } from 'react-icons';

interface IconItem {
  name: string;
  Icon: IconType;
}

const Icons: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const icons: IconItem[] = Object.entries(FeatherIcons)
    .filter(([name]) => name.startsWith('Fi')) 
    .map(([name, Icon]) => ({
      name: name.replace('Fi', '').toLowerCase(), 
      Icon: Icon as IconType,
    }));

  const filteredIcons = icons.filter(({ name }) =>
    name.includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '1rem' }}>
      <input
        type="text"
        placeholder="search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          padding: '0.5rem',
          marginBottom: '1rem',
          border: '1px solid #ccc',
          borderRadius: '4px',
          fontSize: '1rem',
        }}
      />

   
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
          gap: '1rem',
        }}
      >
        {filteredIcons.map(({ name, Icon }) => (
          <div
            key={name}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0.5rem',
              borderRadius: '8px',
              transition: 'background-color 0.2s',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = '#f5f5f5')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = 'transparent')
            }
          >
            <Icon size={24} style={{ marginBottom: '0.5rem' }} />
            <span style={{ fontSize: '0.75rem', color: '#333' }}>
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Icons;