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
                    <li className="d-sm-inline-block d-none"><A href="/" className={colorText}>LinkedIn</A></li>
                    <li><A href="/" className={colorText}>Facebook</A></li>
                    <li><A href="/" className={colorText}>Instagram</A></li>
                    <li><A href="/" className={colorText}>Telegram</A></li>
                    <li className="d-sm-inline-block d-none"><A href="/" className={colorText}>Github</A></li>
                </ul>
                <div className="d-flex mt-sm-0 mt-3">
                    <button className={`btn ${colorText}`} onClick={ruLange}>Rus</button>
                    <button className={`btn ${colorText}`} onClick={enLange}>Eng</button>
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
