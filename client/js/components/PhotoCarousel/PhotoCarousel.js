import React, { Component } from "react";
import { View, ScrollView, Image } from "react-native";
import styles from "./styles";

class Carousel extends Component {
  render() {
    const { images } = this.props;
    if (images && images.length) {
      return (
        <View style={styles.scrollContainer}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          >
            {images.map((image, index) => (
              <Image key={index} style={styles.image} source={image.source} />
            ))}
          </ScrollView>
        </View>
      );
    }
    return null;
  }
}

export default class PhotoCarousel extends Component {
  render() {
    const images = [
      {
        source: {
          uri:
            "https://cdn.pixabay.com/photo/2017/05/19/07/34/teacup-2325722__340.jpg"
        }
      },
      {
        source: {
          uri:
            "https://cdn.pixabay.com/photo/2017/05/02/22/43/mushroom-2279558__340.jpg"
        }
      },
      {
        source: {
          uri:
            "https://cdn.pixabay.com/photo/2017/05/18/21/54/tower-bridge-2324875__340.jpg"
        }
      },
      {
        source: {
          uri:
            "https://cdn.pixabay.com/photo/2017/05/16/21/24/gorilla-2318998__340.jpg"
        }
      }
    ];

    return (
      <View style={styles.container}>
        <Carousel images={images} />
      </View>
    );
  }
}
