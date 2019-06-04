import {BehaviorSubject} from 'rxjs';

const registered = {};
class TextEmiterRegister {

    registerNew(name) {
        if (!name || registered[name]) {
            throw new Error("Não pode registar sem nome nem registrar duas vezes")
        }
        registered[name] = new BehaviorSubject('');
    }

    getRegistered(name) {
        if (!registered[name]){
            this.registerNew(name);
        }
        return registered[name];
    }

}

const register = new TextEmiterRegister();

export default register;