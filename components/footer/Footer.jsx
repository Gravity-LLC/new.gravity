import React from 'react';
import styles from './footer.module.css';
import A from '../a/A';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/actions'
function Footer(props) {
    const { ruLange, enLange, lange } = props
    return (
        <footer className={`p-20 ${styles.footer}`}>
            <div className="container-fluid">
                <div className=" d-flex justify-content-between align-items-center flex-wrap">
                    <ul>
                        {/* <li className="d-sm-inline-block d-none"><a target="_blanck" href="https://www.linkedin.com/company/gravity-studio-tj">LinkedIn</a></li> */}
                        <li><a href="https://www.facebook.com/gravity.tj" target="_blanck">Facebook</a></li>
                        <li><a href="https://www.instagram.com/gravity.tj" target="_blanck">Instagram</a></li>
                        <li><a href="https://t.me/gravity_tj" target="_blanck">Telegram</a></li>
                        <li><a href="https://www.linkedin.com/company/gravity-studio-tj/about/" target="_blanck">Linkedin</a></li>
                        {/* <li className="d-sm-inline-block d-none"><a href="https://github.com/orgs/Gravity-LLC/dashboard" target="_blanck">Github</a></li> */}
                    </ul>
                    <div className="d-flex">
                        <button className={`btn ${lange?.toLowerCase() === 'ru'.toLowerCase() ? styles.active : ''}`} onClick={ruLange}>Rus</button>
                        <button className={`btn ${lange?.toLowerCase() === 'en'.toLowerCase() ? styles.active : ''}`} onClick={enLange}>Eng</button>
                    </div>
                </div>
            </div>
        </footer>
    )
}
const mapStateToProps = state => {

    return {
        lange: state.mainReducer.lange,
    }
}
const mapDispatchToProps = (dispatch) => {
    const { ruLange, enLange } = bindActionCreators(actions, dispatch)
    return {
        ruLange: () => {
            localStorage.setItem('lange', 'ru')
            ruLange()
        },
        enLange: () => {
            localStorage.setItem('lange', 'en')
            enLange()
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Footer);

