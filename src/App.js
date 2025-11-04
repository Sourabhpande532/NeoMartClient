import { useEffect, useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function App() {
  const [data, setData] = useState( null );
  const [loading, setLoading] = useState( false );
  const [error, setError] = useState( null );
  const apiUrl = "http://localhost:4000/api/categories";

  useEffect( () => {
    setLoading( true );
    fetch( apiUrl )
      .then( ( response ) => response.json() )
      .then( ( data ) => {
        setData( data );
      } )
      .catch( ( error ) => setError( error.message ) )
      .finally( () => setLoading( false ) );
  }, [] );

  if ( loading ) return <p className='text-center'>Loading...</p>;
  if ( error ) return <p className='text-center text-danger'>Data not found.</p>;
  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Major Project</h1>
      <nav className="bg-white py-3 border-bottom">
        <div className='container'>
          <div className='row text-center'>
            { Array.isArray( data ) && data.length > 0 ? (
              data.map( ( category ) => (
                <div className="col-6 col-sm-4 col-md-2 mb-3" key={ category._id }>
                  <Link to={ `/productListing/${ category._id }` } className="text-decoration-none text-dark">
                    <div className="card shadow-sm h-100">
                      <img
                        src={ category.thumbnailUrl }
                        alt={ category.name }
                        className="card-img-top"
                        style={ { height: "150px", objectFit: "cover" } }
                      />
                      <div className="card-body text-center">
                        <p className="fw-bold">{ category.name }</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ) )
            ) : (
              <div className="text-center">
                <p>Data not found.</p>
              </div>
            ) }
          </div>
        </div>
      </nav>

      {/* Featured Banner */ }
      { Array.isArray( data ) && data.length > 0 && (
        <section className='container my-4'>
          <div className='row'>
            <div className='col-12'>
              <img
                src={ data[0].featuredBanner.imageUrl }
                alt={ data[0].featuredBanner.title }
                className='img-fluid w-100 rounded'
                style={ { maxHeight: "400px", objectFit: "cover" } }
              />
            </div>
            <div className='mt-3 text-center'>
              <h3>{ data[0].featuredBanner.title }</h3>
              <p>{ data[0].featuredBanner.subtitle }</p>
            </div>
          </div>
        </section>
      ) }

      {/* New Arrivals */ }
      { Array.isArray( data ) && data.length > 0 && (
        <section className='container my-5'>
          <h4 className='text-center mb-4'>New Arrivals</h4>
          <div className='row'>
            { data[0].newArrivals.map( ( item ) => (
              <div className='col-md-6 mb-4' key={ item._id }>
                <div className='card h-100 shadow-sm'>
                  <img
                    src="https://www.shutterstock.com/image-illustration/beautiful-thumbnail-backgrounds-banner-260nw-2098310869.jpg"
                    alt={ item.title }
                    className="card-img-top"
                    style={ { height: "250px", objectFit: "cover" } }
                  />
                  <div className="card-body text-center">
                    <h5>{ item.title }</h5>
                    <p>{ item.subtitle }</p>
                  </div>

                </div>
              </div>
            ) ) }
          </div>
        </section>
      ) }
    </div>
  );
}

export default App;
