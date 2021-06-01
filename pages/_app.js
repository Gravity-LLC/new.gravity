import '../styles/style.css';
import '../styles/media.css';
import store from '../store';
import {Provider} from 'react-redux';
import {ServiceProvider} from '../components/service-context/index';
import Services from '../services/services';
import { ParallaxProvider } from 'react-scroll-parallax';
const service = new Services();

export default function MyApp({Component, pageProps}) {
    return (
        <Provider store={store}>
            <ServiceProvider value={service}>
                <ParallaxProvider>
                    <Component {...pageProps}/>
                </ParallaxProvider>
            </ServiceProvider>
        </Provider>
    )
}
