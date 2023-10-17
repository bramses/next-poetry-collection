import styles from '../styles/PoemVerse.module.css'; // CSS module for styling

const PoemVerse = ({ stanza }) => {
  return (
    <div className={styles.poemVerse}>
      <p>{stanza}</p>
    </div>
  );
};

export default PoemVerse;
