import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Constants from "expo-constants";

const logo = require("../Logo_Sandrinho.png");

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={logo}/>
            <Text style={styles.title}>Identificação do Usuário</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Login"
                placeholderTextColor="white"
                textAlign="center"
            />
            <TextInput
                style={styles.textInput}
                placeholder="Senha"
                placeholderTextColor="white"
                textAlign="center"
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonCadastro}>
                <Text>Cadastrar usuário</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Constants.statusBarHeight,
    },
    img: {
        width: 400,
        height: 290,
    },
    title: {
        fontSize: 25,
        color: "black",
        fontWeight: "bold",
        letterSpacing: 1,
        marginVertical: 5,
    },
    textInput: {
        backgroundColor: "black",
        width: "60%",
        marginVertical: 5,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
    },
    button: {
        backgroundColor: "#00f",
        width: "50%",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 15,
        textTransform: "uppercase",
    },
    buttonCadastro: {
        width: "40%",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
});
