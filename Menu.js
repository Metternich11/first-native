import React from "react";
import { Text, View, Button, } from "react-native";
import Menu, { MenuItem, MenuDivider, Position } from "react-native-enhanced-popup-menu";
import { LinearGradient } from 'expo';

const App = (props) => {
  let textRef = React.createRef();
  let menuRef = null;
 
  const setMenuRef = ref => menuRef = ref;
  const hideMenu = () => menuRef.hide();
  const showMenu = () => menuRef.show(textRef.current, stickTo = Position.BOTTOM_CENTER);
  const setColor= (c1,c2,c3,c4,c5) => {
    props.addColorHandler(c1,c2,c3,c4,c5);
    hideMenu();
  }
  const onPress = () => showMenu();
  return (
    <View style={{ alignItems: "center", backgroundColor: '#00000000'}}>
      <Text
        ref={textRef}
        style={{ fontSize: 0, textAlign: "center" }}
       >
       </Text>
 
      <Button
        title="Color menu"
        onPress={onPress}
      />
 
      <Menu
        ref={setMenuRef}
      > 
        <LinearGradient style={{margin: 2.5}} start={[0, 1]} end={[1, 0]} colors={['#192E5B', '#1D65A6', '#72A2C0', '#00743F', '#F2A104']}>
          <MenuItem onPress={() => setColor('#192E5B', '#1D65A6', '#72A2C0', '#00743F', '#F2A104')}> Exotic Orchids</MenuItem>
        </LinearGradient>
        <LinearGradient style={{margin: 2.5}} start={[0, 1]} end={[1, 0]} colors={['#0444BF', '#0584F2', '#0AAFF1', '#EDF250', '#A79674']}>
          <MenuItem onPress={() => setColor('#0444BF', '#0584F2', '#0AAFF1', '#EDF250', '#A79674')}> Shimmering Blues and Greens</MenuItem>
        </LinearGradient>
        <LinearGradient style={{margin: 2.5}} start={[0, 1]} end={[1, 0]} colors={['#A4A4BF', '#16235A', '#2A3457', '#888C46', '#F2EAED']}>
          <MenuItem onPress={() => setColor('#A4A4BF', '#16235A', '#2A3457', '#888C46', '#F2EAED')}>Blue Mountain Peaks and Clouds</MenuItem>
        </LinearGradient>
        <LinearGradient style={{margin: 2.5}} start={[0, 1]} end={[1, 0]} colors={['#A3586D', '#5C4A72', '#F3B05A', '#F4874B', '#F46A4E']}>
          <MenuItem onPress={() => setColor('#A3586D', '#5C4A72', '#F3B05A', '#F4874B', '#F46A4E')}>Orange Sunset</MenuItem>
        </LinearGradient>
        <LinearGradient style={{margin: 2.5}} start={[0, 1]} end={[1, 0]} colors={['#D50B53', '#F4F3F4', '#A882C1', '#824CA7', '#B9C406']}>
          <MenuItem onPress={() => setColor('#D50B53', '#F4F3F4', '#A882C1', '#824CA7', '#B9C406')}>Summer Blueberries</MenuItem>
        </LinearGradient>
      </Menu>
    </View>
  );
};
 
export default App;