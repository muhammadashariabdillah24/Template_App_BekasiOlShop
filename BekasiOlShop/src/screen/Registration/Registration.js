import React from "react"
import { 
    View,
    Text,
    Image,
    Alert
} from "react-native"
import { registration } from "../../style/Registration/RegistrationStyle"
// Import Props Component For propsAllButton
import { 
    PropsTouchAbleOpacity
} from '../../component/PropsAllButton'
//

// Import Props Component For propsTextInput
import { PropsTextInput } from '../../component/PropsTextInput'
// Import Async Storage
import AsyncStorage from "@react-native-async-storage/async-storage"

class Registration extends React.Component {

    constructor(props){
        super(props)

        this.state = {

            user : {
                username : '',
                email : '',
                password : '',
                reTypepassword : ''
            }
        }
    }

    setUser(){

        let convert = JSON.stringify(this.state.user)

        this.setState({user : convert}, () => {
            AsyncStorage.setItem('userRegis', convert)
        })
    }

    render() {
        return (
            <View style={registration.container}>
                <View style={registration.accomodateView}>
                    <View style={registration.viewHeader}>
                        <Image 
                            style={registration.viewRegistrationImage}
                            source={{uri : 'https://i.ibb.co/sp7vRRy/Group-46-1.png'}}
                        />
                        <Text style={registration.textRegistration}>Registration</Text>
                    </View>

                    <View style={registration.viewBody}>

                        <PropsTextInput 
                            IconImage="people"
                            PaddingIconImage={10}
                            StyleTextInput={registration.viewTextInput}
                            TextPlaceholder="Enter Your Username"
                            TextColorPlaceholder="#A7A7A7"
                            // Type="username"
                            ChangeTextInput={(Inputusername) => {

                                let userName = this.state.user
                                userName.username = Inputusername
                                this.setState({
                                    userName
                                })
                            }}
                        />

                        <PropsTextInput 
                            IconImage="email"
                            PaddingIconImage={10}
                            StyleTextInput={registration.viewTextInput}
                            TextPlaceholder="Enter Your Email"
                            TextColorPlaceholder="#A7A7A7"
                            Type="email"
                            ChangeTextInput={(Inputemail) => {

                                let Email = this.state.user
                                Email.email = Inputemail
                                this.setState({
                                    Email
                                })
                            }}
                        />

                        <PropsTextInput 
                            IconImage="lock"
                            PaddingIconImage={10}
                            StyleTextInput={registration.viewTextInput}
                            TextPlaceholder="Enter Your Password"
                            TextColorPlaceholder="#A7A7A7"
                            Type="password"
                            ChangeTextInput={(Inputpassword) => {

                                let Password = this.state.user
                                Password.password = Inputpassword
                                this.setState({
                                    Password
                                })
                            }}
                        />

                        <PropsTextInput 
                            IconImage="lock"
                            PaddingIconImage={10}
                            StyleTextInput={registration.viewTextInput}
                            TextPlaceholder="Re-Type Your Password"
                            TextColorPlaceholder="#A7A7A7"
                            Type="password"
                            ChangeTextInput={(InputreTypepassword) => {

                                let ReTypePassword = this.state.user
                                ReTypePassword.reTypepassword = InputreTypepassword
                                this.setState({
                                    ReTypePassword
                                })
                            }}
                        />

                        <PropsTouchAbleOpacity 
                            styleTouchAbleOpacity={registration.styleTouchAbleOpacity}
                            styleTextTouchAbleOpacity={registration.textTouchAbleOpacity}
                            textTouchAbleOpacity=" Join"
                            iconName="person-outline"
                            iconStyle={registration.viewTextIcon}
                            onPressTouchAbleOpacity={() => {
                                
                                console.log(this.state.user)
                                this.setUser()
                                Alert.alert('Selamat, Anda telah terdaftar. Silahkan login')
                                this.props.navigation.navigate('Login')
                            }}
                        />
                        {/*  */}

                        <View style={registration.accomodateViewLink}>
                            <PropsTouchAbleOpacity 
                                styleTextTouchAbleOpacity={registration.viewTextLink}
                                textTouchAbleOpacity="Already Have An Account ?"
                                onPressTouchAbleOpacity={() => {
                                    this.props.navigation.navigate('Login')
                                }}
                            />
                        </View>

                    </View>
                </View>
            </View>
        )
    }
}

export { Registration }