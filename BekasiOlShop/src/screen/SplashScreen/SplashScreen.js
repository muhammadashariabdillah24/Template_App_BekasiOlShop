import React from 'react'
import { 
    View,
    Image
} from 'react-native'
import { splashScreen } from '../../style/SplashScreen/SplashScreenStyle'

class SplashScreen extends React.Component {

    componentDidMount(){
        setTimeout(() => {
            
            this.props.navigation.replace('Login')
        }, 3000)
    }

    render() {
        return (

            <View style={splashScreen.container}>
                <View style={splashScreen.accomodateFrame}>
                    <View style={splashScreen.accomodateContent}>
                        <Image 
                            style={splashScreen.viewImage}
                            source={{uri : 'https://i.ibb.co/jhpBX55/Group-48-1.png'}}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

export { SplashScreen }
