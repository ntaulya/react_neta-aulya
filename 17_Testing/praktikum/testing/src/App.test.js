import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

//testing form coding
describe('App', () => {
  test('renders App component', ()=>{
      render(<App />)
      //inputan nama lengkap
      expect(screen.getByLabelText('Nama Lengkap:')).toBeInTheDocument();
      fireEvent.input(screen.getByRole('textbox', { name: /nama/i}), {target: { value:'Neta'}})  
      
      //inputan email
      expect(screen.getByLabelText('Email:')).toBeInTheDocument();
      fireEvent.input(screen.getByRole('textbox', { name: /email/i}), {target: { value:'netaaulya@gmail.com'}}) 

      //inputan no handphone
      // expect(screen.getByLabelText('No Handphone:')).toBeInTheDocument();
      // fireEvent.input(screen.getByRole('textbox', { name: /noHandphone/i}), {target: { value:'123456789'}}) 

      //inputan latar belakang
      // expect(screen.getByLabelText('Latar Belakang Pendidikan:')).toBeInTheDocument();
      // fireEvent.input(screen.getByRole('textbox', { name: /pendidikan/i}), {target: { value:'IT'}})

      //inputan kelas coding
      expect(screen.getByLabelText('Kelas Coding yang Dipilih:')).toBeInTheDocument();
      // fireEvent.option(screen.getByRole('textbox', { name: /kelas/i}), {target: { value:'golang'}})

      //inputan foto surat
      expect(screen.getByLabelText('Foto Surat Kesungguhan:')).toBeInTheDocument();
      // fireEvent.option(screen.getByRole('textbox', { name: /suratKesungguhan/i}), {target: { value:''}})

      //inputan harapan
      expect(screen.getByLabelText('Harapan Untuk Coding Bootcamp Ini:')).toBeInTheDocument();
      fireEvent.input(screen.getByRole('textbox', { name: /harapan/i}), {target: { value:'Makin maju dan sukses'}})  
  })
})
