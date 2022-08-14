import { Component } from "react";
import shortid from "shortid";

class Form extends Component {
    state = {
        name: '',
        tag: '',
        experience: 'junior',
        licence: false,
    };
    nameInputId = shortid.generate();
    tagInputID = shortid.generate();

  hendleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

    hendleSubmit = event => {
        event.preventDefault();
    
        this.props.onSubmit(this.state);

        this.reset();
    };

    hendleLicenceChange = event => {
        this.setState({ licence: event.currentTarget.checked });
    };


    reset = () => {
        this.setState({ name: '', tag: '' })
    };
    
    render() {
        return (
      <form onSubmit={this.hendleSubmit}>
            <label htmlFor={this.nameInputId}>
                    Name <input
                        type="text"
                        name='name'
                        value={this.state.name}
                        onChange={this.hendleChange}
                        id={this.nameInputId}
                    />
            </label>
            <label htmlFor={this.tagInputID}>
                    Tag <input
                        type="text"
                        name='tag'
                        value={this.state.tag}
                        onChange={this.hendleChange}
                        id={this.tagInputID}
                    />
                </label>
                
                <p>Ваш уровень:</p>
                <label>
                    <input
                        type="radio"
                        name="experience"
                        value="junior"
                        onChange={this.hendleChange}
                        checked={this.state.experience === 'junior'}
                    />Junior
                </label>
                <label>
                    <input
                        type="radio"
                        name="experience"
                        value="middle"
                        onChange={this.hendleChange}
                        checked={this.state.experience === 'middle'}
                    />Middle
                </label>
                <label>
                    <input
                        type="radio"
                        name="experience"
                        value="senior"
                        onChange={this.hendleChange}
                        checked={this.state.experience === 'senior'}
                    />Senior
                </label>
                <br />
                <label>
                    <input type="checkbox" name="licence" checked={this.state.licence} onChange={this.hendleLicenceChange} /> Согласен с условием
                </label>

            <button type='submit' disabled={!this.state.licence}>Отправить</button>
          </form>
  )  
}
}

export default Form;