import React, { Component } from "react";
import { ImageBackground, TextInput, StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import { AirbnbRating } from 'react-native-ratings';
class PlaceInput extends Component {
  state = {
    message: '',
    rated: 2
  };
  ratingCompleted = (rating) => {
    this.setState({
      rated: rating
    })
  }
  placeNameChangedHandler = val => {
    this.setState({
      message: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.message.trim() === "") {
      return;
    }
    this.props.addCigaretteHandler(this.state.message, this.state.rated);
  };
  render() {
    return (
      <ImageBackground style={styles.inputContainer} source={require('./images/inputSmoke.jpg')}>
        <View style={styles.overlayContainer}>
          <TextInput
            placeholder="Do you want to tell me something?"
            value={this.state.message}
            onChangeText={this.placeNameChangedHandler}
            style={styles.placeInput}
          />
          <Text style={{fontSize: 16}}>You want to smoke? How do you feel about?</Text>
          <AirbnbRating
            reviews={["very bad", "bad", "ok", "good", "very good"]}
            readonly={true}
            ratingCount={5}
            defaultRating={3}
            imageSize={50}
            onFinishRating={this.ratingCompleted}
            // style={styles.rating}
          />
          <TouchableOpacity style={{flexDirection: "row"}} onPress={this.placeSubmitHandler} title="Add">
            <Ionicons name="ios-add-circle-outline" size={80} color="green" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  overlayContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(225, 232, 240,0.4)",
    alignItems: "center",
    justifyContent: "center"
  },
  placeInput: {
    width: "70%",
    height: 200,
    borderColor: "rgba(144, 104, 190,0.8)",
    backgroundColor: "rgba(225, 232, 240,0.4)",
    borderWidth: 2,
    borderRadius: 20,
    margin: 5,
    marginBottom: 30
  },
  placeButton: {
    width: "30%",
  },
  rating: {
    paddingVertical: 10,
    marginHorizontal: 10,
    bottom: 0
  }
});

export default PlaceInput;