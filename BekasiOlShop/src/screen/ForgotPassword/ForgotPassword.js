import React from 'react'
import { 
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native'
// Import ForgotPasswordStyle
import { forgotPassword } from '../../style/ForgotPassword/ForgotPasswordStyle'
//

// Import Props Component For propsAllButton
import { 
    PropsTouchAbleOpacity,
    PropsButton,
    PropsTouchAbleNativeFeedBack
} from '../../component/PropsAllButton'
//

// Import Props Component For propsTextInput
import { PropsTextInput } from '../../component/PropsTextInput'

class ForgotPassword extends React.Component {

    constructor(props){
        super(props)

        this.state = {

            email : ''
        }
    }

    componentDidUpdate(){
        console.log(this.state);
    }

    render() {
        return (

            <View style={forgotPassword.container}>
                <View style={forgotPassword.accomodateView}>
                    <View style={forgotPassword.viewHeader}>
                        <Image 
                            style={forgotPassword.viewForgotPasswordImage}
                            source={{uri : 'https://i.ibb.co/HBj5J1m/Group-44.png'}}
                        />

                        <Text style={forgotPassword.texForgotPassword}>Forgot Password</Text>
                    </View>

                    <View style={forgotPassword.viewBody}>

                        <Text style={forgotPassword.textUpTextInput}>Please input your email</Text>
                        <PropsTextInput 
                            StyleTextInput={forgotPassword.viewTextInput}
                            IconImage="email"
                            PaddingIconImage={10}
                            TextPlaceholder="Enter Your Email"
                            TextColorPlaceholder="#A7A7A7"
                            Type="email"
                            ChangeTextInput={(text) => {

                                this.setState({
                                    email : text
                                })
                            }}
                        />

                        
                        <PropsTouchAbleOpacity 
                            styleTouchAbleOpacity={forgotPassword.styleTouchAbleOpacity}
                            styleTextTouchAbleOpacity={forgotPassword.textTouchAbleOpacity}
                            textTouchAbleOpacity=" Submit"
                            iconName="send-outline"
                            iconStyle={{fontSize : 20}}
                            onPressTouchAbleOpacity={() => {

                                Alert.alert(`Email : ${this.state.email}`)
                            }}
                        />

                        <View style={forgotPassword.accomodateViewLink}>
                            
                            <PropsTouchAbleOpacity 
                                styleTouchAbleOpacity={forgotPassword.viewButtonLinkTop}
                                styleTextTouchAbleOpacity={forgotPassword.viewTextLink}
                                onPressTouchAbleOpacity={() => {

                                    this.props.navigation.goBack('Login')
                                }}
                                iconName="arrow-back-outline"
                                textTouchAbleOpacity=" Back To Login"
                            />

                            <PropsTouchAbleOpacity 
                                styleTouchAbleOpacity={forgotPassword.viewButtonLinkTop}
                                styleTextTouchAbleOpacity={forgotPassword.viewTextLink}
                                onPressTouchAbleOpacity={() => {

                                    this.props.navigation.push('Registration')
                                }}
                                iconName="person-add-outline"
                                textTouchAbleOpacity=" Create Your Account"
                            />
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export { ForgotPassword }