import React from 'react';
import { connect } from 'react-redux';
import {Detiled} from '../../../layouts/index';
import Lange from './lange';

export const index = (props) => {
    const [langeText] = Lange(props.lange);
    return <Detiled 
        mainClass="p-0"
        slogn=""
        feetbackProp={langeText.feetBack}
        colorHeaderNavBool={true}
        bgImage="/images/cases/kaynak/kaynak_bg.png"
        content={()=>(
            <>
                <div className="detyledCase ">
                <div className="container pt-5">
                    <div className="mb-5" style={{overflow: 'hidden'}}>
                        <h6 className="animate__animated animate__fadeInDown" >{langeText.customerHeading}</h6>
                        {
                            langeText.customerTexts.map((el, idx) => <p className="col-md-7 px-0 animate__animated animate__fadeInDown" key={idx}>{el}</p>)
                        }
                        <a href="https://www.kaynak.tj/" target="_blanck" style={{color: langeText.feetBack.color}}>www.kaynak.tj</a> 
                    </div>
                </div>
                <div className="imageWrapper mt-5 animate__animated animate__slideInUp wow" data-wow-offset="50" data-wow-duration="1.5s">
                    <img src="/images/cases/kaynak/kaynak_1.png" className="img-fluid w-100" />
                </div>
                <div className="container pt-5">
                    <div className="mb-5" style={{overflow: 'hidden'}}>
                        <h6 className="animate__animated animate__fadeInDown" >{langeText.customerHeading}</h6>
                        {
                            langeText.customerTexts.map((el, idx) => <p className="col-md-7 px-0 animate__animated animate__fadeInDown wow " data-wow-duration="1.2s" key={idx}>{el}</p>)
                        }
                    </div>
                </div>
                <div className="imageWrapper mt-5 animate__animated animate__slideInUp wow" data-wow-offset="50" data-wow-duration="1.5s">
                    <img src="/images/cases/kaynak/kaynak_2.png" className="img-fluid w-100" />
                </div>
                <div className="container pt-5">
                    <div className="mb-5" style={{overflow: 'hidden'}}>
                        <h6 className="animate__animated animate__fadeInDown" >{langeText.customerHeading}</h6>
                        {
                            langeText.customerTexts.map((el, idx) => <p className="col-md-7 px-0 animate__animated animate__fadeInDown wow " data-wow-duration="1.2s" key={idx}>{el}</p>)
                        }
                    </div>
                </div>
                <div className="imageWrapper animate__animated animate__slideInUp wow" data-wow-offset="50" data-wow-duration="1.5s">
                    <img src="/images/cases/kaynak/kaynak_3.png" className="img-fluid w-100" />
                </div>
                <div className="container pt-5">
                    <div className="mb-5" style={{overflow: 'hidden'}}>
                        <h6 className="animate__animated animate__fadeInDown" >{langeText.customerHeading}</h6>
                        {
                            langeText.customerTexts.map((el, idx) => <p className="col-md-7 px-0 animate__animated animate__fadeInDown wow " data-wow-duration="1.2s" key={idx}>{el}</p>)
                        }
                    </div>
                </div>
                <div className="imageWrapper animate__animated animate__slideInUp wow" data-wow-offset="50" data-wow-duration="1.5s">
                    <img src="/images/cases/kaynak/kaynak_4.png" className="img-fluid w-100" />
                </div>
                <div className="container pt-5">
                    <div className="mb-5" style={{overflow: 'hidden'}}>
                        <h6 className="animate__animated animate__fadeInDown" >{langeText.customerHeading}</h6>
                        {
                            langeText.customerTexts.map((el, idx) => <p className="col-md-7 px-0 animate__animated animate__fadeInDown wow " data-wow-duration="1.2s" key={idx}>{el}</p>)
                        }
                    </div>
                </div>
                <div className="imageWrapper animate__animated animate__slideInUp wow" data-wow-offset="50" data-wow-duration="1.5s">
                    <img src="/images/cases/kaynak/kaynak_5.png" className="img-fluid w-100" />
                </div>
                <div className="container pt-5">
                    <div className="mb-5" style={{overflow: 'hidden'}}>
                        <h6 className="animate__animated animate__fadeInDown" >{langeText.customerHeading}</h6>
                        {
                            langeText.customerTexts.map((el, idx) => <p className="col-md-7 px-0 animate__animated animate__fadeInDown wow " data-wow-duration="1.2s" key={idx}>{el}</p>)
                        }
                    </div>
                </div>
            </div>
            </>
        
    )} />
}

const mapStateToProps = (state) => {
    const {lange} = state.mainReducer;
    return {
        lange
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
