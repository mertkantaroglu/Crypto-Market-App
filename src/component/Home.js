import { useEffect, useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';
import { getDetails } from '../redux/details/detailsSlice';
import { getCoins, selectCoins, selectCoinsStatus } from '../redux/coin/coinsSlice';
import Navbar from './Navbar';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCoins());
  }, [dispatch]);

  const navigate = useNavigate();
  const [search, setSearch] = useSearchParams();
  const coins = useSelector(selectCoins);
  const coinsStatus = useSelector(selectCoinsStatus);

  const handleSearch = useCallback((e) => {
    const filter = e.target.value;
    setSearch(filter ? { filter } : {});
  }, [setSearch]);

  const handleArrowClick = useCallback((id) => {
    dispatch(getDetails(id));
    navigate(`/details/${id}`);
  }, [dispatch, navigate]);

  useEffect(() => {
    if (coinsStatus === 'idle') {
      dispatch(getCoins());
    }
  }, [coinsStatus, dispatch]);

  if (coinsStatus === 'loading') {
    return <h2 className="loading">Loading...</h2>;
  }

  const filteredCoins = coins.filter((coin) => {
    const filter = search.get('filter');
    if (!filter)
    return true;
    const name = coin.name.toLowerCase();
    const symbol = coin.symbol.toLowerCase();
    return name.startsWith(filter.toLowerCase()) || symbol.startsWith(filter.toLowerCase()) ;
  });

  return (
    <>
      <section className="homepage">
        <Navbar />
        <input
          type="text"
          placeholder="Search..."
          value={search.get('filter') || ''}
          onChange={handleSearch}
        />
        <br />
        <div className="coins-list">
          {filteredCoins.map((coin) => (
            <div key={coin.id} className="coin-header">
              <BsArrowRightCircle
                className="forward-icon"
                onClick={() => handleArrowClick(coin.id)}
              />
              <img className="coin-icon" src={coin.icon} alt={coin.name}
                  width="100px"
                  height="100px" />
              <div className="coin-info">
                <h2 className="coin-name">{coin.name}</h2>
                <h4 className="coin-symbol">{coin.symbol}</h4>
                <h4 className="coin-price">${coin.price}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
