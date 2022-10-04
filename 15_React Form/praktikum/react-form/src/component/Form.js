import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import { Form, Dropdown, DropdownButton, FloatingLabel, Button } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

function FormBootcamp() {
  const initialValues = {
    nama:"",
    email: "",
    noHandphone: "",
    pendidikan:"",
    kelas: "",
    harapan: "",
  }

  const [formValues, setformValues] = useState(initialValues);
  const [formErrors, setformErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value} = e.target;
    console.log(name, value);
    setformValues({...formValues, [name] : value});
    // console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // validate(formValues);
    // setformErrors(validate(formValues));
    setIsSubmit(true);
    alert(formValues)
    console.log(formValues);
  }

  useEffect(()=> {
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors])
  const validate = (values) => {
    const error = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.nama) {
      error.nama = "Nama is required!";
    }
    if (!values.email) {
      error.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      error.email = "This is not a valid email format!";
    }
    if (!values.noHandphone) {
      error.noHandphone = "No Handphone is required";
    } else if (values.noHandphone.length < 10) {
      error.noHandphone = "No Handphone must be more than 10 characters";
    } else if (values.noHandphone.length > 15) {
      error.noHandphone = "No Handphone cannot exceed more than 15 characters";
    }
    if (!values.pendidikan) {
      error.nama = "Pendidikan is required!";
    }
    if (!values.kelas) {
      error.nama = "Kelas is required!";
    }
    if (!values.suratKeterangan) {
      error.nama = "Surat Keterangan is required!";
    }
    if (!values.harapan) {
      error.nama = "Harapan is required!";
    }
    return error;
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="container">
        {Object.keys(formErrors).length === 0 && isSubmit ? 
        // <alert className="ui message success">Signed in successfully</alert>
        (alert("berhasil"))
         : (
        ""
        )}

        <h3 className='text-center mt-5'>Pendaftaran Peserta Coding Bootcamp</h3>
          <p>{formErrors.nama}</p>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nama Lengkap:</Form.Label>
            <Form.Control type="text" name="nama" value={formValues.nama} onChange={handleChange} required/>
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" name="email" value={formValues.email} onChange={handleChange} required/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>No Handphone:</Form.Label>
            <Form.Control type="number" name="noHandphone" value={formValues.noHandphone} onChange={handleChange} required/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Latar Belakang Pendidikan:</Form.Label>
            {['radio'].map((type) => ( 
              <div key={`default-${type}`} className="mb-3" >
                <Form.Check type={type} id={`default-${type}`} label={`IT`} name="pendidikan" value="IT" onChange={handleChange} required/>
                <Form.Check type={type} id={`default-${type}`} label={`Non-IT`} name="pendidikan" value="Non-IT" onChange={handleChange} required/>
              </div>
            ))}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Kelas Coding Yang Dipilih:</Form.Label>
            <select name='kelas' required onChange={handleChange}>
                <option value="" >--Pilih Salah Satu Program--</option>
                <option value="Golang" >Coding Backend with Golang</option>
                <option value="React">Coding Frontend with React</option>
                <option value="Fullstack Developer">Fullstack Developer</option>
            </select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Group controlId="formFileSm" className="mb-3">
              <Form.Label>Foto Surat Kesungguhan:</Form.Label>
              <Form.Control type="file" size="sm" name="suratKesungguhan" required/>
            </Form.Group>    
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Harapan Untuk Coding Bootcamp Ini:</Form.Label>
            <FloatingLabel controlId="floatingTextarea2">
              <Form.Control as="textarea" style={{ height: '100px', width: '1118px' }} name="harapan" value={formValues.harapan} onChange={handleChange}/>
            </FloatingLabel>
          </Form.Group>

          <Button variant="success" type="submit">Submit</Button>{' '}
          <Button variant="danger" type="reset">Reset</Button>{' '}
      </div>
    </Form>
  )
}

export default FormBootcamp;