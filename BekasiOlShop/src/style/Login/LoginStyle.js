import { StyleSheet } from "react-native";

const login = StyleSheet.create({

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

        marginBottom : 50,
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center'
    },
    viewLoginImage : {

        width : 100,
        height : 100,
    },
    textLogin : {

        color : '#c0c0c0',
        fontSize : 20,
        textAlign : 'center',
        marginTop : 10
    },
    //

    // Style For Body
    viewBody : {

        flexDirection : 'column',
        justifyContent : 'flex-start'
    },
    viewFormLogin : {

        flexDirection : 'row',
        alignItems : 'center',
        width : 300,
        maxWidth : 300,
        marginVertical : 17,
        borderColor : '#A7A7A7',
        borderWidth : 1,
        borderRadius : 5,
        alignSelf : 'center',
    },
    viewTextInput : {

        width : 265,
        maxWidth : 265,
        color : '#000',
        padding : 10,
        alignSelf : 'center',
        textAlign : 'center'
    },
    viewIcon : {
        flexDirection : 'row',
    },
    viewTextIcon : {
        fontSize : 25,
        color : '#E76E6E'
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
        paddingTop : 15,
        justifyContent : 'center',
        flexDirection : 'row',
    },
    viewButtonLinkLeft : {
        
        marginRight : 40,
        alignItems : 'center'
    },
    viewButtonLinkRight : {

        marginLeft : 40,
        alignItems : 'center'
    },
    viewTextLink : {

        color : '#6C93F6'
    }
    // 

})

export { login }