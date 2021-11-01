import React from 'react'
import { 
    ScrollView,
    Text, 
    View,
    Image,
} from 'react-native'
import profil from '../../style/Profile/ProfileStyle'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AsyncStorage from '@react-native-async-storage/async-storage'

class MyProfile extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            status : true,
            setId : '',
            setBiodata : []
        }
    }

    componentDidMount(){

        AsyncStorage.getItem('userRegis')
        .then((value) => {
            
            let convert = JSON.parse(value)

            this.setState({
                setBiodata : [convert.username, convert.email]
            })
        })

    }

    render() {
        console.log(`Data Dari State Biodata ${this.state.setBiodata}`);
        return (
            <ScrollView style={profil.container}>
                <View style={profil.accomodateView}>
                    <View style={profil.viewHeader}>
                        <Image 
                            style={profil.viewProfilImage}
                            source={{uri : 'https://i.ibb.co/cCMJFx1/Group-4.png'}}
                        />
                        <Text style={profil.textMyProfil}>Profil</Text>
                    </View>

                    <View style={profil.viewBody}>
                        {/* <View style={profil.accomodateBiodata}>
                            <View style={profil.viewBiodata}>
                                <Text style={profil.textDeclaration}><Icon name="account-circle" style={profil.iconStyle} /> Nama : <Text style={profil.textBiodata}>{this.state.setBiodata[0]}</Text></Text>
                            </View>

                            <View style={profil.viewBiodata}>
                                <Text style={profil.textDeclaration}><Icon name="numeric-9-plus-circle" style={profil.iconStyle} /> Umur  : <Text style={profil.textBiodata}>{this.state.setBiodata[1]}</Text></Text>
                            </View>

                            <View style={profil.viewBiodata}>
                                <Text style={profil.textDeclaration}><Icon name="calendar-month" style={profil.iconStyle} /> Data : <Text style={profil.textBiodata}>{this.state.setBiodata[2]}</Text></Text>
                            </View>

                            <View style={profil.viewBiodata}>
                                <Text style={profil.textDeclaration}><Icon name="information" style={profil.iconStyle} /> Status : <Text style={profil.textBiodata}>{this.state.setBiodata[3]}</Text></Text>
                            </View>
                        </View> */}

                        <View style={profil.accomodateBiodata}>
                            <View style={profil.viewBiodata}>
                                <Text style={profil.textDeclaration}><Icon name="account-circle" style={profil.iconStyle} /> Username : <Text style={profil.textBiodata}>{this.state.setBiodata[0]}</Text></Text>
                            </View>

                            <View style={profil.viewBiodata}>
                                <Text style={profil.textDeclaration}><Icon name="numeric-9-plus-circle" style={profil.iconStyle} /> Email  : <Text style={profil.textBiodata}>{this.state.setBiodata[1]}</Text></Text>
                            </View>
                        </View>

                        <View style={profil.accomodateLink}>
                            <Text style={profil.textLink} onPress={() => {this.props.navigation.goBack('DrawerComponent')}}><Icon name="home-variant" style={profil.iconStyleForLink} /> Back To Home</Text>
                            <Text style={profil.textLink} onPress={() => {this.props.navigation.push('EditProfile')}}><Icon name="tooltip-edit" style={profil.iconStyleForLink}/> Edit Profil</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

export { MyProfile }
