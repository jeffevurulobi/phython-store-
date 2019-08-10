import React, { Component } from 'react'
import { ProductConsumer } from "../context"
import {Link} from "react-router-dom"
import { ButtonContainer } from "./Button"

export default class Details extends Component {
    render() {
        return(
        <ProductConsumer>
            {value=>{
                const {id, company, img, info, price, title, inCart} = 
                value.detailProduct;
                return(
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                <h1>{title}</h1>
                            </div>
                        </div>

                         <div className="row">
                                {/* product img */}
                             <div className="col-10 mx-auto col-md-6 my-3">
                                <img src={img} alt="product" className="img-fluid" />
                             </div>
                                {/* product text */}
                             <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                 <h2>model: { title }</h2>

                                 <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                     made by : <span className="text-uppercase "> { company } </span> 
                                 </h4>
                                
                                 <h4 className="text-blue ">
                                    <strong>
                                        Price :<span> $ </span> { price }
                                    </strong>
                                 </h4>

                                <p className="text-capitalize font-weight-bold mt-3 md-0">
                                    Product  info : 
                                </p>

                                <p className="text-muted lead"> { info }</p>
                                {/* buttons */}

                                <div>
                                    <Link to="/">
                                        <ButtonContainer className="text-capitalize">
                                            back to store
                                        </ButtonContainer>
                                    </Link>

                                    <ButtonContainer cart disabled={ inCart? true : false}
                                    onClick={()=>{
                                     value.addToCart(id); 
                                     value.openModal(id);
                                    }}>
                                        { inCart? (<span className="mr-2">
                                        <i className='fas fa-cart-plus'></i>
                                        added to cart
                                        </span>):
                                        (<span className="mr-2">
                                        <i className='fas fa-shopping-cart'></i>
                                        add to cart
                                        </span>)
                                             }
                                    </ButtonContainer>
                                </div>
                             </div>
                         </div>
                    </div>
                )
            }}
        </ProductConsumer>
        )
    }
}