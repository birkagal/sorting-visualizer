import { useEffect, useState } from 'react';
import { Bar, ArrayContainer, AppDiv } from './styles/styled';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { COLORS } from './consts';
import { normalize } from './utils';
import useWindowDimensions from './hooks/useWindowDimensions';

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
      <Navbar {...{ array, setArray }} />
      <ArrayContainer>
        {array.map((value, idx) => (
          <Bar
            className='array-bar'
            key={idx}
            style={{
              width: `${Math.floor(width / (array.length * 1.5))}px`,
              backgroundColor: COLORS.PRIMARY,
              height: `${value}px`,
              color: barWidth > 20 ? "black" : "transparent",
              fontSize: `${barFontSize}px`,
            }}>
            {value}
          </Bar>
        ))}
      </ArrayContainer>
      <Footer />
    </AppDiv >
  );
}

export default App;