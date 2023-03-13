import { TouchableOpacity, Image, StyleSheet } from "react-native"
export const MoviesCard = ({img}) => {
    return (
        <TouchableOpacity>
            <Image source={img} style={styles.img} />
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    img: {
        marginLeft:20,
    }
})
