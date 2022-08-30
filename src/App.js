import React,{ Component } from 'react'

class Form extends Component{
constructor(props){
	super(props)
	this.state = { ชื่อ:'',นามสกุล:'', อายุ:null,phoneNo:''}
	this.handleChange = this.handleChange.bind(this)
	this.handleSubmit = this.handleSubmit.bind(this)
}

// Form submitting logic, prevent default page refresh
handleSubmit(event){
	const {
		ชื่อ, นามสกุล, อายุ, วันเกิด, เบอร์โทร } = this.state
	event.preventDefault()
	alert(`
	____Your Details____\n
	ชื่อ : ${ชื่อ}
	นามสกุล : ${นามสกุล}
	อายุ : ${อายุ}
	เบอร์โทร : ${เบอร์โทร}
	`)
}


handleChange(event){
	this.setState({
	// Computed property names
	// keys of the objects are computed dynamically
	[event.target.name] : event.target.value
	})
}

// Return a controlled form i.e. values of the
// input field not stored in DOM values are exist
// in react component itself as state
render(){
	return(
	<form onSubmit={this.handleSubmit}>
		<label></label>
	Name:
    <input type="text" name="name" />
  
  <input type="submit" value="Submit" />
		
		<div>
		<label htmlFor='นามสกุล'>นามสกุล</label>
		<input
			name='นามสกุล'
			placeholder='นามสกุล'
			value={this.state.นามสกุล}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='อายุ'>อายุ</label>
		<input
			name='อายุ'
			placeholder='อายุ'
			value={this.state.อายุ}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<div>
	<label for="วันเกิด">วันเกิด:</label>
  <input type="date" id="birthday" name="birthday">
	</input>
	</div>
		</div>
		<div>
		<label htmlFor='เบอร์โทร'>เบอร์โทร</label>
		<input
			name='เบอร์โทร'
			placeholder='เบอร์โทร'
			value={this.state.เบอร์โทร}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<button>Create Account</button>
		</div>
	<div>
	<label for="favcolor">Select your favorite color:</label>
	<input type="color" id="favcolor" name="favcolor">
		</input>  
	</div>
	<div></div>

	</form>
	)
}
}

export default Form
