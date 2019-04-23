import React, { Component } from "react";
import { ImageBackground, TextInput, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import { AirbnbRating } from 'react-native-ratings';
class PlaceInput extends Component {
   color = this.props.data.colors.color2;
    styles = StyleSheet.create({
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
        backgroundColor: this.color + '40',
        alignItems: "center",
        justifyContent: "center"
      },
      placeInput: {
        width: "70%",
        height: "10%",
        borderColor: this.color + '80',
        backgroundColor: this.color + '40',
        borderWidth: 2,
        borderRadius: 20,
        margin: 5,
        marginBottom: 30
      },
      placeInput2: {
        width: "70%",
        height: "20%",
        borderColor: this.color + '80',
        backgroundColor: this.color + '40',
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
  state = {
    title: '',
    description: '',
    rated: 2
  };
  ratingCompleted = (rating) => {
    this.setState({
      rated: rating
    })
  }
  titleChangedHandler = val => {
    this.setState({
      title: val
    });
  };
  descriptionChangedHandler = val => {
    this.setState({
      description: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.title.trim() === '') {
      return;
    }
    this.props.addCigaretteHandler(this.state.title, this.state.description, this.state.rated);
  };
  render() {
    return (
      <ImageBackground style={this.styles.inputContainer} source={require('./images/inputSmoke.jpg')}>
        <View style={this.styles.overlayContainer}>
          <TextInput
            placeholder="Title in here"
            value={this.state.message}
            onChangeText={this.titleChangedHandler}
            style={this.styles.placeInput}
          />
          <TextInput
            placeholder="Description in here"
            value={this.state.message}
            onChangeText={this.descriptionChangedHandler}
            style={this.styles.placeInput2}
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

export default PlaceInput;