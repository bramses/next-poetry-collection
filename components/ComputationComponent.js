import dynamic from 'next/dynamic';
import styles from '../styles/ComputationComponent.module.css';

// const P5Component = dynamic(() => import('./P5Component'));
// const VideoComponent = dynamic(() => import('./VideoComponent'));
// ... other dynamic imports

const ComputationComponent = ({ type }) => {
  switch (type) {
    case 'test':
        return <div className={styles.computationDefault}>test</div>;
    // case 'p5':
    //   return <P5Component />;
    // case 'video':
    //   return <VideoComponent />;
    // // ... other cases
    default:
      return <div className={styles.computationDefault}>Error: Unknown computation type</div>;
  }
};

export default ComputationComponent;
