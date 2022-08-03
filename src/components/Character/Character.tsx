import styles from "./Character.module.css";
import { CharacterSide } from '../../types/CharacterSide'

type Props = {
  x: number;
  y: number;
  side: CharacterSide
};

const Character = ({ x, y, side }: Props) => {
  const size = 30;
  let left = x * size
  let top = y * size

  const sides = {
    down: 0,
    left: -30,
    right: -60,
    up: -90,
  }

  return (
    <div
      className={`${ styles.character }` }
      style={{
        width: size,
        height: size,
        left: left,
        top: top,
        backgroundPosition: `0px ${sides[side]}px`
      }}
    >
    </div>
  )
};

export default Character;
