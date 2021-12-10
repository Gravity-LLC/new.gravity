import React from 'react';
import { connect } from 'react-redux';
import {Detiled} from '../../../layouts/index';
import Lange from './lange';

export const index = (props) => {
    const [langeText] = Lange(props.lange);
    return <Detiled 
        mainClass="p-0"
        slogn=""
        colorHeaderNavBool={true}
        feetbackProp={langeText.feetBack}
        langColorBan={'text-dark'}
        arrowClass={'bg-dark'}
        bgImage="/images/cases/astore/astore_bg.png"
        content={()=>(
            <>
                <div className="detyledCase ">
                <div className="container pt-5">
                    <div className="mb-5 " style={{overflow: 'hidden'}}>
                        <h6 className="animate__animated animate__fadeInDown " data-wow-duration="1s">{langeText.customerHeading}</h6>
                        {
                            langeText.customerTexts.map((el, idx) => <p className="col-md-7 px-0 animate__animated animate__fadeInDown "  key={idx}>{el}</p>)
                        }
                        <a href="https://astore.tj/" target="_blanck" style={{color: "#FD7F04"}}>www.astore.tj</a> 
                    </div>
                </div>
                <div className="imageWrapper mt-5 animate__animated animate__slideInUp wow" data-wow-offset="50" data-wow-duration="1.5s">
                    <img src="/images/cases/astore/astore_1.png" className="img-fluid w-100" />
                </div>
                <div className="container pt-5">
                    <div className="mb-5 " style={{overflow: 'hidden'}}>
                        <h6 className="animate__animated animate__fadeInDown " data-wow-duration="1s">{langeText.customerHeading}</h6>
                        {
                            langeText.customerTexts.map((el, idx) => <p className="col-md-7 px-0 animate__animated animate__fadeInDown wow" data-wow-duration="1.2s" key={idx}>{el}</p>)
                        }
                    </div>
                </div>
                <div className="imageWrapper mt-5 animate__animated animate__slideInUp wow" data-wow-offset="50" data-wow-duration="1.5s">
                    <img src="/images/cases/astore/astore_2.png" className="img-fluid w-100" />
                </div>
                <div className="container pt-5">
                    <div className="mb-5 " style={{overflow: 'hidden'}}>
                        <h6 className="animate__animated animate__fadeInDown " data-wow-duration="1s">{langeText.customerHeading}</h6>
                        {
                            langeText.customerTexts.map((el, idx) => <p className="col-md-7 px-0 animate__animated animate__fadeInDown wow" data-wow-duration="1.2s" key={idx}>{el}</p>)
                        }
                    </div>
                </div>
                <div className="imageWrapper animate__animated animate__slideInUp wow" data-wow-offset="50" data-wow-duration="1.5s">
                    <img src="/images/cases/astore/astore_3.png" className="img-fluid w-100" />
                </div>
                <div className="container pt-5">
                    <div className="mb-5 " style={{overflow: 'hidden'}}>
                        <h6 className="animate__animated animate__fadeInDown " data-wow-duration="1s">{langeText.customerHeading}</h6>
                        {
                            langeText.customerTexts.map((el, idx) => <p className="col-md-7 px-0 animate__animated animate__fadeInDown wow" data-wow-duration="1.2s" key={idx}>{el}</p>)
                        }
                    </div>
                </div>
                <div className="imageWrapper mt-5 animate__animated animate__slideInUp wow" data-wow-offset="50" data-wow-duration="1.5s">
                    <img src="/images/cases/astore/astore_4.png" className="img-fluid w-100" />
                </div>
                <div className="container pt-5">
                    <div className="mb-5 " style={{overflow: 'hidden'}}>
                        <h6 className="animate__animated animate__fadeInDown " data-wow-duration="1s">{langeText.customerHeading}</h6>
                        {
                            langeText.customerTexts.map((el, idx) => <p className="col-md-7 px-0 animate__animated animate__fadeInDown wow" data-wow-duration="1.2s" key={idx}>{el}</p>)
                        }
                    </div>
                </div>
                <div className="imageWrapper animate__animated animate__slideInUp wow" data-wow-offset="50" data-wow-duration="1.5s">
                    <img src="/images/cases/astore/astore_5.png" className="img-fluid w-100" />
                </div>
                <div className="container pt-5">
                    <div className="mb-5 " style={{overflow: 'hidden'}}>
                        <h6 className="animate__animated animate__fadeInDown " data-wow-duration="1s">{langeText.customerHeading}</h6>
                        {
                            langeText.customerTexts.map((el, idx) => <p className="col-md-7 px-0 animate__animated animate__fadeInDown wow" data-wow-duration="1.2s" key={idx}>{el}</p>)
                        }
                    </div>
                </div>
                <div className="imageWrapper mt-5 animate__animated animate__slideInUp wow" data-wow-offset="50" data-wow-duration="1.5s">
                    <img src="/images/cases/astore/astore_6.png" className="img-fluid w-100" />
                </div>
                <div className="container pt-5">
                    <div className="mb-5 " style={{overflow: 'hidden'}}>
                        <h6 className="animate__animated animate__fadeInDown " data-wow-duration="1s">{langeText.customerHeading}</h6>
                        {
                            langeText.customerTexts.map((el, idx) => <p className="col-md-7 px-0 animate__animated animate__fadeInDown wow" data-wow-duration="1.2s" key={idx}>{el}</p>)
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
