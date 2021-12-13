import React from 'react'
import { Button, Paper, TextField, Select, MenuItem } from '@mui/material';



const Form = ({submitHandler, Product, setProduct, Errors, EditProduct, setEditProduct}) => {


    const onChangeHandler = (e) => {

        let newStateObject = {...Product};
        newStateObject[e.target.name] = e.target.value;
        setProduct(newStateObject)
        console.log("e.target.name:  " + e.target.name);
        console.log("e.target.value: " + e.target.value);

    }

    return (

        <div >
        <Paper elevation={3} className=" my-2 mx-auto text-2xl">
            
                <form className=" w-11/12 my-10 mx-auto flex flex-col justify-between gap-5 p-10" onSubmit={submitHandler}>
                    <TextField id="outlined-basic" label="Product Name" variant="outlined" type="text" name="productName" value={Product.productName} onChange={onChangeHandler}/>
                    <TextField id="outlined-basic" label="Product Price" variant="outlined" type="text" name="productPrice" value={Product.productPrice}  onChange={onChangeHandler}/>
                    <TextField id="outlined-basic" label="Main Image" variant="outlined" type="text" name="productPhoto" onChange={onChangeHandler}/>
                    <TextField id="outlined-basic" label="Product Description" variant="outlined" type="text" name="productDescription"  value={Product.productDescription} onChange={onChangeHandler}/>
                    <TextField id="outlined-basic" label="Key Features" variant="outlined" type="text" name="keyFeatures" value={Product.keyFeatures}  onChange={onChangeHandler}/>
                     <Select
                     
                        name="productType"
                        value="productType"
                        onChange={onChangeHandler}
                      
                    >
                        <MenuItem value="none" >Select Product Type</MenuItem>
                        <MenuItem value="Cats">For Cats</MenuItem>
                        <MenuItem value="Dogs">For Dogs</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                    </Select>
                    <Button type="submit">Submit</Button>
                </form>
        </Paper>
        
        </div>



    )
}

export default Form
