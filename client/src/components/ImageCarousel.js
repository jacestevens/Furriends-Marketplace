import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import "../styles/Carousel.css";
import {Paper} from '@mui/material'

export const ImageCarousel = ({ productImages }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, productImages.length, page);
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };
  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        
        opacity: 0,
      };
    },
  };

  return (
    <div className="carousel">
      <div className="carousel__container">
        <AnimatePresence initial={false} custom={direction}>
          <Paper>
            <motion.img
              className="carousel__img object-cover h-1/5 "
              key={page}
              src={productImages[imageIndex]}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{

                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            />
          </Paper>
        </AnimatePresence>
        
      </div>
      <div className="flex flex-row justify-between mt-5">
          <div className="prev" onClick={() => paginate(-1)}>
          {"‣"} 
          </div>
          <div className="next" onClick={() => paginate(1)}>
            {"‣"}
          </div>
          
        </div>
    </div>
  );
};
