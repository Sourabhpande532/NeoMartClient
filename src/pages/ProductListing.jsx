import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export const ProductListing = () => {
    const [data, setData] = useState( null );
    const [loading, setLoading] = useState( false );
    const [error, setError] = useState( null );
    const apiUrl = "http://localhost:4000/api/products"
    useEffect( () => {
        setLoading( true )
        fetch( apiUrl )
            .then( ( res ) => res.json() )
            .then( ( data ) => {
                setData( data )
            } )
            .catch( ( error ) => setError( error.message ) )
            .finally( () => setLoading( false ) )
    }, [] )

    if ( loading ) return <p className="text-center">Loading...</p>
    if ( error ) return <p className="text-center text-denger">Database error</p>
    console.log( data );
    return (
        <div className="my-4">
            <div className="row g-3">
                <div className="col-lg-2 bg-color">
                    <div className="d-flex justify-content-between my-4">
                        <h3 className="fw-bold">Filters:</h3>
                        <Link className="text-decoration-none">Clear</Link>
                    </div>
                    <label><strong>Price</strong></label>
                    <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar w-75"></div>
                    </div>
                    <label className="my-3"><strong>Category:</strong></label>
                    <br />
                    <input
                        type="checkbox"
                    />Men Clothing<br />
                    <input
                        type="checkbox"
                    />Men Clothing
                    <div className="my-3">
                        <label><strong>Rating</strong></label>

                        <form>
                            <input
                                type="radio"
                                name="rating"
                            /> 4 Stars & above
                            <br />
                            <input
                                type="radio"
                                name="rating"
                            /> 3 Stars & above
                        </form>
                        <label><strong>Sort By</strong></label>
                        <br />
                        <input type="radio"
                            name="sorting"
                        />Price - Low to High
                        <br />
                        <input
                            type="radio"
                            name="sorting"
                        />Price - High to Low
                    </div>
                </div>

                {/* section two */ }
                <div className="col-md-10">
                    <h3>Showing All Products ()</h3>
                    <div className="row">
                        { Array.isArray( data ) && data.length > 0 ? (
                            data?.map( ( product ) => (
                                <div className="col-md-3">
                                    <Link to={ `/productDetails/:productId` } key={ product._id }>
                                        <div className="card">
                                            <img src={ product.imgUrl }
                                                alt={ product.name }
                                                className="img-fluid rounded"
                                                style={ { maxHeight: "300px", objectFit: "cover" } }
                                            />
                                            <div className="card-body text-center my-3">
                                                <p className="text-muted">{ product?.name }</p>
                                                <h4><strong>{ product.price.current }</strong></h4>
                                                <button className="btn btn-outline-primary m-1">Add to Cart</button>
                                                <button className="btn btn-outline-secondary">Add to wishlist</button>
                                            </div>
                                        </div>
                                        <p className="my-3"></p>
                                    </Link>

                                </div>
                            ) )
                        ) : (
                            <div>
                                <p>data not found.</p>
                            </div>
                        ) }
                    </div>
                </div>
            </div>
        </div>
    )
}