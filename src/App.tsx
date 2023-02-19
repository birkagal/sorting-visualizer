import { useEffect, useState } from 'react';
import { ArrayBar, ArrayContainer, AppDiv } from './styles/styled';
import { config } from './config';
import Menu from './components/Menu';
import Footer from './components/Footer';
import useWindowDimensions from './hooks/useWindowDimensions';
import { normalize } from './utils';

const App = () => {
  const [array, setArray] = useState<Array<number>>([]);
  const [barWidth, setBarWidth] = useState(0);
  const [barFontSize, setBarFontSize] = useState(0);
  const { width } = useWindowDimensions();

  useEffect(() => {
    let updatedBarWidth = Math.floor(width * 0.7 / array.length) - 2;
    setBarWidth(updatedBarWidth);
    if (updatedBarWidth > 20) {
      let newFontSize = normalize(updatedBarWidth, 20, 230, 10, 24);
      setBarFontSize(newFontSize);
    }
  }, [array]);

  return (
    <AppDiv>
      <Menu {...{ array, setArray }} />
      <ArrayContainer>
        {array.map((value, idx) => (
          <ArrayBar
            className='array-bar'
            key={idx}
            style={{
              width: `${Math.floor(width / (array.length * 1.5))}px`,
              backgroundColor: config.primary_color,
              height: `${value}px`,
              color: barWidth > 20 ? "black" : "transparent",
              fontSize: `${barFontSize}px`,
            }}>
            {value}
          </ArrayBar>
        ))}
      </ArrayContainer>
      <Footer />
    </AppDiv >
  );
}

export default App;