import { StyleSheet } from "react-native";

const registration = StyleSheet.create({

    container : {

        flex : 1,
        backgroundColor : '#FFF'
    },

    accomodateView : {
        
        flex : 1,
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center'
    },

    // Style For Header
    viewHeader : {

        marginBottom : 5,
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center'
    },
    viewRegistrationImage : {

        width : 100,
        height : 100,
    },
    textRegistration : {

        color : '#c0c0c0',
        fontSize : 15,
        textAlign : 'center',
        marginTop : 10
    },
    //

    // Style For Body
    viewBody : {

        flexDirection : 'column',
        justifyContent : 'flex-start'
    },
    textUpTextInput : {

        color : '#B77F7F',
        fontSize : 10
    },
    viewTextInput : {

        width : 300,
        maxWidth : 300,
        color : '#000',
        borderColor : '#A7A7A7',
        borderWidth : 1,
        borderRadius : 5,
        padding : 10,
        margin : 15,
        alignSelf : 'center',
        textAlign : 'center'
    },
    styleTouchAbleOpacity : {

        marginTop : 30,
        padding : 13,
        width : 161,
        borderRadius : 10,
        backgroundColor : '#E76E6E',
        alignSelf : 'center'
    },
    textTouchAbleOpacity : {

        textAlign : 'center',
        color : '#FFF',
        fontSize : 18,
    },
    accomodateViewLink : {
        marginTop : 10,
        justifyContent : 'center',
        flexDirection : 'column',
        alignItems : 'center'
    },
    viewTextLink : {

        color : '#6C93F6'
    },
    viewTextIcon : {
        fontSize : 15,
        color : '#FFF',
        paddingLeft : 10
    },
    // 

})

export { registration }