import { StyleSheet } from "react-native";

const profil = StyleSheet.create({

    container : {

        flex : 1,
        backgroundColor : '#FFF'
    },

    // Style For Header
    
    viewHeader : {
        
        marginTop : 40,
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center'
    },
    accomodateView : {
        
        flex : 1,
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center'
    },
    viewProfilImage : {

        width : 100,
        height : 100,
    },
    textMyProfil : {

        color : '#c0c0c0',
        fontSize : 20,
        textAlign : 'center',
        marginTop : 10
    },
    //

    // Style For Biodata
    viewBody : {
        alignSelf : 'center',
        marginTop : 25,
        // marginLeft : 20,
    },
    accomodateBiodata : {
        flexDirection : 'column',
    },
    viewBiodata : {
        borderBottomColor : '#E76E6E',
        borderBottomWidth : 1,
        marginVertical : 20,
        paddingBottom : 10,
    },
    textDeclaration : {
        fontSize : 15,
        color : '#A7A7A7'
    },
    textBiodata : {
        fontSize : 18,
        color : '#E76E6E',
        fontWeight : 'bold'
    },
    iconStyle : {
        fontSize : 30,
        color : '#E76E6E'
    },
    

    // Style For Link
    accomodateLink : {
        marginTop : 20,
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    iconStyleForLink : {
       fontSize : 16,
       color : '#5980E3' 
    },
    textLink : {
        color : '#5980E3',
        fontSize : 12
    }
    // 

})

export default profil