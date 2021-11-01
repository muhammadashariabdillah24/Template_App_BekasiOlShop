import { StyleSheet } from "react-native";

const forgotPassword = StyleSheet.create({

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

        marginBottom : 70,
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center'
    },
    viewForgotPasswordImage : {

        width : 100,
        height : 100,
    },
    texForgotPassword : {

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
    // viewFormForgotPassword : {

    //     width : 300,
    //     maxWidth : 300,
    //     marginVertical : 10,
    //     paddingHorizontal : 5,
    //     borderColor : '#A7A7A7',
    //     borderWidth : 1,
    //     borderRadius : 10,
    //     flexDirection : 'row',
    //     justifyContent : 'flex-start',
    //     alignItems : 'center',
    //     alignSelf : 'center'
    // },
    viewTextInput : {

        width : 300,
        maxWidth : 300,
        color : '#000',
        borderColor : '#A7A7A7',
        borderWidth : 1,
        borderRadius : 5,
        color : '#000',
        padding : 10,
        alignSelf : 'center',
        textAlign : 'center'
    },
    viewIcon : {
        flexDirection : 'row',
        justifyContent : 'flex-start'
    },
    viewTextIcon : {
        fontSize : 25,
        color : '#E76E6E'
    },
    textUpTextInput : {

        color : '#B77F7F',
        fontSize : 10
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
        marginTop : 60,
        justifyContent : 'center',
        flexDirection : 'column',
    },
    viewButtonLinkTop : {
        
        alignItems : 'center',
        marginBottom : 10
    },
    viewButtonLinkBottom : {

        marginTop : 10,
        alignItems : 'center'
    },
    viewTextLink : {

        color : '#6C93F6'
    }
    // 

})

export { forgotPassword }