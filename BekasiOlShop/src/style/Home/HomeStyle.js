import { StyleSheet } from "react-native";

const home = StyleSheet.create({

    container : {
        flex : 1,
        backgroundColor : '#FFF',
        alignContent : 'center'
    },

    // Style Header
    accomodateHeader : {
        flex : 2,
        backgroundColor : '#E76E6E',
        alignItems : 'center',
        flexDirection : 'column',
        justifyContent : 'center',
        paddingTop : 10,
        paddingBottom : 20
    },
    logoImage : {
        width : 80,
        height : 80,
    },
    textLogo : {
        color : '#FFF',
        fontSize : 10,
        paddingTop : 10
    },
    // 

    // Style Main
    accomodateMain : {
        flex : 2,
        alignItems : 'center',
        flexDirection : 'column',
        justifyContent : 'center'
    },
    mainContent : {
        alignItems :'center',
        flexDirection : 'row',
        justifyContent : 'center',
        flexWrap : 'wrap',
    },
    iconContent : {
        width : 30,
        height : 30,
        marginVertical : 40,
        marginHorizontal : 40
    },
    // 

    // Style Body
    accomodateBody : {
        flex : 5,
        alignItems : 'center',
        flexDirection : 'column',
        justifyContent : 'center'
    },
    accomodateContent : {
        alignItems : 'center',
        flexDirection : 'row',
        justifyContent : 'center',
        flexWrap : 'wrap',
        backgroundColor : '#FFF'  
    },
    bodyContent : {
        marginHorizontal : 5,
        marginVertical : 20,
        alignItems : 'center'
    },
    nameContent : {
        fontSize : 20,
        color : '#E76E6E'
    },
    widthLine : {
        color : '#E76E6E'
    },
    imageSize : {
        width : 100,
        height : 100
    },
    //

    // Style For Name Product And Price
    textNameProduct : {
        color : '#CDBFBF',
        fontSize : 10
    },
    textPrice : {
       color : '#13D46F',
       fontSize : 10 
    },
    // 

    // Style Button
    buttonAddCart : {
        paddingHorizontal : 22,
        paddingVertical : 5,
        alignContent : 'center',
        backgroundColor : '#F29D1E',
        marginVertical : 10,
        borderRadius : 10
    },
    styleTextButtonAddToCart : {
        fontSize : 10,
        color : '#FFF'
    },
    buttonCash : {
        paddingHorizontal : 22,
        paddingVertical : 5,
        alignContent : 'center',
        backgroundColor : '#0FA958',
        borderRadius : 10
    },
    styleTextButtonCash : {
        fontSize : 10,
        color : '#FFF'
    }
    // 
})


export { home }