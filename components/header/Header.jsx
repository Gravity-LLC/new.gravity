import {useState, useEffect} from 'react';
import styles from './header.module.css';
import A from '../a/A';
import Lange from '../utils/language';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/actions'

function Header(props) {
    const [dark, setDark] = useState(true)
    const {sideBarTrue, darkAttr} = props;
    const [langeArr] = Lange(props.lange);
    const {navbarNav} = langeArr;
    useEffect(() => {
        setDark(darkAttr)
    }, [])
    return (
        <header className={`p-20 ${styles.header} ${props.className}`}>
            <div className="container-fluid">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-inline-flex flex-lg-row flex-column">
                        <div className="mr-md-4 mr-0">
                            <A href="/" >
                                <img src={`/images/logo-${dark ? "dark": "light"}.svg`} className="logo img-fluid mb-0" alt="Gravity logo dark " style={{width: '200px'}}/>
                            </A>
                        </div>
                        <p className="d-sm-flex d-none align-items-center" style={{color: dark ? "": "white"}}> Digital Solutions </p>
                    </div>
                    <div className="d-flex align-items-center">
                        <ul className="d-md-flex d-none">
                           {
                               navbarNav.map(item=> (item.text === 'Начать проект' || item.text === 'Start a project') ?<li key={item.text} ><A href={item.link} style={{color: dark ? "": "white"}}>+ {item.text}</A></li> : <li key={item.text} ><A style={{color: dark ? "": "white"}} href={item.link}>{item.text}</A></li>)
                           }
                        </ul>
                        <div className={styles.toggler_navbar}>
                            <button className="btn" onClick={sideBarTrue}>
                                <svg width="38" height="16" viewBox="0 0 38 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="2" x2="38" y2="2" stroke={dark ? "#262626": "white"} strokeWidth="4"/>
                                    <line y1="14" x2="28" y2="14" stroke={dark ? "#262626": "white"} strokeWidth="4"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
const mapStateToProps = state =>{
    const {lange} = state.mainReducer;
    return{
        lange,
    }
}
const mapDispatchToProps = dispatch => {
    const {sideBarTrue} = bindActionCreators(actions, dispatch)
    return {
        sideBarTrue: () => sideBarTrue(),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
