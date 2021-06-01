import {Main} from '../layouts/index';
import {connect} from 'react-redux';
import Lange from '../utils/language'
function services(props) {
    const {lange} = props;
    const [langeArr] = Lange(lange);

    function addSvg(id){
        switch(id){
            case 1: 
                return (
                    <svg width="181" height="180" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M47.3 37.8H36.5a2.7 2.7 0 100 5.4h10.8a2.7 2.7 0 000-5.4zM72.5 37.8H61.7a2.7 2.7 0 100 5.4h10.8a2.7 2.7 0 000-5.4z" fill="#262626"/>
                        <path d="M156.092 48.6H151.7V34.306a9.128 9.128 0 00-9.108-9.108H31.208a9.127 9.127 0 00-9.108 9.108v71.784a9.126 9.126 0 009.108 9.108H38.3v20.592a8.225 8.225 0 008.208 8.208h24.984a8.228 8.228 0 008.208-8.208v-20.592h12.6v20.592a8.225 8.225 0 008.208 8.208h55.584a8.227 8.227 0 008.208-8.208V56.807a8.228 8.228 0 00-8.208-8.208zm-84.6 89.999H46.508a2.824 2.824 0 01-2.808-2.808V82.007a2.826 2.826 0 012.808-2.808h24.984a2.826 2.826 0 012.808 2.808v53.784a2.827 2.827 0 01-2.808 2.808zm8.208-28.8V82.007a8.227 8.227 0 00-8.208-8.208H46.508a8.227 8.227 0 00-8.208 8.208V109.8h-7.092a3.706 3.706 0 01-3.708-3.708V34.307a3.708 3.708 0 013.708-3.708h111.384a3.706 3.706 0 013.708 3.708V48.6h-45.792a8.227 8.227 0 00-8.208 8.208V109.8H79.7zm79.2 25.992a2.827 2.827 0 01-2.808 2.808h-55.584a2.824 2.824 0 01-2.808-2.808V56.807A2.826 2.826 0 01100.508 54h55.584a2.825 2.825 0 012.808 2.808v78.984z" fill="#262626"/>
                        <path d="M128.311 132.303a4.5 4.5 0 10-.033-9 4.5 4.5 0 00.033 9z" fill="#262626"/>
                    </svg>
                );
            case 2: 
                return (
                    <svg width="181" height="180" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M146.71 30.6H34.3c-6.68 0-12.03 4.37-12.19 10.04v82.34c0 5.63 5.4 10.22 12.19 10.22H86.9V153H55.4a2.7 2.7 0 100 5.4h70.2a2.7 2.7 0 000-5.4H92.3v-19.8h54.41c6.79 0 12.19-4.59 12.19-10.22V40.82c0-5.63-5.4-10.22-12.19-10.22zm6.79 92.38c0 2.6-3.11 4.82-6.79 4.82H34.3c-3.6 0-6.79-2.21-6.79-4.82V40.72c0-2.6 3.11-4.72 6.79-4.72H146.7c3.6 0 6.79 2.21 6.79 4.82v82.16z" fill="#262626" />
                        <path d="M99.99 65.93a2.7 2.7 0 00-3.6 1.17L81.84 95.4a2.7 2.7 0 104.8 2.47l14.52-28.35a2.7 2.7 0 00-1.17-3.59zM117.25 64.94a2.7 2.7 0 00-3.82 3.82L126.9 82.2l-13.47 13.44a2.71 2.71 0 00-.07 3.89 2.7 2.7 0 003.89-.07l15.37-15.36a2.7 2.7 0 000-3.81l-15.37-15.36zM69.62 64.94a2.7 2.7 0 00-3.82 0L50.43 80.32a2.7 2.7 0 000 3.81L65.8 99.5a2.7 2.7 0 003.82-3.81L56.16 82.24l13.46-13.48a2.7 2.7 0 000-3.82z" fill="#262626" />
                    </svg>
                );
            case 3:
                return (
                    <svg width="180" height="180" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M159.3 64.8V43.2a9.92 9.92 0 00-9.9-9.9h-117a9.92 9.92 0 00-9.9 9.9v21.6a9.86 9.86 0 003.13 7.2 9.86 9.86 0 00-3.13 7.2v21.6a9.87 9.87 0 003.13 7.2 9.86 9.86 0 00-3.13 7.2v21.6a9.92 9.92 0 009.9 9.9h117a9.92 9.92 0 009.9-9.9v-21.6a9.85 9.85 0 00-3.13-7.2 9.86 9.86 0 003.13-7.2V79.2a9.85 9.85 0 00-3.13-7.2 9.86 9.86 0 003.13-7.2zm-5.4 50.4v21.6a4.5 4.5 0 01-4.5 4.5h-117a4.5 4.5 0 01-4.5-4.5v-21.6a4.5 4.5 0 014.5-4.5h117a4.5 4.5 0 014.5 4.5zm0-36v21.6a4.5 4.5 0 01-4.5 4.5h-117a4.5 4.5 0 01-4.5-4.5V79.2a4.5 4.5 0 014.5-4.5h117a4.5 4.5 0 014.5 4.5zM32.4 69.3a4.5 4.5 0 01-4.5-4.5V43.2a4.5 4.5 0 014.5-4.5h117a4.5 4.5 0 014.5 4.5v21.6a4.5 4.5 0 01-4.5 4.5h-117z" fill="#262626"/>
                        <path d="M45 59.4a5.4 5.4 0 100-10.8 5.4 5.4 0 000 10.8zM45 95.4a5.4 5.4 0 100-10.8 5.4 5.4 0 000 10.8zM45 131.4a5.4 5.4 0 100-10.8 5.4 5.4 0 000 10.8zM142.2 51.3h-36a2.7 2.7 0 100 5.4h36a2.7 2.7 0 100-5.4zM106.2 92.7h36a2.7 2.7 0 100-5.4h-36a2.7 2.7 0 100 5.4zM106.2 128.7h36a2.7 2.7 0 000-5.4h-36a2.7 2.7 0 100 5.4z" fill="#262626"/>
                    </svg>
                );
            default: return null;
        }
    }
    function addAnimateClass(id){
        switch(id){
            case 1: return 'animate__fadeInLeft';
            case 2: return 'animate__fadeInUpBig';
            case 3: return 'animate__fadeInRight';
            default: return null;
        }
    }
    return <Main content={()=>(
        <>
            <div className="container" id="services">
                <div className="row">
                    <h2 className="col-12 heading">{langeArr.servicesH2}</h2>
                    {
                        langeArr.services.map(item => {
                            
                            return (
                                <div key={item.id} className={`col-lg-4 col-md-6 col-12 mt-4 animate__animated wow ${addAnimateClass(item.id)}`}>
                                    <div>
                                        <div className="service-image justify-content-start">
                                            {
                                                addSvg(item.id)
                                            }
                                        </div>
                                        <ul className="services-lists mt-sm-5 mt-4 ">
                                            {
                                                item.lists.map((list, inx) => <li key={inx}>{list}</li>)
                                            }
                                        </ul>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )}/>
}
const mapStateToProps = state => {
    const {lange} = state.mainReducer;
    return{
        lange,
    }
}
export default connect(mapStateToProps)(services);