import React  from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function welcome() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            
            <View style={styles.containerLogo}>
                <Animatable.Image
                animation="flipInY"
                source={require('../../assets/logo.png')}
                style={{ windth: '100%' }}
                resizeMode="contain"
                />
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Ajuste, administre e aprenda sobre seus gastos de qualquer lugar!</Text>
                <Text style={styles.text}>Faça o login para começar</Text>


            <TouchableOpacity 
            style={styles.button}
            onPress={ () => navigation.navigate('SingIn')}
            >
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
            </Animatable.View>

           


        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#00396A'
    },
    containerLogo:{
        flex:2,
        backgroundColor: '#00396A',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm: {
        flex:1,
        backgroundColor: '#F5F5F5',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12
    },
    text:{
        color: '#a1a1a1'
    },
    button:{
        position: 'absolute',
        backgroundColor: '#00396A',
        borderRadius: 50,
        paddingVertical: 8,
        width:'60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        fontSize: 18,
        color: '#F5F5F5',
        fontWeight: 'bold'
    }
})