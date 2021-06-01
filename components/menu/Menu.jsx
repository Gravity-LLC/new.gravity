import A from '../a/A';
import styles from './menu.module.css';
import {connect} from 'react-redux';
import Lange from '../utils/language';
import Footer from '../footer/Footer';
import * as actions from '../../actions/actions'
import { bindActionCreators } from 'redux';
function Menu(props) {
    const {lange, sideBar, sideBarFalse} = props;
    const [langeArr] = Lange(lange);
    const {navbarNav} = langeArr;
    return (
        <div className={`${styles.menu_wrapper} ${sideBar ? 'SidebarfadeIn': 'SidebarfadeOut'}`}>
            <div className={` h-100 d-flex justify-content-between h-100 align-items-between flex-column ${styles.menu}`}>
                <header className={`p-20 ${styles.header_dark}`}>
                    <div className="container-fluid">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-inline-flex align-items-lg-center flex-lg-row flex-column">
                                <div className="mr-md-4 mr-0">
                                    <A href="/" >
                                        <img src="/images/logo-light.svg" className="logo img-fluid mb-0" alt="Gravity logo dark " style={{width: '200px'}}/>
                                    </A>
                                </div>
                                <p className="d-sm-block d-none"> Digital Solutions </p>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="">
                                    <button className="btn x" onClick={sideBarFalse}> 
                                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M36 14.1L33.9 12L24 21.9L14.1 12L12 14.1L21.9 24L12 33.9L14.1 36L24 26.1L33.9 36L36 33.9L26.1 24L36 14.1Z" fill="white"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <main className="p-20" id="menu-main">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-7 col-12 mt-4">
                                    <ul>
                                        {
                                            navbarNav.map(item=>  <li key={item.text}><A href={item.link}>{item.text}</A></li>)
                                        }
                                    </ul>
                                </div>
                                <div className="col-md-5 col-12 mt-4">
                                    <div className="address">
                                        <h4><a href="">(+992) 111-111-789</a></h4>
                                        <h4><a href="">info@gravity.tj</a></h4>
                                        <h4>Душанбе, пр. Рудаки 93/1</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <div className="container-md pb-5">
                    <Footer colorText="text-white"/>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state)=> {
    const {lange, sideBar} = state.mainReducer
    return{
        lange,
        sideBar
    }
}
const mapDispatchToProps = dispatch => {
    const {sideBarFalse} = bindActionCreators(actions, dispatch)
    return {
        sideBarFalse: () => sideBarFalse(),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
