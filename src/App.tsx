import { ChangeEvent, useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');

  let validator;
  if (inputValue.length === 7) {
    validator = /^#[a-fA-F0-9]{6}$/g.test(inputValue);
  } else {
    validator = true;
  }
  const hexToRgb = (value: string) => {
    if (value.length === 7) {
      const R = parseInt(value.slice(1, 3), 16);
      const G = parseInt(value.slice(3, 5), 16);
      const B = parseInt(value.slice(5, 7), 16);
      const RGB = R + ', ' + G + ', ' + B;
      return RGB;
    }
  };
  const chengeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    hexToRgb(inputValue);
    setInputValue(inputValue);
  };
  const mask = () => {
    setInputValue('#');
  };

  return (
    <div className="appWrp" style={{ backgroundColor: `${inputValue}` }}>
      <h1 className="title">HEX to RGB Converter</h1>
      <input
        onFocus={mask}
        type="text"
        maxLength={7}
        className={validator ? 'input' : 'input error'}
        value={inputValue}
        onChange={chengeHandle}
        placeholder="#_________ "
      />
      <div className={validator ? 'errorText' : 'errorText active'}>Неверный формат</div>
      <div className="output">RGB ({hexToRgb(inputValue)})</div>
      <p className="discription">
        Введите значение цвета в формате HEX - знак # и комбинация из 6 букв A, B, С, D, E, F или цифр 0-9.
      </p>
    </div>
  );
}

export default App;
