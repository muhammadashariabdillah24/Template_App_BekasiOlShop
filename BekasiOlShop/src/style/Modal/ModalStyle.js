import { StyleSheet } from "react-native";


const modal = StyleSheet.create({
    
    container : {
        height : '100%',
        alignItems : 'center',
        flexDirection : 'column',
        justifyContent : 'center',
        backgroundColor : '#FFF'
    },
    titleText : {
        fontSize : 15,
        color : '#A7A7A7'
    },
    accomodateButton : {
        marginVertical : 50,
        flexDirection : 'row',
        justifyContent : 'space-around',
        width : '100%'
    },
    buttonClose : {
        backgroundColor : '#E76E6E',
        paddingHorizontal : 10,
        paddingVertical : 10,
        bottom : 50,
        flexDirection : 'row',
        justifyContent : 'center',
        borderRadius : 50
    },
    buttonNextChat : {
        backgroundColor : '#0FA958',
        paddingHorizontal : 20,
        paddingVertical : 5,
        flexDirection : 'row',
        justifyContent : 'center',
        borderRadius : 50
    },
    buttonNextCall : {
        backgroundColor : '#F29D1E',
        paddingHorizontal : 20,
        paddingVertical : 5,
        flexDirection : 'row',
        justifyContent : 'center',
        borderRadius : 50
    },
    textButton : {
        fontSize : 15,
        color : '#FFF'
    },
    iconStyle : {
        fontSize : 20,
        color : '#FFF'
    }
})

export { modal }