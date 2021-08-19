import React from 'react'
import { connect } from 'react-redux'
import {Main} from '../layouts/index'
import A from '../components/a/A'
import {useRouter} from 'next/router';
import Lange from '../components/utils/language';
const Styles = ()=> (
    <style jsx="true">
        {`
            #cases .cases-wrapper{
                grid-template-columns: 1fr 1fr;
                grid-template-rows: repeat(8, 1fr);
                grid-template-areas:
                "ar-1 ar-2"
                "ar-3 ar-2"
                "ar-4 ar-4"
                "ar-5 ar-6"
                "ar-5 ar-7"
                "ar-8 ar-8"
                "ar-9 ar-10"
                "ar-11 ar-10";
            }
            #cases .cases-wrapper .cases-item:nth-child(1){grid-area: ar-1}
            #cases .cases-wrapper .cases-item:nth-child(2){grid-area: ar-2}
            #cases .cases-wrapper .cases-item:nth-child(3){grid-area: ar-3}
            #cases .cases-wrapper .cases-item:nth-child(4){grid-area: ar-4}
            #cases .cases-wrapper .cases-item:nth-child(5){grid-area: ar-5}
            #cases .cases-wrapper .cases-item:nth-child(6){grid-area: ar-6}
            #cases .cases-wrapper .cases-item:nth-child(7){grid-area: ar-7}
            #cases .cases-wrapper .cases-item:nth-child(8){grid-area: ar-8}
            #cases .cases-wrapper .cases-item:nth-child(9){grid-area: ar-9}
            #cases .cases-wrapper .cases-item:nth-child(10){grid-area: ar-10}
            #cases .cases-wrapper .cases-item:nth-child(11){grid-area: ar-11}
            
            @media only screen and (max-width: 768px ){
                #cases .cases-wrapper{
                    grid-template-rows: repeat(6,1fr);
                    grid-template-areas:
                    "ar-1 ar-2"
                    "ar-3 ar-4"
                    "ar-5 ar-6"
                    "ar-7 ar-8"
                    "ar-9 ar-10"
                    "ar-11 ar-";
                }
            }
            @media only screen and (max-width: 576px ){
                #cases .cases-wrapper{
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;
                    grid-template-areas:
                    "ar-1"
                    "ar-2"
                    "ar-3"
                    "ar-4"
                    "ar-5"
                    "ar-6"
                    "ar-7"
                    "ar-8"
                    "ar-9"
                    "ar-10"
                    "ar-11";
                }
            }
        `}
    </style>
)

export const cases = (props) => {
    const {lange} = props;
    const {pathname} = useRouter();
    const [langeArr] = Lange(lange);
    const cases = langeArr.cases.casesArr.sort((a,b) => (a.id < b.id) ? 1 : ((b.id < a.id) ? -1 : 0))
    return <Main mainClass="pt-0" content={()=>(
        <>
            <Styles/>
            <div className="p-20" id="cases">
                <div className="container-fluid">
                    <h2 className="heading">{langeArr.cases.headingText}</h2>
                    <div className="cases-wrapper mt-5">
                        {
                            cases.map(item => (
                                <A key={item.id} href={pathname+item.pathName} className="cases-item animate__animated animate__fadeInUp wow" style={{background: ` url(${item.bgImage}) no-repeat center / cover`}} data-wow-duration="2s">
                                    <div className="portfolio-main">
                                        <div>
                                            <div className="text-wrapper_profile">
                                                <h3 style={{color: item.heading.color}}>{item.heading.text}</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portfolio-description" style={{background: item.description.bg}}>
                                        <h3>{item.description.headingTextH3}</h3>
                                        <h6>{item.description.headingTextH6}</h6>
                                        <p>{item.description.headingTextHP}</p>
                                    </div>
                                </A>
                            ))
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

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(cases)
