import React from 'react'
import { ImageList, ImageListItem } from '@mui/material'

export const ProductImages = ({product}) => {
  return (
    <ImageList variant="masonry" cols={1} gap={8}>
                <ImageListItem className='w-full'>
                  <img src={product.productPhoto} alt={product.productName} />
                </ImageListItem>

                <ImageListItem className='w-full'>
                  <img src={product.additionalPhotos} alt={product.Name} />
                </ImageListItem>

                <ImageListItem className='w-full'>
                  <img
                    src={product.additionalPhotosTwo}
                    alt={product.additionalPhotos}
                  />
                  <p></p>
                </ImageListItem>
              </ImageList>
  )
}





              