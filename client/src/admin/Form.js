import React, { useState } from 'react'
import { Button, Paper, TextField,  MenuItem, TextareaAutosize, FormControl, InputLabel } from '@mui/material';
import Select from '@mui/material/Select'



const Form = ({submitHandler, Product, setProduct, Errors, EditProduct, setEditProduct}) => {


    const [SelectDisplay, setSelectDisplay] = useState('')
    const onChangeHandler = (e) => {

        let newStateObject = {...Product};
        newStateObject[e.target.name] = e.target.value;
        setProduct(newStateObject)
        console.log("e.target.name:  " + e.target.name);
        console.log("e.target.value: " + e.target.value);
        setSelectDisplay(e.target.value)

    }

    return (

        <div >
        <div className=" my-2 mx-auto text-2xl">
            
                <form className=" w-11/12 my-5 mx-auto flex flex-col justify-between gap-5 p-5" onSubmit={submitHandler}>
                    <TextField id="outlined-basic" label="Product Name" variant="outlined" type="text" name="productName" value={Product.productName} onChange={onChangeHandler}/>
                    <TextField id="outlined-basic" label="Product Price" variant="outlined" type="text" name="productPrice" value={Product.productPrice}  onChange={onChangeHandler}/>
                    <TextField id="outlined-basic" label="Main Image" variant="outlined" type="text" name="productPhoto" onChange={onChangeHandler}/>
                    <TextField id="outlined-basic" label="Product Description" variant="outlined" type="text" name="productDescription" rows={5}  value={Product.productDescription} onChange={onChangeHandler}/>
                    <TextField id="outlined-basic" label="Key Features" variant="outlined" type="text" name="keyFeatures" value={Product.keyFeatures}   onChange={onChangeHandler}/>
                    <FormControl >
                    <InputLabel>Product Type</InputLabel>
                     <Select
                        name="productType"
                        value={SelectDisplay}
                        onChange={onChangeHandler}
                        variant='filled'
                    >
                    
                        <MenuItem value='Cats'>Cats</MenuItem>
                        <MenuItem value="Dogs">Dogs</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                    </Select>
                    </FormControl>
                    <Button variant='contained' color="warning" type="submit">Submit</Button>
                </form>
        </div>
        
        </div>



    )
}

export default Form
