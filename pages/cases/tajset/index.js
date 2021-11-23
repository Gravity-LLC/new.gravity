import React from 'react';
import { connect } from 'react-redux';
import {Detiled} from '../../../layouts/index';
import Lange from './lange';

export const index = (props) => {
    const [langeText] = Lange(props.lange);
    return <Detiled 
        mainClass="p-0"
        feetbackProp={langeText.feetBack}
        slogn=""
        colorHeaderNavBool={true}
        bgImage="/images/cases/tajset/tajset_bg.png"
        content={()=>(
            <>
                <div className="detyledCase ">
                <div className="container pt-5" style={{overflow: 'hidden'}}>
                    <div className="mb-4 ">
                        <h6 className="animate__animated animate__fadeInDown" >{langeText.targetHeading}</h6>
                        {
                            langeText.targetTexts.map((item, idx) => <p key={idx} className="col-md-7 px-0 animate__animated animate__fadeInDown ">{item}</p>)
                        }
                    </div>
                    
                </div>
                <div className="animate__animated animate__fadeIn wow" data-wow-duration="1.2s">
                    <img src="/images/cases/tajset/tajset_1.png" className="img-fluid w-100"/>
                </div>
                <div className="container pt-5" style={{overflow: 'hidden'}}>
                    <div className="my-4 col-md-10 " >
                        <h6 className="animate__animated animate__fadeInDown wow" data-wow-duration="1s">{langeText.tasksHeading}</h6>
                        {
                            langeText.tasksTexts.map((el, idx) => <p  key={idx} data-wow-duration="1.4s" className="col-md-8 px-0 animate__animated animate__fadeInDown wow">{el}</p>)
                        }
                    </div>
                </div>
                <div className="imageWrapper mt-4 animate__animated animate__slideInUp wow" data-wow-offset="50" data-wow-duration="1.2s">
                    <img src="/images/cases/tajset/tajset_2.png" className="img-fluid w-100"/>
                </div>
                <div className="container pt-4" style={{overflow: 'hidden'}}>
                    <div className="my-4 col-md-10 " >
                        <h6 className="animate__animated animate__fadeInDown wow" data-wow-duration="1s">{langeText.tasksHeading}</h6>
                        {
                            langeText.tasksTexts.map((el, idx) => <p  key={idx} data-wow-duration="1.4s" className="col-md-8 px-0 animate__animated animate__fadeInDown wow">{el}</p>)
                        }
                    </div>
                </div>
                <div className="imageWrapper animate__animated animate__slideInUp wow" data-wow-offset="50" data-wow-duration="1.2s">
                    <img src="/images/cases/tajset/tajset_3.png" className="img-fluid w-100"/>
                </div>
                <div className="container pt-4" style={{overflow: 'hidden'}}>
                    <div className="my-4 col-md-10 " >
                        <h6 className="animate__animated animate__fadeInDown wow" data-wow-duration="1s">{langeText.tasksHeading}</h6>
                        {
                            langeText.tasksTexts.map((el, idx) => <p  key={idx} data-wow-duration="1.4s" className="col-md-8 px-0 animate__animated animate__fadeInDown wow">{el}</p>)
                        }
                    </div>
                </div>
                <div className="imageWrapper animate__animated animate__slideInUp wow" data-wow-offset="50" data-wow-duration="1.2s">
                    <img src="/images/cases/tajset/tajset_4.png" className="img-fluid w-100"/>
                </div>
                <div className="container py-4" style={{overflow: 'hidden'}}>
                    <div className="py-4 " >
                        <p className="col-md-7 px-0 mt-4 animate__animated animate__fadeInDown wow" data-wow-duration="1.2s">{langeText.developmentTehn}</p>
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
