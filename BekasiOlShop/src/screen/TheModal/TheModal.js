import React from 'react'
import { 
    Text, 
    View,
    Modal,
    TouchableOpacity
} from 'react-native'
import { modal } from '../../style/Modal/ModalStyle'
import { PropsTouchAbleOpacity } from '../../component/PropsAllButton'

class TheModal extends React.Component {
    constructor(props){
        super(props)

        this.state = {

            modalVisible : false
        }
    }

    setModal = (visible) => {

        this.setState({
            modalVisible : visible
        })
    }

    render() {
        return (
            <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.modalVisible}
            >
                <View style={modal.container}>
                    <Text style={modal.titleText}></Text>

                    <View style={modal.accomodateButton}>
                        <PropsTouchAbleOpacity 
                            styleTouchAbleOpacity={modal.buttonNextChat}
                            onPressTouchAbleOpacity={() => {
                                
                            }}
                        />
                    </View>
                </View>
            </Modal>
        )
    }
}

export { TheModal }
