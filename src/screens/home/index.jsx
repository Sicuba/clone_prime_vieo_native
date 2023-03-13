import { TouchableOpacity, View, FlatList, ScrollView } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import LogoImg from "../../assets/prime_video.png";
import LogoText from "../../assets/amazon_logo.png";
import TheWeel from "../../assets/movies/the_wheel_of_time.png";
import { MoviesCard } from "../../components/MoviesCard";
import { MOVIESWATCHING } from "../../utils/moviesWatching";
import { MOVIESCRIME } from "../../utils/moviesCrimes";
import { MOVIESWATCH } from "../../utils/moviesWatch";
const Home = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image source={LogoImg} />
                    <Image source={LogoText} style={styles.logoText} />
                </View> 
                <View style={styles.header}>
                    <TouchableOpacity><Text style={styles.textHeader}>Home</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.textHeader}>TV Shows</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.textHeader}>Movies</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.textHeader}>Kids</Text></TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={styles.ContentMovies}>
                <TouchableOpacity>
                    <Image source={TheWeel}  style={styles.theWellImg} />
                </TouchableOpacity>
                  <Text style={styles.movieText}>Continue Watching</Text>
                <FlatList data={MOVIESWATCHING} keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <MoviesCard img={item.moviesURL} />}
                    horizontal 
                    contentContainerStyle={styles.contenList}
                    showsHorizontalScrollIndicator={false}
                />

                 <Text style={styles.movieText}>Crime Movies</Text>
                <FlatList data={MOVIESCRIME} keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <MoviesCard img={item.moviesURL} />}
                    horizontal 
                    contentContainerStyle={styles.contenList}
                    showsHorizontalScrollIndicator={false}
                />
                 <Text style={styles.movieText}>Watch in your language</Text>
                <FlatList data={MOVIESWATCH} keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <MoviesCard img={item.moviesURL} />}
                    horizontal 
                    contentContainerStyle={styles.contenList}
                    showsHorizontalScrollIndicator={false}
                    />
                    </ScrollView>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#232F3E',
    },
    logo: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 80,
        width:"100%",
    },
    logoText: {
        marginTop: -30,
        marginLeft:25,
    },
    header: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 30,
    },
    textHeader: {
        color: '#fff',
        fontSize: 20,
        fontWeight:'400'
    },
    theWellImg:{
        width: "100%",
        marginTop: 20,
        alignItems: 'center',
        justifyContent:'center'
    },
    contenList: {
        paddingLeft: 3,
        paddingRight:30,
    },
    movieText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "700",
        padding:15,
    },
    ContentMovies: {
        marginBottom:50
    }
});
export default Home;