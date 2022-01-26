import React from 'react';
import Button from '@mui/material/Button';

export default function Bill() {

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
 const resp1 = await fetch('http://192.168.1.35:3990/getpdf', requestOptions)
 if(resp1.ok)
    window.open('http://192.168.1.35:3990/dwnld');
 else
    throw {msg: 'download failed'}
}
catch(err){
  console.log("Err ", err);
  err = (err.msg)?err.msg: "could not get file"; 
  alert(err) ;
}
}


 






  return(

    <>
   <div >
     <form  onSubmit={handleSubmit} >
 <img src="https://i2.wp.com/ineptstudio.com/wp-content/uploads/2021/09/logo-dark.png?resize=300%2C26&ssl=1" alt="logo"   className='bill'/>

<h1 className='Invoice'  > INVOICE </h1>

<h3  className='addr'>Virendra Nagar , Block B </h3>
<h3  className='address'>Sant Nagar , Burari , Delhi</h3>

<div className='invoice_num' >
<legend>Invoice Iumber</legend>
<input type="text" value = {values.number} onChange={handleChange('number')} />
</div>

<div className='Customer_name' >
<legend>Customer Name</legend>
<input type="text"   value = {values.name}   onChange={handleChange('name')}  />
</div>

<div className='Customer_add' >
<legend>Customer Address</legend>
<input type="text" value = {values.address}  onChange={handleChange('address')}  />
</div>

<div className='billDate' >
<legend>Date</legend>
<input type="date" value = {values.date}  onChange={handleChange('date')}  />
</div>

<div className='item' >
<legend>Item</legend>
<input type="text" value = {values.items}  onChange={handleChange('items')} />
</div>
<div className='discription' >
<legend>discription</legend>
<input type="text" value = {values.descrip}  onChange={handleChange('descrip')} />
</div>
<div className='unitCost' >
<legend>Unit Cost</legend>
<input type="text" value = {values.unitCosting}  onChange={handleChange('unitCosting')}  />
</div>
<div className='quantity' >
<legend>Quantity </legend>
<input type="text" value = {values.Quant} onChange={handleChange('Quant')}  />
</div>

<div className='gst' >
<legend>GST</legend>
<input type="text" value = {values.tax}  onChange={handleChange('tax')} />
</div>

<Button  className='save' type='submit' variant="contained">  SAVE AND DOWNLOAD </Button>




{/* <button className='download' type='submit'  > Download </button> */}
</form>

   </div>


  

   </>
   )
 

 

  }

