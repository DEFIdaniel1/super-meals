import {useContext} from 'react';

import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

const MealItem = props => {
    const cartCtx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;
    
    const addToCartHandler = amount => {
      cartCtx.addItem({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price
      });
    }

    return (
      <li className={classes.meal}>
        {/* <div>
          <img
            className={classes["img-small"]}
            src="https://i.ytimg.com/vi/u8G0XpgdPB0/maxresdefault.jpg"
            alt="wolverine claw burger"
          />
        </div> */}
        <div className={classes["box-child-big"]}>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <div className={classes["box-child"]}>
          <MealItemForm onAddToCart={addToCartHandler} id={props.id} />
        </div>
      </li>
    );
};

export default MealItem;