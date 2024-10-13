import { StyleSheet, Text, Image, View } from 'react-native'
import Swiper from "react-native-swiper";
import { CarouselData } from '../data/CarouselData';

const Carousel = () => {
    return (
        <View style={styles.carouselContainer}>
            <Swiper showsPagination={false} showsButtons={false} autoplay={true} style={styles.wrapper}>
                {CarouselData.map((item) => (
                    <View key={item.id}>
                        <Image  source={item.image} style={styles.imagStyle} />
                    </View>
                ))}
            </Swiper>
        </View>
    )
}

export default Carousel

const styles = StyleSheet.create({
    carouselContainer: {
        position: "relative",
    },
    wrapper: {
        height: 300,
    },
    imagStyle: {
        width: '100%',
        height: 250,
    },
})