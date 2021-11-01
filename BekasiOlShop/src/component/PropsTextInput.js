import React from 'react'
import { TextInput, View } from "react-native";

class PropsTextInput extends React.Component {

    render() {
        return (
            <View>
        
            <TextInput
                style={this.props.StyleTextInput}
                inlineImageLeft={this.props.IconImage}
                inlineImagePadding={this.props.PaddingIconImage}
                placeholder={this.props.TextPlaceholder}
                placeholderTextColor={this.props.TextColorPlaceholder}
                secureTextEntry={this.props.PasswordText}
                autoCompleteType={this.props.Type}
                onChangeText={this.props.ChangeTextInput}
            />
            </View>
        )
    }
}

export { PropsTextInput }