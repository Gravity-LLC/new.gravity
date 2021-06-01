import {connect} from 'react-redux';
import Lange from '../components/utils/language';
import {Main} from '../layouts/index'

function index(props) {
    const [lang] = Lange(props.lange);
    const {homePage} = lang;
    return <Main content={()=>(
            <div className="container-fluid py-4" id="home_page">
                <div className="row">
                    <div className="col-lg-8 col-md-7">
                        <div className="h-100 d-flex align-items-center animate__animated animate__fadeIn wow" datat-wow-duration=".5s" data-wow-delay="1.1s">
                            <h1>{homePage.text}</h1>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5 d-md-block d-none">
                        <div className="d-flex justify-content-center">
                            <div className="animate__animated animate__fadeInUpBig wow" data-wow-duration="1s">
                                <svg className="A" width="220" height="350" viewBox="0 0 317 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 336.053L157.638 256.177C160.997 255.938 300.639 327.898 316.235 336.053C315.275 330.296 191.468 70.7606 178.512 42.6962C175.153 35.5002 171.794 28.784 168.675 21.8279C165.795 15.8312 160.517 5.7568 158.837 0C156.198 1.91893 154.998 5.7568 153.079 9.59466L78.6988 167.427C75.0998 175.342 0.719806 331.496 0 336.053Z" fill="#262626"/>
                                    <path d="M128.848 327.648H112.532V428.872H128.848V327.648Z" fill="#262626"/>
                                    <path d="M166.756 310.637H149.481V449.999H166.756V310.637Z" fill="#262626"/>
                                    <path d="M203.227 327.416H186.672V428.64H203.227V327.416Z" fill="#262626"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )} />
}

const mapStateToProps = (state)=>{
    const {lange} = state.mainReducer;
    return{
        lange
    }
}

export default connect(mapStateToProps)(index);