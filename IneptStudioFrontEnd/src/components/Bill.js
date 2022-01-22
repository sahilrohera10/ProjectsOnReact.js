import React from 'react';

export default function Bill() {
  return(

    <>
   <div >
 <img src="https://i2.wp.com/ineptstudio.com/wp-content/uploads/2021/09/logo-dark.png?resize=300%2C26&ssl=1" alt="logo"   className='bill'/>

<h1 className='Invoice'  > INVOICE </h1>

<h3  className='addr'>Virendra Nagar , Block B </h3>
<h3  className='address'>Sant Nagar , Burari , Delhi</h3>

<div className='invoice_num' >
<legend>Invoice Iumber</legend>
<input type="text" />
</div>

<div className='Customer_name' >
<legend>Customer Name</legend>
<input type="text" />
</div>

<div className='Customer_add' >
<legend>Customer Address</legend>
<input type="text" />
</div>

<div className='billDate' >
<legend>Date</legend>
<input type="date" />
</div>

<div className='item' >
<legend>Item</legend>
<input type="text" />
</div>
<div className='discription' >
<legend>discription</legend>
<input type="text" />
</div>
<div className='unitCost' >
<legend>Unit Cost</legend>
<input type="text" />
</div>
<div className='quantity' >
<legend>Quantity </legend>
<input type="text" />
</div>

<div className='gst' >
<legend>GST</legend>
<input type="text" />
</div>


<button className='save' >SAVE</button>



<button className='download' >DOWNLOAD</button>


   </div>

 

   </>
   )

   
}
