import React from 'react';
import { connect } from 'react-redux';
import {Detiled} from '../../../layouts/index';
import Lange from './lange';

export const index = (props) => {
    const [langeText] = Lange(props.lange);
    return <Detiled 
        mainClass="p-0"
        slogn=""
        bgImage="/images/cases/amb/amb_bg.png"
        feetbackProp={langeText.feetBack}
        content={()=>(
            <>
                <div className="detyledCase ">
                <div className="container pt-5">
                    <div className="mb-5" style={{overflow: 'hidden'}}>
                        <h6 className="animate__animated animate__fadeInDown">{langeText.customerHeading}</h6>
                        <a href="https://new.amonatbonk.tj/tj/" target="_blanck" style={{color: "#139D4F"}}>www.amonatbonk.tj</a> 
                        <p className="col-md-7 px-0 animate__animated animate__fadeInDown " >{langeText.customerTexts}</p>
                        
                    </div>
                    
                </div>
                <div className="imageWrapper mt-5 animate__animated animate__slideInUp ">
                    <img src="/images/cases/amb/amb_1.png" className="img-fluid w-100" />
                </div>
                <div className="container pt-5" style={{overflow: 'hidden'}}>
                    <div className="my-4 col-md-10 ">
                        <h6 className="animate__animated animate__fadeInDown wow" data-wow-duration="1s">{langeText.tasksHeading}</h6>
                        <p className="col-md-8 px-0 animate__animated animate__fadeInDown wow" data-wow-duration="1.2s">{langeText.tasksTexts}</p>
                    </div>
                </div>
                <div className="imageWrapper mt-5 animate__animated animate__slideInUp wow" data-wow-offset="50" data-wow-duration="1.2s">
                    <img src="/images/cases/amb/amb_2.png" className="img-fluid w-100" />
                </div>
                <div className="container py-5" style={{overflow: 'hidden'}}>
                    <div className="my-4 ">
                        <h6 className="animate__animated animate__fadeInDown wow" data-wow-duration="1s">{langeText.implementionHeading}</h6>
                        {
                            langeText.implementionTexts.map((el, idx) => <p key={idx} className="col-md-8 px-0 animate__animated animate__fadeInDown wow" data-wow-duration="1.2s">{el}</p>)
                        }
                    </div>
                </div>
                <div className="imageWrapper animate__animated animate__slideInUp wow" data-wow-offset="50" data-wow-duration="1.2s">
                    <img src="/images/cases/amb/amb_3.png" className="img-fluid w-100" />
                </div>
                {/* <div className="container pt-5" style={{overflow: 'hidden'}}>
                    <div className="my-4 col-md-10 ">
                    <h6 className="animate__animated animate__fadeInDown wow">{langeText.customerHeading}</h6>
                        <p className="col-md-7 px-0 animate__animated animate__fadeInDown wow" >{langeText.customerTexts}</p>
                    </div>
                </div> */}
                <div className="imageWrapper mt-5 animate__animated animate__slideInUp wow" data-wow-offset="50" data-wow-duration="1.2s">
                    <img src="/images/cases/amb/amb_4.png" className="img-fluid w-100" />
                </div>
                {/* <div className="container pt-5" style={{overflow: 'hidden'}}>
                    <div className="my-4 col-md-10 ">
                    <h6 className="animate__animated animate__fadeInDown wow">{langeText.customerHeading}</h6>
                        <p className="col-md-7 px-0 animate__animated animate__fadeInDown wow" >{langeText.customerTexts}</p>
                    </div>
                </div> */}
                <div className="imageWrapper mt-5 animate__animated animate__slideInUp wow" data-wow-offset="50" data-wow-duration="1.2s">
                    <img src="/images/cases/amb/amb_5.png" className="img-fluid w-100" />
                </div>
                {/* <div className="container pt-5" style={{overflow: 'hidden'}}>
                    <div className="my-4 col-md-10 ">
                    <h6 className="animate__animated animate__fadeInDown wow">{langeText.customerHeading}</h6>
                        <p className="col-md-7 px-0 animate__animated animate__fadeInDown wow" >{langeText.customerTexts}</p>
                    </div>
                </div> */}
                <div className="imageWrapper mt-5 animate__animated animate__slideInUp wow" data-wow-offset="50" data-wow-duration="1.2s">
                    <img src="/images/cases/amb/amb_6.png" className="img-fluid w-100" />
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
