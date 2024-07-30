import React from 'react';
import ReactDom from 'react-dom';
import from from '../Css/from.css';

class FromAndImage extends React.Component {

    show = (e) => {
        this.setState({ show: e.target.value });
    }

    context = (c) => {
        this.setState({ context: c.target.value });
    }
    address = (a) => {
        this.setState({ address: a.target.value });
    }

    user = (u) => {
        this.setState({ user: u.target.value });
    }
    pass = (p) => {
        this.setState({ pass: p.target.value });
    }

    render() {
        return <>
            <div className="Fromandimage">
                <div className="row" >
                    <div className="col-md-6 froms">
                        <label for="Name" >Name:</label>
                        <input type="text" id="username" className="username" onChange={(e) => this.show(e)}></input>
                        <br></br>
                        <label for="Name">Contact:</label>
                        <input type="text" id="username" className="username" onChange={(d) => this.context(d)} ></input>
                        <br></br>
                        <label for="Name">Address:</label>
                        <input type="text" id="username" className="username" onChange={(a) => this.address(a)}></input>
                        <br></br>
                        <label for="Name">Username:</label>
                        <input type="text" id="username" className="username" onChange={(u) => this.user(u)}></input>
                        <br></br>
                        <label for="Name">Password:</label>
                        <input type="text" id="username" className="username" onChange={(p) => this.pass(p)}></input>
                        <br></br>
                        <input type="submit" value="submit" className="submit"></input>


                    </div>

                    <div className="col-md-6 img" >
                        <h1>General Practitioner (GP):</h1>
                        <p> Provides comprehensive and ongoing care for a wide range of health issues. They are often the first point of contact for patients and handle routine check-ups, preventive care, and treatment of common illnesses.

                        </p>
                        <h1>Pediatrician:</h1>
                        <p> Specializes in the medical care of infants, children, and adolescents. They focus on growth, development, and common childhood illnesses.</p>
                        <h1>Internist:</h1>
                        <p> Focuses on adult medicine and the diagnosis and treatment of chronic and complex diseases in adults. They often serve as primary care physicians for adults.</p>
                        <h1>Cardiologist:</h1>
                        <p> Specializes in diagnosing and treating heart conditions and diseases. They deal with issues related to the heart and blood vessels, such as hypertension and coronary artery disease</p>
                        <h1>Dermatologist:</h1>
                        <p> Focuses on the diagnosis and treatment of skin conditions and diseases. This includes everything from acne and eczema to skin cancer.

                        </p>
                    </div>


                </div>


            </div>

        </>
    }
}
export default FromAndImage;