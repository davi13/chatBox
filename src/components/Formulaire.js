import React from 'react';

class Formulaire extends React.Component{

    state={
        length: this.props.length
    }
    createMessage = (event) => {

        event.preventDefault();

        const message = {
            message: this.message.value,
            pseudo: this.props.pseudo
        }

        this.props.addMessage(message);

        this.messageForm.reset();

        const length = this.props.length;

        this.setState({ length })
    }
    compteur = (event) => {
        const length = this.props.length - this.message.value.length;

        console.log(length);
        
        this.setState({length});
    };
    render(){
        return(
            <form 
                className="form"
                onSubmit={(event) => {this.createMessage(event)}}
                ref={(input) => {this.messageForm = input}}
            >
                <textarea 
                required
                maxLength={this.props.length}
                ref={ (input) => {this.message = input}}
                onChange={(event => {this.compteur(event)})}
                >
                </textarea>

                <div className="info">{this.state.length}</div>

                <button type="submit">Envoyer</button>

            </form>
        )
    }

    static propTypes ={
        addMessage: React.PropTypes.func.isRequired,
        pseudo : React.PropTypes.string.isRequired,
        length : React.PropTypes.number.isRequired
    }

}

export default Formulaire;