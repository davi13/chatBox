import React from 'react';
//import Connexion from './Connexion';
import Formulaire from './Formulaire';
import Messages from './Message';
import base from '../base';
//CSS
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../animation.css';


class App extends React.Component{
    state ={
        messages: {}
    }

    componentWillMount(){
        this.ref = base.syncState('/',{
            context : this,
            state: 'messages'
        })
    }

    componentDidUpdate(){
       //METTRE LE SCROLL EN BAS
       this.messages.scrollTo = this.messages.scrollHeight; 
    }

    addMessage = (message) => {
        //COPIER LE STATE
        const messages = {...this.state.messages};

        // ON AJOUTE LE MESSAGE AVEC UN CLE TIMESTAMP
        const timestamp = Date.now(); 
        messages[`messages-${timestamp}`] = message;
        //ON SUPRIME SI PLUS DE 10 MESSAGES
        Object.keys(messages).slice(0, -10).map(key =>  messages[key]=null);
        //METTRE A JOUR NOTRE STATE
        this.setState({ messages })
    };

    isUser = (pseudo) =>{
        return pseudo === this.props.params.pseudo
    };
    render(){
        // const messages = Object.keys(this.state.messages).map((key) => {return (<Messages key={key} />)});
        const messages = Object.keys(this.state.messages).map(key => <Messages key={key} details={this.state.messages[key]} isUser={this.isUser} />);
        
        return(
            <div className="box">
                <div>
                    <div className="messages" ref={input => this.messages = input}>
                        <ReactCSSTransitionGroup
                            component="div"
                            className="message"
                            transitionName="message"
                            transitionEnterTimeout={1000}
                            transitionLeaveTimeout={1000}
                        >
                            {/* <Messages  pseudo={this.props.params.pseudo} /> */ messages}
                        </ReactCSSTransitionGroup>    
                    </div>
                        <Formulaire 
                            addMessage={this.addMessage}
                            pseudo={this.props.params.pseudo}
                            length={140}
                        />
                </div>
            </div>
        )
    }

    static propTypes ={
        params: React.PropTypes.object.isRequired,
    }

}

export default App; 