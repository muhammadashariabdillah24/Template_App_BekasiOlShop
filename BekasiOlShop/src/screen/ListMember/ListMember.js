import React from 'react'
import { 
    Text, 
    View,
    Image,
    ScrollView,
    Pressable,
    Alert
} from 'react-native'
import { modal } from '../../style/Modal/ModalStyle'
import { member } from '../../style/ListMember/ListMemberStyle'
import { PropsModal } from '../../component/PropsModal'

class ListMember extends React.Component {

    constructor(props){
        super(props)

        this.state = {

            visible : false
        }
    }

    shouldComponentUpdate(theState){

        if(this.state.visible !== theState){

            return true
        }
    }

    componentDidUpdate(){

        console.log(this.state.visible);
    }

    changeState = (visible) => {

        this.setState({
            visible : visible 
        })
    }


    render() {
        return (
            <View style={member.container}>

            <PropsModal 
                AnimationType="fade"
                TheVisible={this.state.visible}
                StyleModalContainer={modal.container}
                StyleModalTitleText={modal.titleText}
                ModalTitleText="Pilih Tindakan"
                StyleAccomodateModalButton={modal.accomodateButton}
                StyleButtonClose={modal.buttonClose}
                ButtonClose={() => {
                    
                    this.changeState(!this.state.visible)
                }}
                StatusBar={true}
                StyleTextButtonClose={modal.textButton}
                NameIconClose="close-thick"
                StyleIconClose={modal.iconStyle}
                TextClose="Close"

                // Button Chat
                StyleButtonNextChat={modal.buttonNextChat}
                ModalOnPressButtonNextChat={() => {
                    this.props.navigation.push('InboxArea')
                }}
                StyleTextButtonNextChat={modal.textButton}
                NameIconChat="message-processing"
                StyleIconChat={modal.iconStyle}
                TextButtonNextChat="Chat"

                // Button Call
                StyleButtonNextCall={modal.buttonNextCall}
                ModalOnPressButtonNextCall={() => {
                    this.props.navigation.push('CallArea')
                }}
                StyleTextButtonNextCall={modal.textButton}
                NameIconCall="phone"
                StyleIconCall={modal.iconStyle}
                TextButtonNextCall="Call"

            />

                <ScrollView style={member.accomodateBody}>

                    <Pressable 
                    style={member.viewMember}
                    onLongPress={() => {
                        this.changeState(true)
                    }}
                    >
                        <View style={member.accomodateImageAndNameMember}>
                            <Image 
                                source={require('../../assets/Image/Kak_Wily.jpeg')}
                                style={member.imageMember}
                            />

                            <View style={member.viewNameMember}>
                                <Text style={member.textNameMember}>Abdul</Text>
                            </View>
                        </View>

                        <View style={member.viewLevel}>
                            <Text style={member.textLevel}>1</Text>
                        </View>
                    </Pressable>

                </ScrollView>
            </View>
        )
    }
}

export { ListMember }

