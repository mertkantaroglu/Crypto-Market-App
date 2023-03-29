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
        <main>
          <section className="details-section">
            <div className="coin-img">
              <img
                src={detail.icon}
                alt={detail.name}
                width="100px"
                height="100px"
              />
              <div>{detail.name}</div>
              <div>{detail.symbol}</div>
            </div>
          </section>
          <section className="coin-details">
            <h3>Coin Details</h3>
              <ul>
                <li>Name: <span>{detail.name}</span></li>
                <li>Price (USD): <span>{detail.price}</span></li>
                <li>Bitcoin Price: <span>{detail.priceBtc}</span></li>
                <li>Market Rank: <span>{detail.rank}</span></li>
                <li>Price Change 1d (%): <span>{detail.priceChange1d}</span></li>
                <li>Available Supply: <span>{detail.availableSupply}</span></li>
                <li>Total Supply: <span>{detail.totalSupply}</span></li>
                <li>Market Cap (USD): <span>{detail.marketCap}</span></li>
                <li>Website: <span>{detail.websiteUrl}</span></li>
              </ul>
          </section>
        </main>
    </>
  );
}

export default Details;
