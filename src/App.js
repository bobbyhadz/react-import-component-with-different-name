import './App.css';

// 👇️ Rename import to MyButton
import {Button as MyButton} from './another-file';

export default function App() {
  return (
    <div>
      <MyButton />
    </div>
  );
}
