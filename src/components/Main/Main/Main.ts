import { CircularProgress } from '@mui/material'
import styles from './styles.module.scss';

const Main = ({ isLoading, data }) => {
    return (
        isLoading ? <div className={styles.loader}><CircularProgress /></div> :
            <div className={styles.wrapper}>
            test
                // <Search />
                // <Navigation categories={data.categories}/>
                // <View navigator={data.navigator} />
            </div>);
}

export default Main;