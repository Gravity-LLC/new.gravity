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
        bgImage="/images/cases/bekhatar/bekhatar_bg.png"
        content={()=>(
            <>
                <div className="detyledCase ">
                <div className="container pt-5">
                    <div className="mb-5 " style={{overflow: 'hidden'}}>
                        <h6>{langeText.customerHeading}</h6>
                        {
                            langeText.customerTexts.map((el, idx) => <p className="col-md-7 px-0 animate__animated animate__fadeInDown" key={idx}>{el}</p>)
                        }
                    </div>
                </div>
                <div className="imageWrapper mt-5 animate__animated animate__slideInUp wow" data-wow-offset="50" data-wow-duration="1.5s">
                    <img src="/images/cases/bekhatar/bekhatar_1.png" className="img-fluid w-100" />
                </div>

                <div className="container py-5">
                    <div className="mb-5" style={{overflow: 'hidden'}}>
                        <h6>{langeText.customerHeading}</h6>
                        {
                            langeText.customerTexts.map((el, idx) => <p data-wow-duration="1.2s" className="col-md-7 px-0 animate__animated animate__fadeInDown wow" key={idx}>{el}</p>)
                        }
                    </div>
                </div>
                <div className="imageWrapper mt-5 animate__animated animate__slideInUp wow" data-wow-offset="50" data-wow-duration="1.2s">
                    <img src="/images/cases/bekhatar/bekhatar_2.png" className="img-fluid w-100" />
                </div>
                <div className="container py-5">
                    <div className="mb-5" style={{overflow: 'hidden'}}>
                        <h6>{langeText.customerHeading}</h6>
                        {
                            langeText.customerTexts.map((el, idx) => <p data-wow-duration="1.2s" className="col-md-7 px-0 animate__animated animate__fadeInDown wow" key={idx}>{el}</p>)
                        }
                    </div>
                </div>
                <div className="imageWrapper animate__animated animate__slideInUp wow" data-wow-offset="50" data-wow-duration="1.2s">
                    <img src="/images/cases/bekhatar/bekhatar_3.png" className="img-fluid w-100" />
                </div>
                <div className="container py-5">
                    <div className="mb-5" style={{overflow: 'hidden'}}>
                        <h6>{langeText.customerHeading}</h6>
                        {
                            langeText.customerTexts.map((el, idx) => <p data-wow-duration="1.2s" className="col-md-7 px-0 animate__animated animate__fadeInDown wow" key={idx}>{el}</p>)
                        }
                    </div>
                </div>
                <div className="imageWrapper animate__animated animate__slideInUp wow" data-wow-offset="50" data-wow-duration="1.2s">
                    <img src="/images/cases/bekhatar/bekhatar_4.png" className="img-fluid w-100" />
                </div>
                <div className="container py-5">
                    <div className="mb-5" style={{overflow: 'hidden'}}>
                        <h6>{langeText.customerHeading}</h6>
                        {
                            langeText.customerTexts.map((el, idx) => <p data-wow-duration="1.2s" className="col-md-7 px-0 animate__animated animate__fadeInDown wow" key={idx}>{el}</p>)
                        }
                    </div>
                </div>
                <div className="imageWrapper animate__animated animate__slideInUp wow" data-wow-offset="50" data-wow-duration="1.2s">
                    <img src="/images/cases/bekhatar/bekhatar_5.png" className="img-fluid w-100" />
                </div>
                <div className="container py-5">
                    <div className="mb-5" style={{overflow: 'hidden'}}>
                        <h6>{langeText.customerHeading}</h6>
                        {
                            langeText.customerTexts.map((el, idx) => <p data-wow-duration="1.2s" className="col-md-7 px-0 animate__animated animate__fadeInDown wow" key={idx}>{el}</p>)
                        }
                    </div>
                </div>
                <div className="imageWrapper animate__animated animate__slideInUp wow" data-wow-offset="50" data-wow-duration="1.2s">
                    <img src="/images/cases/bekhatar/bekhatar_6.png" className="img-fluid w-100" />
                </div>
                <div className="container py-5">
                    <div className="mb-5" style={{overflow: 'hidden'}}>
                        <h6>{langeText.customerHeading}</h6>
                        {
                            langeText.customerTexts.map((el, idx) => <p data-wow-duration="1.2s" className="col-md-7 px-0 animate__animated animate__fadeInDown wow" key={idx}>{el}</p>)
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
