import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
// import DatePicker from '@mui/lab/DatePicker';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';

const style = {
  position: 'absolute',
  top: '50%',
  left: '55%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function InvoiceModal() {


    const [values , setValues] = React.useState({
        number: '',
        name: '',
        address: '',
        date: '',
        items: '',
        descrip: '',
        unitCosting: '',
        Quant: '',
        tax: '',
      })
      
      const handleChange = (prop) => (event) => {
        setValues({...values , [prop]: event.target.value});
      }
      
      
      const handleSubmit= async (event)=>{
        event.preventDefault();
        const body = {
          number:values.number,
          name:values.name,
          address:values.address,
          date:values.date,
          items:values.items,
          descrip:values.descrip,
          unitCosting:values.unitCosting,
          Quant:values.Quant,
          tax:values.tax
      }
      console.log(body);
      
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      };
      
      try{
       const resp1 = await fetch('http://localhost:3990/getpdf', requestOptions)
       if(resp1.ok)
          window.open('http://localhost:3990/dwnld');
       else
          throw {msg: 'download failed'}
      }
      catch(err){
        console.log("Err ", err);
        err = (err.msg)?err.msg: "could not get file"; 
        alert(err) ;
      }
      }
      


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  

  return (
    <div>
      <Button style={{left : '750px' , top : '60px'}} onClick={handleOpen}>Generate New Invoice</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography> */}
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>

           <form  onSubmit={handleSubmit} >
               <div style={{display : 'flex' , justifyContent: 'center'}} >
                   <div style={{marginRight: ' 180px'}} >
 <img src="https://i2.wp.com/ineptstudio.com/wp-content/uploads/2021/09/logo-dark.png?resize=300%2C26&ssl=1" alt="logo"   className='bill'/>

<h1 className='Invoice' style={{color : 'red'}} > INVOICE </h1>
</div>
<div  style={{marginLeft : '180px'}} >
<h3  className='addr'>Virendra Nagar , Block B </h3>
<h3  className='address'>Sant Nagar , Burari , Delhi</h3>

</div>
</div>

<div className='invoice_num' >

<TextField id="outlined-basic" label="Invoice Number" variant="outlined" value = {values.number} onChange={handleChange('number')} required />

{/* <legend>Invoice Number</legend>
<input type="text" value = {values.number} onChange={handleChange('number')} /> */}
</div>

<br/>

<div className='Customer_name' >
<TextField id="outlined-basic" label="Customer Name" variant="outlined"  value = {values.name}   onChange={handleChange('name')} required />

{/* <legend>Customer Name</legend>
<input type="text"   value = {values.name}   onChange={handleChange('name')}  /> */}

</div>
<br/>
<div className='Customer_add' >
<TextField id="outlined-basic" label="Customer Address" variant="outlined"  value = {values.address}  onChange={handleChange('address')} required  />
{/* <legend>Customer Address</legend>
<input type="text" value = {values.address}  onChange={handleChange('address')}  /> */}
</div>
<br/>
<div className='billDate' >
{/* <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Basic example"
        value = {values.date}  onChange={handleChange('date')}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider> */}

<legend>Date</legend>
<input type="date" value = {values.date}  onChange={handleChange('date')} required />
</div>
<br/>
<div  style={{display : 'flex'}}>

<div className='item'  style={{margin : '8px'}} >
{/* <legend>Item</legend> */}
<TextField id="outlined-basic" label="Item" variant="outlined" value = {values.items}  onChange={handleChange('items')} required />
{/* <input type="text" value = {values.items}  onChange={handleChange('items')} /> */}
</div>
<div className='discription' style={{margin : '8px'}} >
{/* <legend>discription</legend> */}
<TextField id="outlined-basic" label="Description" variant="outlined"  value = {values.descrip}  onChange={handleChange('descrip')} required />
{/* <input type="text" value = {values.descrip}  onChange={handleChange('descrip')} /> */}
</div>
<div className='unitCost' style={{margin : '8px'}} >
{/* <legend>Unit Cost</legend> */}
<TextField id="outlined-basic" label="Unit Cost" variant="outlined"  value = {values.unitCosting}  onChange={handleChange('unitCosting')} required />
{/* <input type="text" value = {values.unitCosting}  onChange={handleChange('unitCosting')}  /> */}
</div>
<div className='quantity' style={{margin : '8px'}}>
{/* <legend>Quantity </legend> */}
<TextField id="outlined-basic" label="Quantity" variant="outlined"  value = {values.Quant} onChange={handleChange('Quant')} required />
{/* <input type="text" value = {values.Quant} onChange={handleChange('Quant')}  /> */}
</div>

<div className='gst' style={{margin : '8px'}} >
{/* <legend>GST</legend> */}
<TextField id="outlined-basic" label="GST" variant="outlined"  value = {values.tax}  onChange={handleChange('tax')}  required/>
{/* <input type="text" value = {values.tax}  onChange={handleChange('tax')} /> */}
</div>

</div>

<br/>
<br/>
<br/>


<Button  className='save' type='submit' variant="contained"  style = {{left : '40%'}}  >  SAVE AND DOWNLOAD </Button>




 {/* <button className='download' type='submit'  > Download </button> */}
</form> 
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
