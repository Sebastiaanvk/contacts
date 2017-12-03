import React from 'react'
import ImageInput from './ImageInput'
import { Link } from 'react-router-dom'
import serializeForm from 'form-serialize'

class CreateContact extends React.Component{

  handleSubmit = (e) => {
    e.preventDefault();
    const values = serializeForm(e.target, { hash: true })
    this.props.onCreateContact(values)
  }

  render(){
    return (
      <div>
        <Link to='/' className='close-create-contact'/>
        <form onSubmit={this.handleSubmit} className='create-contact-form'>
          <ImageInput
            className='create-contact-avatar-input'
            name='avatarURL'
            maxHeight={64}
          />
          <div className='create-contact-details'>
            <input name='name' placeholder='name' type='text'/>
            <input name='email' placeholder='email' type='text'/>
            <button>Add Contact</button>
          </div>
        </form>
      </div>
      )
  }
}


export default CreateContact
