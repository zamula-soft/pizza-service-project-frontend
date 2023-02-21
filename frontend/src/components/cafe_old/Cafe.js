import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { color, Container } from '@mui/system';
import { Paper, Button } from '@mui/material';

export default function Cafe() {
  const paperStyle = {padding: '50px 20px', width:600, margin:"20px auto"}
  
  const[name, setName]=React.useState('')
  const[city, setCity]=React.useState('')
  const[email, setEmail]=React.useState('')
  const[country, setCountry]=React.useState('')

  const[cafes, setCafes]=React.useState('')

  const handleClick=(e)=>{
    e.preventDefault()
    const cafe={name, city, email, country}
    console.log(cafe)

    fetch("http://localhost:8080/cafe/add", {method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(cafe)}).then(()=>{
      console.log("New cafe added:")
    })
  }

  React.useEffect(()=>{
    fetch("http://localhost:8080/cafe")
    .then(res=>res.json())
    .then((result)=>{
      setCafes(result);
    })
  }, 
  [])

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{color:"blue"}}>Add cafe</h1>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField fullWidth id="name" label="Cafe name" variant="outlined" value={name} onChange={(e)=>setName(e.target.value)}/>
          <TextField fullWidth id="city" label="Cafe city" variant="outlined" value={city} onChange={(e)=>setCity(e.target.value)}/>
          <TextField fullWidth id="email" label="Cafe e-mail" variant="outlined" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <TextField fullWidth id="country" label="Cafe country" variant="outlined" value={country} onChange={(e)=>setCountry(e.target.value)}/>

          <Button variant="contained" onClick={handleClick}>Submit new cafe</Button>  

        </Box>
      </Paper>


   

    </Container>
  );
}