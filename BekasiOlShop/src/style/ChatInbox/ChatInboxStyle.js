import { StyleSheet } from "react-native";

const inbox = StyleSheet.create({
    container : {
        flex : 1,
        maxWidth : '100%'
    },
    accomodateHeader : {
        backgroundColor : '#E76E6E',
        flexDirection : 'row',
        justifyContent : 'space-between',
        paddingVertical : 10,
        paddingHorizontal : 5
    },

    // View Header Left
    accomodateImageAndName : {
        flexDirection : 'row',
        justifyContent : 'flex-start'
    },
    imageProfil : {
        width : 40,
        height : 40,
        borderRadius : 100
    },
    nameProfil : {
        flexDirection : 'column',
        justifyContent : 'center',
        left : 5
    },
    textNameProfil : {
        color : '#FFF',
        fontSize : 15
    },
    // 

    // View Header Right

    accomodateIcon : {
        flexDirection : 'column',
        justifyContent : 'center'
    },
    viewIcon : {
        flexDirection : 'row',
        justifyContent : 'flex-start'
    },
    buttonIcon : {
        marginHorizontal : 5,
        backgroundColor : '#FFF',
        borderRadius : 100,
        padding : 5
    },
    iconStyle : {
       fontSize : 20,
       color : '#E76E6E',
       marginHorizontal : 5,
       backgroundColor : '#FFF',
       borderRadius : 100,
       padding : 5
    },
    // 

    // View Inbox Area
    accomodateBody : {
        flex : 1,
        marginTop : 10,
    },


    // My Chat
    accomodateMyChat : {
        flexDirection : 'row',
        justifyContent : 'flex-end',
        paddingHorizontal : 10,
        paddingVertical : 10,
    },
    myChat : {
        flexDirection : 'row',
        justifyContent : 'flex-start',
        backgroundColor : '#E76E6E',
        maxWidth : '80%',
        paddingVertical : 15,
        paddingHorizontal : 10,
        borderRadius : 10,
        flexWrap : 'wrap'
    },
    myTextChat : {
        color : '#FFF',
        fontSize : 10
    },

    // Enemy Chat

    accomodateEnemyChat : {
        flexDirection : 'row',
        justifyContent : 'flex-start',
        paddingHorizontal : 10,
        paddingVertical : 10,
    },
    enemyChat : {
        flexDirection : 'row',
        justifyContent : 'flex-start',
        backgroundColor : '#E76E6E',
        maxWidth : '80%',
        paddingVertical : 15,
        paddingHorizontal : 10,
        borderRadius : 10,
        flexWrap : 'wrap'
    },
    enemyTextChat : {
        color : '#FFF',
        fontSize : 10
    },

    // 

    // 

    // Typing Area And Microphone
    accomodateColumnTypingAndMicrophone : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        flexWrap : 'wrap',
        paddingHorizontal : 5,
        paddingVertical : 5
    },
    textInputTypingMessage : {
        backgroundColor : '#E76E6E',
        paddingHorizontal : 10,
        paddingVertical : 3,
        width : '80%',
        maxWidth : '80%',
        borderRadius : 30
    },
    longTextInput : {
        width : '100%'
    },
    viewMicroPhone : {
        backgroundColor : '#E76E6E',
        flexDirection : 'column',
        justifyContent : 'center',
        padding : 15,
        borderRadius : 100
    },
    iconMicroPhone : {
        fontSize : 24,
        color : '#FFF'
    }
    // 
})

export { inbox }