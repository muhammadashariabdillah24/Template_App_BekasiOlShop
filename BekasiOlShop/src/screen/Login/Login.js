import React from 'react'
import { 
    View,
    Text,
    Image,
    Alert,
} from 'react-native'

// Import Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage'
// 

// Import Style Login
import { login } from '../../style/Login/LoginStyle'
// 

// Import Props Component For propsAllButton
import { 
    PropsTouchAbleOpacity,
    PropsTouchAbleNativeFeedBack
} from '../../component/PropsAllButton'
//

// Import Props Component For propsTextInput
import { PropsTextInput } from '../../component/PropsTextInput'

class Login extends React.Component {

    constructor(props){
        super(props)

        this.state = {

            username : '',
            password : '',
            iconName : 'eye-off-outline',
            controlPassword : true,
            dataUser : []

        }
    }

    controlPassword = () => {

        let changeEntry = this.state.controlPassword ? false : true
        let changeNameIcon = this.state.controlPassword ? 'eye-outline' : 'eye-off-outline'

        this.setState({
            controlPassword : changeEntry,
            iconName : changeNameIcon
        })

    }

    componentDidMount(){

        AsyncStorage.getItem('userRegis')
        .then((value) => {

            let convert = JSON.parse(value)
            
            this.setState({
                dataUser : [convert.username, convert.password]
            })
        })

    }


    render() {

        return (
            <View style={login.container}>
                <View style={login.accomodateView}>
                    {/* Component Header */}
                    <View style={login.viewHeader}>
                        <Image 
                            style={login.viewLoginImage}
                            source={{uri : 'https://i.ibb.co/cCMJFx1/Group-4.png'}}
                        />
                        <Text style={login.textLogin}>Login</Text>
                    </View>
                    {/*  */}

                    {/* Component Body */}
                    <View style={login.viewBody}>

                        <View style={[login.viewFormLogin]}>

                            <PropsTextInput 
                                StyleTextInput={login.viewTextInput}
                                IconImage="people"
                                PaddingIconImage={10}
                                TextPlaceholder="Enter Your Username"
                                TextColorPlaceholder="#A7A7A7"
                                Type="username"
                                ChangeTextInput={(text) => {

                                    this.setState({
                                        username : text
                                    })
                                }}
                            />

                        </View>

                        <View style={[login.viewFormLogin]}>

                            <PropsTextInput
                                StyleTextInput={login.viewTextInput}
                                IconImage="lock"
                                PaddingIconImage={10}
                                TextPlaceholder="Enter Your Password"
                                TextColorPlaceholder="#A7A7A7"
                                Type="password"
                                PasswordText={this.state.controlPassword}
                                ChangeTextInput={(text) => {
                                    this.setState({
                                        password : text
                                    })
                                }}
                            />

                            <View style={login.viewIcon}>
                                <PropsTouchAbleNativeFeedBack 
                                    onPressTouchAbleNativeFeedBack={() => {

                                        this.controlPassword()
                                    }}
                                    iconName={this.state.iconName}
                                    iconStyle={login.viewTextIcon}
                                />
                            </View>

                        </View>

                        <PropsTouchAbleOpacity
                            styleTouchAbleOpacity={login.styleTouchAbleOpacity}
                            onPressTouchAbleOpacity={() => {
                                
                                this.state.username == this.state.dataUser[0] && this.state.password == this.state.dataUser[1] ? this.props.navigation.push('DrawerComponent') : Alert.alert('Username Dan Password Salah')
                                console.log(this.state.dataUser)

                            }}
                            textTouchAbleOpacity=" Login"
                            iconName="enter-outline"
                            iconStyle={{fontSize: 20}}
                            styleTextTouchAbleOpacity={login.textTouchAbleOpacity}
                        />

                        <View style={login.accomodateViewLink}>
                            
                            <PropsTouchAbleOpacity 
                                styleTouchAbleOpacity={login.viewButtonLinkLeft}
                                onPressTouchAbleOpacity={() => {

                                    this.props.navigation.push('ForgotPassword')

                                }}
                                styleTextTouchAbleOpacity={login.viewTextLink}
                                textTouchAbleOpacity="Forgot Password ?"
                            />

                            <PropsTouchAbleOpacity 
                                styleTouchAbleOpacity={login.viewButtonLinkRight}
                                onPressTouchAbleOpacity={() => {

                                    this.props.navigation.navigate('Registration')
                                }}
                                styleTextTouchAbleOpacity={login.viewTextLink}
                                textTouchAbleOpacity="Create Your Account"
                            />
                            
                        </View>
                    </View>
                    {/*  */}

                </View>
            </View>
        )
    }
}

export { Login }