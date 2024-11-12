import {
  StatusBar,
  Text,
  View,
} from 'react-native';
import { CalculatorScreen } from './presentation/screens/CalculatorScreen';
import { globlalStyles } from './config/theme/App-theme';

export const App = () => {

  return (
    <View style={globlalStyles.background}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor='black'
      />

      <CalculatorScreen />
    </View>
  );
}

