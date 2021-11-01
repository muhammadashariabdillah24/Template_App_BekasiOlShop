import React from 'react'
import { Button, TouchableNativeFeedback, TouchableOpacity, Text } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

class PropsTouchAbleOpacity extends React.Component {

    render() {
        return (
            <TouchableOpacity
            style={this.props.styleTouchAbleOpacity}
            onPress={this.props.onPressTouchAbleOpacity}
            >
            <Text style={this.props.styleTextTouchAbleOpacity}>
                <Ionicons 
                    name={this.props.iconName}
                    style={this.props.iconStyle}
                />
                {this.props.textTouchAbleOpacity}
            </Text>
            </TouchableOpacity>
        )
    }
}


class PropsTouchAbleNativeFeedBack extends React.Component {

    render() {
        return (
            <TouchableNativeFeedback
            style={this.props.styleTouchAbleNativeFeedback}
            onPress={this.props.onPressTouchAbleNativeFeedBack}
            >
                <Ionicons 
                    name={this.props.iconName}
                    style={this.props.iconStyle}
                />
            </TouchableNativeFeedback>
        )
    }
}


class PropsButton extends React.Component {

    render() {
        return (
            <Button 
                title={this.props.titleButton}
                onPress={this.props.onPressButton}
            />
        )
    }
}

export { PropsTouchAbleOpacity, PropsTouchAbleNativeFeedBack, PropsButton }