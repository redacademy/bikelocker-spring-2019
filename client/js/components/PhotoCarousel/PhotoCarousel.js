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
            "https://cdn.pixabay.com/photo/2014/05/21/15/17/bicycles-349788_960_720.jpg"
        }
      },
      {
        source: {
          uri:
            "https://cdn.pixabay.com/photo/2018/12/09/19/14/colors-3865538_960_720.jpg"
        }
      },
      {
        source: {
          uri:
            "https://cdn.pixabay.com/photo/2015/09/05/00/20/bikes-923451_960_720.jpg"
        }
      },
      {
        source: {
          uri:
            "https://cdn.pixabay.com/photo/2016/11/18/15/50/bicycle-rack-1835463_960_720.jpg"
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
