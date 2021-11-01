import { StyleSheet } from "react-native";

const splashScreen = StyleSheet.create({

    container : {

        backgroundColor : '#FFF',
        flex : 1
    },
    accomodateFrame : {

        flex : 1,
        flexDirection : 'row',
        justifyContent : 'center'
    },
    accomodateContent : {

        flexDirection : 'column',
        justifyContent : 'center'
    },
    viewImage : {

        width : 155,
        height : 155
    }
})

export { splashScreen }