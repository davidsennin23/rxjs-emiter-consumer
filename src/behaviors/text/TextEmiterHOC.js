import React from 'react';
import register from './TextEmiterRegister'

const TextEmiter = (name) => {

    return (Component) => {
        const emiter = register.getRegistered(name || "default");

        return class extends React.Component {
            onValueChange = (value) => {
                console.log(value);
                emiter.next(value);
            }

            render() {
                return (
                    <Component onValueChange={this.onValueChange}></Component>
                );
            }
        }

    }
}

export default TextEmiter;