import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './emojis.module.css';
import EmojiBox from '../EmojiBox';
import { filterEmojis } from '../../Utils/fileEmojis';
import Empty from '../Empty';

const Emojis = ({ emojisData, searchText }) => {
  const [filteredEmojis, setFilterEmojis] = useState([]);

  useEffect(() => {
    setFilterEmojis(
      filterEmojis({
        emojisData,
        searchText,
      })
    );
  }, [emojisData, searchText]);

  if (filteredEmojis.length > 0) {
    return (
      <div className={styles.emojisGrid}>
        {filteredEmojis.map((data, index) => (
          <EmojiBox key={index} title={data.title} symbol={data.symbol} />
        ))}
      </div>
    );
  } else {
    return <Empty text="Opps, Emot Kosong" />;
  }
};
Emojis.propTypes = {
  emojisData: PropTypes.array,
  searchText: PropTypes.string,
};
export default Emojis;
