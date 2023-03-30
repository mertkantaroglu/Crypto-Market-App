import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import { selectDetails, selectDetailsStatus } from '../redux/details/detailsSlice';

function Details() {
  const detail = useSelector(selectDetails);
  const detailStatus = useSelector(selectDetailsStatus);

  if (detailStatus === 'loading') {
    return <h2 className="loading">Loading...</h2>;
  }

  return (
    <>
      <Navbar />
      <br />
        <div>
          <section className="main-section">
            <div className="coin-img">
              <img
                src={detail.icon}
                alt={detail.name}
                width="100px"
                height="100px"
              />
              <h2>{detail.name}</h2>
              <h3>{detail.symbol}</h3>
            </div>
          </section>
          <section className="details-section">
            <h2>Coin Details</h2>
            <div className="coin-details">
              <ul>
                <li className="param">Price (USD): </li>
                <li className="data">{detail.price}</li>
              </ul>
              <ul>
                <li className="param">Bitcoin Price: </li>
                <li className="data">{detail.priceBtc}</li>
              </ul>
              <ul>
                <li className="param">Market Rank: </li>
                <li className="data">{detail.rank}</li>
              </ul>
              <ul>
                <li className="param">Price Change (%) 1d: </li>
                <li className="data">{detail.priceChange1d}</li>
              </ul>
              <ul>
                <li className="param">Available Supply: </li>
                <li className="data">{detail.availableSupply}</li>
              </ul>
              <ul>
                <li className="param">Total Supply: </li>
                <li className="data">{detail.totalSupply}</li>
              </ul>
              <ul>
                <li className="param">Market Cap (USD): </li>
                <li className="data">{detail.marketCap}</li>
              </ul>
              <ul>
                <li className="param">Website: </li>
                <li className="data">{detail.websiteUrl}</li>
              </ul>
              </div>
          </section>
        </div>
    </>
  );
}

export default Details;
