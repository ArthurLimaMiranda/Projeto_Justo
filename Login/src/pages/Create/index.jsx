import React  from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'

export default function Create() {
    return(
        <View style={StyleSheet.container}>
            <Animatable.View animation="fadeInUp" style={styles.containerform}>
                <Text style={styles.title}>E-mail</Text>
                <TextInput
                  placeholder="Digite seu email..."
                  style={style.input}
                />
                <Text style={styles.title}>Senha</Text>
                <TextInput
                  placeholder="Sua senha"
                  style={style.input}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Criar</Text>
                </TouchableOpacity>

            </Animatable.View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#00396A'
    },
    containerform:{
        backgroundColor: '#F5F5F5',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopLeftRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 20,
        marginTop: 28
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize:16
    },
    button:{
        backgroundColor: '#00396A',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color: '#F5F5F5',
        fontSize: 18,
        fontWeight: 'bold'
    }
})