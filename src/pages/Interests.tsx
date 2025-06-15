import React, { useState } from 'react';
import './Interests.css';

interface Tile {
  id: string;
  label: string;
  category: 'places' | 'sports' | 'food' | 'wrong';
}

const initialTiles: Tile[] = [
  // ✅ Places you have lived
  { id: '1', label: 'Duluth, MN', category: 'places' },
  { id: '2', label: 'West Point, NY', category: 'places' },
  { id: '3', label: 'Augusta, GA', category: 'places' },
  { id: '4', label: 'Madison, WI', category: 'places' },
  { id: '5', label: 'El Paso, TX', category: 'places' },

  // ✅ Sports you like
  { id: '6', label: 'Hockey', category: 'sports' },
  { id: '7', label: 'Football', category: 'sports' },
  { id: '8', label: 'F1', category: 'sports' },
  { id: '9', label: 'Golf', category: 'sports' },

  // ✅ Foods you like
  { id: '10', label: 'Penne alla Vodka', category: 'food' },
  { id: '11', label: "Mom's Chicken Enchiladas", category: 'food' },
  { id: '12', label: 'Sausage Pizza', category: 'food' },

  // ❌ Decoys: Locations
  { id: '13', label: 'Denver, CO', category: 'wrong' },
  { id: '14', label: 'Chicago, IL', category: 'wrong' },
  { id: '15', label: 'Seattle, WA', category: 'wrong' },
  { id: '16', label: 'Phoenix, AZ', category: 'wrong' },

  // ❌ Decoys: Sports
  { id: '17', label: 'Lacrosse', category: 'wrong' },
  { id: '18', label: 'Wrestling', category: 'wrong' },
  { id: '19', label: 'Sailing', category: 'wrong' },

  // ❌ Decoys: Foods
  { id: '20', label: 'Tofu Stir Fry', category: 'wrong' },
  { id: '21', label: 'Veggie Burger', category: 'wrong' },
  { id: '22', label: 'Curry Goat', category: 'wrong' },
  { id: '23', label: 'Miso Soup', category: 'wrong' },
];

function shuffle(array: Tile[]) {
  return [...array].sort(() => Math.random() - 0.5);
}

const Interests: React.FC = () => {
  const [tiles, setTiles] = useState<Tile[]>(shuffle(initialTiles));
  const [buckets, setBuckets] = useState({ sports: [] as Tile[], places: [] as Tile[], food: [] as Tile[] });
  const [score, setScore] = useState<number | null>(null);
  const [resultMessage, setResultMessage] = useState('');

  const handleDrop = (tile: Tile, category: keyof typeof buckets) => {
    if (!buckets[category].find(t => t.id === tile.id)) {
      setBuckets(prev => ({
        ...prev,
        [category]: [...prev[category], tile],
      }));
      setTiles(prev => prev.filter(t => t.id !== tile.id));
    }
  };

  const handleDragStart = (e: React.DragEvent, tile: Tile) => {
    e.dataTransfer.setData('tile', JSON.stringify(tile));
  };

  const handleReset = () => {
    setTiles(shuffle(initialTiles));
    setBuckets({ sports: [], places: [], food: [] });
    setScore(null);
    setResultMessage('');
  };

  const checkAnswers = () => {
    let correct = 0;
    const newBuckets = { sports: [] as Tile[], places: [] as Tile[], food: [] as Tile[] };
    const incorrect: Tile[] = [];

    Object.entries(buckets).forEach(([key, group]) => {
      group.forEach(tile => {
        if (tile.category === key) {
          correct++;
          newBuckets[key as keyof typeof buckets].push(tile);
        } else {
          incorrect.push(tile);
        }
      });
    });

    setBuckets(newBuckets);
    setTiles(prev => shuffle([...prev, ...incorrect]));
    setScore(correct);

    if (correct === initialTiles.filter(t => t.category !== 'wrong').length) {
      setResultMessage("You know me perfectly!");
    } else if (correct >= 10) {
      setResultMessage("You know me pretty well!");
    } else if (correct >= 5) {
      setResultMessage("Not bad, but keep learning!");
    } else {
      setResultMessage("Nice try! Give it another shot.");
    }
  };

  return (
    <div className="interests-container">
      <h2>How well do you know me?</h2>
      <div className="tile-bank">
        {tiles.map(tile => (
          <div
            key={tile.id}
            className="tile"
            draggable
            onDragStart={e => handleDragStart(e, tile)}
          >
            {tile.label}
          </div>
        ))}
      </div>

      <div className="buckets">
        {Object.keys(buckets).map(key => (
          <div
            key={key}
            className="bucket"
            onDragOver={e => e.preventDefault()}
            onDrop={e => {
              const data = e.dataTransfer.getData('tile');
              const tile: Tile = JSON.parse(data);
              handleDrop(tile, key as keyof typeof buckets);
            }}
          >
            <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
            <div className="bucket-content">
              {buckets[key as keyof typeof buckets].map(tile => (
                <div key={tile.id} className="tile small">{tile.label}</div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="buttons">
        <button onClick={checkAnswers}>Check Answers</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      {score !== null && (
        <div className="results">
          <p>Your Score: {score}</p>
          <p>{resultMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Interests;
