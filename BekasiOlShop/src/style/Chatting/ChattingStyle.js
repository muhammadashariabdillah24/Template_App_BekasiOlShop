import { StyleSheet } from "react-native";

const chatting = StyleSheet.create({

    container : {
        flex : 1,
        alignItems : 'center',
        marginHorizontal : 20
    },
    accomodateBody : {
        height : '100%',
        maxWidth : '100%',
        flexDirection : 'column',
    },
    viewChat : {
        borderBottomColor : '#E76E6E',
        borderBottomWidth : 1,
        padding : 5,
        marginVertical : 15,
        flexDirection : 'row',
        justifyContent : 'space-between',
        width : '100%'
    },

    // One Column
    accomodateImageAndNameProfil : {
        flexDirection : 'row',
        justifyContent : 'flex-start'
    },
    imageProfil : {
        width : 50,
        height : 50,
        borderRadius : 100
    },
    viewNameProfil : {
        flexDirection : 'column',
        justifyContent : 'space-around',
        left : 10
    },
    textNameProfil : {
        fontSize : 15,
        color : '#A7A7A7'
    },
    textMessageProfil : {
        fontSize : 10,
        color : '#A7A7A7'
    },
    // 

    viewStatus : {
        flexDirection : 'column',
        justifyContent : 'flex-end'
    },
    textStatus : {
        fontSize : 15,
        color : '#A7A7A7'
    },
    iconStatus : {
        color : '#00DB68',
        fontSize : 20
    }
})

export { chatting }