import { useEffect, useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiUrl = "http://localhost:4000/api/categories";

  useEffect(() => {
    setLoading(true);
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className='text-center'>Loading...</p>;
  if (error) return <p className='text-center text-danger'>Data not found.</p>;

  /* 
   <nav className="bg-white py-3 border-bottom">
        <div className="container">
          <div className="row text-center">
            {Array.isArray(data) && data.length > 0 && data.map((category) => (
              <div className="col-6 col-sm-4 col-md-2 mb-3" key={category._id}>
                <Link to={`/productListing/${category._id}`} className="text-decoration-none text-dark">
                  <img
                    src={category.thumbnailUrl}
                    alt={category.name}
                    className="img-fluid rounded mb-2"
                    style={{ height: "80px", objectFit: "cover" }}
                  />
                  <p className="fw-semibold">{category.name}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </nav>
  */
  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Major Project</h1>
      <nav className="bg-white py-3 border-bottom">
        <div className='container'>
        <div className='row text-center'>
        {Array.isArray(data) && data.length > 0 ? (
          data.map((category) => (
            <div className="col-6 col-sm-4 col-md-2 mb-3" key={category._id}>
              <Link to={`/productListing/${category._id}`} className="text-decoration-none text-dark">
                <div className="card shadow-sm h-100">
                  <img
                    src={category.thumbnailUrl}
                    alt={category.name}
                    className="card-img-top"
                    style={{ height: "150px", objectFit: "cover" }}
                  />
                  <div className="card-body text-center">
                    <p className="fw-bold">{category.name}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="text-center">
            <p>Data not found.</p>
          </div>
        )}
        </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
