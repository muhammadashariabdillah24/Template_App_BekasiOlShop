import { StyleSheet } from "react-native";

const member = StyleSheet.create({

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
    viewMember : {
        borderBottomColor : '#E76E6E',
        borderBottomWidth : 1,
        padding : 5,
        marginVertical : 15,
        flexDirection : 'row',
        justifyContent : 'space-between',
        width : '100%'
    },

    // One Column
    accomodateImageAndNameMember : {
        flexDirection : 'row',
        justifyContent : 'flex-start'
    },
    imageMember : {
        width : 50,
        height : 50,
        borderRadius : 100
    },
    viewNameMember : {
        flexDirection : 'column',
        justifyContent : 'center',
        left : 10
    },
    textNameMember : {
        fontSize : 15,
        color : '#A7A7A7'
    },
    // 

    viewLevel : {
        flexDirection : 'column',
        justifyContent : 'center',
    },
    textLevel : {
        fontSize : 15,
        color : '#A7A7A7',
        borderRadius : 100,
        paddingHorizontal : 10,
        backgroundColor : '#E76E6E'
    },
})

export { member }