import dynamic from 'next/dynamic';
import styles from '../styles/ComputationComponent.module.css';

// const P5Component = dynamic(() => import('./P5Component'));
// const VideoComponent = dynamic(() => import('./VideoComponent'));
const ImageComponent = dynamic(() => import('./ImageComponent'));
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
    case 'image':
        return <ImageComponent src={"https://imagedelivery.net/FVn4Kw8Yr8auy8XS7UL4RA/98793455-d114-419e-24ef-ff7b0188dd00/public"}/>;
    default:
      return <div className={styles.computationDefault}>Error: Unknown computation type</div>;
  }
};

export default ComputationComponent;
