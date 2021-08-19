import React from 'react';
import styles from './footer.module.css';
import A from '../a/A';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/actions'
function Footer(props) {
    const {ruLange, enLange, colorText} = props
    return (
        <footer className={`p-20 ${styles.footer}`}>
            <div className="container-fluid d-flex flex-sm-row flex-column justify-content-between align-items-sm-center">
                <ul>
                    <li className="d-sm-inline-block d-none"><a target="_blanck" href="https://www.linkedin.com/company/gravity-studio-tj" className={colorText}>LinkedIn</a></li>
                    <li><a href="https://www.facebook.com/gravity.tj" target="_blanck" className={colorText}>Facebook</a></li>
                    <li><a href="https://www.instagram.com/gravity.tj" target="_blanck" className={colorText}>Instagram</a></li>
                    <li><a href="https://t.me/gravity_tj" target="_blanck" className={colorText}>Telegram</a></li>
                    <li className="d-sm-inline-block d-none"><a href="https://github.com/orgs/Gravity-LLC/dashboard" target="_blanck" className={colorText}>Github</a></li>
                </ul>
                <div className="d-flex mt-sm-0 mt-3">
                    <button className={`btn pl-0 ${colorText}`} onClick={ruLange}>Rus</button>
                    <button className={`btn ${colorText} ml-2`} onClick={enLange}>Eng</button>
                </div>
            </div>
        </footer>
    )
}
const mapStateToProps = state =>{
    return{

    }
}
const mapDispatchToProps = (dispatch) =>{
    const {ruLange, enLange} = bindActionCreators(actions, dispatch)
    return{
        ruLange: ()=> {
            localStorage.setItem('lange', 'ru')
            ruLange()
        },
        enLange: ()=>{ 
            localStorage.setItem('lange', 'en')
            enLange()
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Footer);

