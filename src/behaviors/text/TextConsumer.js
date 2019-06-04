import React from 'react';
import register from './TextEmiterRegister'

const TextConsumer = (name) => {
    return (Component) => {
        
        const emiter = register.getRegistered(name || "default");

        return class extends React.Component {
            state = {text: ''}
            componentDidMount() {
                emiter.subscribe(this.changeText);
                console.log("Subscribe");
            }

            componentWillUnmount() {
                emiter.unsubscribe(this.changeText);
                console.log("Unsubscribe");
            }

            changeText = (value) => {
                console.log(`Changed ${value}`);
                this.setState({
                    text: value
                })
            }

            render() {
                const {text} = this.state;
                return (
                    <Component text={text}></Component>
                );
            }

        }

    }
}

export default TextConsumer;