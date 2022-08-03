/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import './App.css';
import Character from './components/Character/Character';
import { useCharacter } from './hooks/useCharacter';

const App = () => {
  const char = useCharacter();

  React.useEffect(() => {
    window.addEventListener( 'keydown', handleKeyDown );
  }, [])

  const handleKeyDown = ( event: KeyboardEvent ) => {
    switch( event.code ) {
      case 'KeyA':
      case 'ArrowLeft':

        char.moveLeft()
      break;

      case 'KeyW':
      case 'ArrowUp':
        char.moveUp()

      break;

      case 'KeyD':
      case 'ArrowRight':
        char.moveRight()

      break;

      case 'KeyS':
      case 'ArrowDown':
        char.moveDown()
      break;
    }
  }

  return (
    <div className="App">
      <div className="map">
        <Character x={ char.x } y={ char.y } side={ char.side } />
      </div>
    </div>
  );
}

export default App;
