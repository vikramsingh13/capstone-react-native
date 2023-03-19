import { View, Text, TouchableOpacity } from "react-native";
import Carousel from "react-native-snap-carousel";
import { Component } from "react";
import styles from "./carousel.style";

const data = [
    { title: "1", message: "calories burnt: " },
    { title: "2", message: "calories burnt: " },
    { title: "3", message: "calories burnt: " },
];

class CarouselScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { title: "1", message: "calories burnt: " },
                { title: "2", message: "calories burnt: " },
                { title: "3", message: "calories burnt: " },
            ],
        };
    }

    renderItem({ item, i }) {
        return (
            <TouchableOpacity style={styles.container}>
                <View >
                    <Text>{item.title}</Text>
                    <Text>{item.message}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <Carousel
                    ref={(c) => {
                        this._carousel = c;
                    }}
                    data={this.state.data}
                    renderItem={this.renderItem}
                    sliderWidth={300}
                    itemWidth={200}
                    layout="tinder"
                    layoutCardOffset={`20`}
                    loop={true}
                />
            </View>
        );
    }
}

export default CarouselScreen;
