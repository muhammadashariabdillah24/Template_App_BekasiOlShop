import React from 'react'
import { 
    Text, 
    View,
    Image,
    ScrollView,
    TextInput
} from 'react-native'
import { inbox } from '../../style/ChatInbox/ChatInboxStyle'
import { PropsTouchAbleNativeFeedBack } from '../../component/PropsAllButton'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

class ChatInbox extends React.Component {
    render() {
        return (
            <View style={inbox.container}>
                <View style={inbox.accomodateHeader}>
                    <View style={inbox.accomodateImageAndName}>
                        <Image 
                            source={require('../../assets/Image/Kak_Wily.jpeg')}
                            style={inbox.imageProfil}
                        />

                        <View style={inbox.nameProfil}>
                            <Text style={inbox.textNameProfil}>Abdul</Text>
                        </View>
                    </View>

                    <View style={inbox.accomodateIcon}>
                        <View style={inbox.viewIcon}>
                            <PropsTouchAbleNativeFeedBack 
                                styleTouchAbleNativeFeedback={inbox.buttonIcon}
                                onPressTouchAbleNativeFeedBack={() => {
                                    
                                }}
                                iconName="call"
                                iconStyle={inbox.iconStyle}
                            />

                            <PropsTouchAbleNativeFeedBack 
                                styleTouchAbleNativeFeedback={inbox.buttonIcon}
                                onPressTouchAbleNativeFeedBack={() => {
                                    
                                }}
                                iconName="ellipsis-vertical"
                                iconStyle={inbox.iconStyle}
                            />
                        </View>
                    </View>
                </View>

                <ScrollView style={inbox.accomodateBody}>

                    <View style={inbox.accomodateMyChat}>
                        <View style={inbox.myChat}>
                            <Text style={inbox.myTextChat}>Hallo Teman Apa Kabarmu</Text>
                        </View>
                    </View>


                    <View style={inbox.accomodateEnemyChat}>
                        <View style={inbox.enemyChat}>
                            <Text style={inbox.enemyTextChat}>Alhamdullilah baik</Text>
                        </View>
                    </View>

                    <View style={inbox.accomodateMyChat}>
                        <View style={inbox.myChat}>
                            <Text style={inbox.myTextChat}>Hallo Teman Apa Kabarmu</Text>
                        </View>
                    </View>


                    <View style={inbox.accomodateEnemyChat}>
                        <View style={inbox.enemyChat}>
                            <Text style={inbox.enemyTextChat}>Alhamdullilah baik</Text>
                        </View>
                    </View>


                    <View style={inbox.accomodateMyChat}>
                        <View style={inbox.myChat}>
                            <Text style={inbox.myTextChat}>Hallo Teman Apa Kabarmu</Text>
                        </View>
                    </View>


                    <View style={inbox.accomodateEnemyChat}>
                        <View style={inbox.enemyChat}>
                            <Text style={inbox.enemyTextChat}>Alhamdullilah baik</Text>
                        </View>
                    </View>


                    <View style={inbox.accomodateMyChat}>
                        <View style={inbox.myChat}>
                            <Text style={inbox.myTextChat}>Hallo Teman Apa Kabarmu</Text>
                        </View>
                    </View>


                    <View style={inbox.accomodateEnemyChat}>
                        <View style={inbox.enemyChat}>
                            <Text style={inbox.enemyTextChat}>Alhamdullilah baik</Text>
                        </View>
                    </View>


                    <View style={inbox.accomodateMyChat}>
                        <View style={inbox.myChat}>
                            <Text style={inbox.myTextChat}>Hallo Teman Apa Kabarmu</Text>
                        </View>
                    </View>


                    <View style={inbox.accomodateEnemyChat}>
                        <View style={inbox.enemyChat}>
                            <Text style={inbox.enemyTextChat}>Alhamdullilah baik</Text>
                        </View>
                    </View>

                    <View style={inbox.accomodateMyChat}>
                        <View style={inbox.myChat}>
                            <Text style={inbox.myTextChat}>Hallo Teman Apa Kabarmu</Text>
                        </View>
                    </View>


                    <View style={inbox.accomodateEnemyChat}>
                        <View style={inbox.enemyChat}>
                            <Text style={inbox.enemyTextChat}>Alhamdullilah baik</Text>
                        </View>
                    </View>

                    <View style={inbox.accomodateMyChat}>
                        <View style={inbox.myChat}>
                            <Text style={inbox.myTextChat}>Hallo Teman Apa Kabarmu</Text>
                        </View>
                    </View>


                    <View style={inbox.accomodateEnemyChat}>
                        <View style={inbox.enemyChat}>
                            <Text style={inbox.enemyTextChat}>Alhamdullilah baik</Text>
                        </View>
                    </View>

                </ScrollView>

                <View style={inbox.accomodateColumnTypingAndMicrophone}>
                    <View style={inbox.textInputTypingMessage}>
                        <TextInput 
                            placeholder="Ketik Pesan"
                            placeholderTextColor="#FFF"
                            inlineImageLeft="plus"
                            inlineImagePadding={10}
                            style={inbox.longTextInput}
                        />
                    </View>

                    <View style={inbox.viewMicroPhone}>
                        <Icon 
                            name="microphone"
                            style={inbox.iconMicroPhone}
                        />
                    </View>
                </View>


            </View>
        )
    }
}

export { ChatInbox } 