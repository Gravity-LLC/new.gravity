import React from 'react'
import { connect } from 'react-redux'
import Lange from './lange.js';
import styles from './feetback.module.css';
import {useRouter} from "next/router"

export const DetiledFeedBack = (props) => {
    const {feetbackProp, lange} = props;
    const [langeText] = Lange(lange)
    const router = useRouter()
    return (
        <>
            <div id="hashtags" className={styles.hashtags} style={{background: feetbackProp?.color}}>
                <div className="container">
                    <h1>{langeText.hHeshtags}</h1>
                    <div className="d-flex flex-wrap mt-4 align-items-center">
                        {
                            feetbackProp?.hashtags.map((el, idx) => (
                                <a href={el.link} key={idx} className="hashtagsItem">#{el.tag}</a>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div id="feedback" className={styles.feedBack}>
                <div className="container">
                    <p className="mb-sm-5 mb-4">{langeText.share}<a href="https://www.facebook.com/gravity.tj" target='_blank' style={{color: feetbackProp?.color}}>Facebook</a></p>
                    <h2>{langeText.feedBack}</h2>
                    <p>{langeText.request}</p>
                    <button onClick={() => router.push('/startproject')} className="btn mt-4">{langeText.startProject}</button>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    const {lange} = state.mainReducer;
    return {
        lange
    }   
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(DetiledFeedBack)
