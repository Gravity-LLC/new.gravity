import React from 'react';
import { connect } from 'react-redux';
import {Detiled} from '../../../layouts/index';
import Lange from './lange';

export const index = (props) => {
    const [langeText] = Lange(props.lange);
    return <Detiled 
        mainClass="p-0"
        siteName={langeText.banText}
        slogn=""
        bgImage="/images/cases/kaynak_1.jpg"
        content={()=>(
            <>
                <div className="detyledCase ">
                <div className="container pt-5">
                    <div className="mb-5" style={{overflow: 'hidden'}}>
                        <h6 className="animate__animated animate__fadeInDown" >{langeText.customerHeading}</h6>
                        <p className="col-md-7 px-0 animate__animated animate__fadeInDown" >{langeText.customerTexts}</p>
                    </div>
                    <div className="mb-5" style={{overflow: 'hidden'}}>
                        <h6 className="animate__animated animate__fadeInDown wow" data-wow-duration="1.3s">{langeText.tasksHeading}</h6>
                        {
                            langeText.tasksTexts.map((el, idx) => <p data-wow-duration="1.5s" className="col-md-7 px-0 animate__animated animate__fadeInDown wow" key={idx}>{el}</p>)
                        }
                    </div>
                </div>
                <div className="imageWrapper mt-5 animate__animated animate__slideInUp wow" data-wow-offset="50" data-wow-duration="1s">
                    <img src="/images/cases/kaynak_2.jpg" className="img-fluid w-100" />
                </div>
                <div className="container pt-5">
                    <div className="mb-5" style={{overflow: 'hidden'}}>
                        <h6 className="animate__animated animate__fadeInDown wow" data-wow-duration="1.3s">{langeText.implementionHeading}</h6>
                        {
                            langeText.implementionTexts.map((el, idx) => <p data-wow-duration="1.5s" className="col-md-7 px-0 animate__animated animate__fadeInDown wow" key={idx}>{el}</p>)
                        }
                    </div>
                </div>
                <div className="imageWrapper mt-5 animate__animated animate__slideInUp wow" data-wow-offset="50" data-wow-duration="1s">
                    <img src="/images/cases/kaynak_1.jpg" className="img-fluid w-100" />
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
