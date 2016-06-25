/**
 * Created by fanhl on 2016/06/25.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class Button extends Component {
    /**
     * 构造方法
     *
     * @param props
     */
    constructor(props) {
        super(props);
        //初始状态
        this.state = {
            disabled: false
        };
    }

    onPress = ()=> {
        console.log(1);
        const {onPress}=this.props;
        this.disable();
        if (onPress) onPress(this.enable);//异步
    };
    enable = ()=> {
        console.log(4);
        this.setState({disabled: false});
    };
    disable = ()=> {
        console.log(2);
        this.setState({disabled: true});
    };

    render() {
        const {text}=this.props;
        return (
            <TouchableOpacity
                disabled={this.state.disabled}
                style={[styles.button, this.state.disabled && styles.disabled]}
                onPress={this.onPress}>
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        marginTop: 100,
        height: 40,
        width: 200,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
    },
    buttonText: {
        fontSize: 16,
        color: 'white'
    },
    disabled: {
        backgroundColor: 'gray'
    }
});

