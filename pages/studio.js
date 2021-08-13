import React from 'react';
import { connect } from 'react-redux';
import {Main} from '../layouts/index';
import Lange from '../components/utils/language';

const partnersLogo = [
    'bekhatar.png', 'fsvc.png', 'wsp.png', 'amb.png', 'eshata.png', 'humo.png',
    'BankArvand.png', 'talco.png', 'mfrt.png', 'case.png', 'tajset.png',
];
const tehnologiLogos = [
    'bitrix.png', 'laravel.png', 'go.png', 'node.png', 'mysql.png','psql.png', 
    'react.png', 'vue.png', 'angular.png', 'flutter.png', 'monodb.png', 'oracle.png',
]
export const studio = (props) => {
    const {lange} = props;
    const [langeArr] = Lange(lange);
    const {studio} = langeArr;

    return <Main content={()=>(
        <>
            <div className="container-fluid py-4" id="studio">
                <div className="row position-relative" style={{minHeight: 'calc(100vh - 201px)'}}>
                    <div className="col-lg-8 col-md-7">
                        <div className="h-100 d-flex align-items-center">
                            <h1 className="animate__animated animate__fadeIn wow" datat-wow-duration=".5s" data-wow-delay="1.1s">{studio.aboutUs()}</h1>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5 d-md-flex align-items-center d-none justify-content-center">
                        <div className="d-flex justify-content-center ">
                            <div className="animate__animated animate__fadeInUpBig wow position-relative" style={{zIndex: 4}} data-wow-duration="1s">
                                <svg className="A" width="220" height="350" viewBox="0 0 317 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 336.053L157.638 256.177C160.997 255.938 300.639 327.898 316.235 336.053C315.275 330.296 191.468 70.7606 178.512 42.6962C175.153 35.5002 171.794 28.784 168.675 21.8279C165.795 15.8312 160.517 5.7568 158.837 0C156.198 1.91893 154.998 5.7568 153.079 9.59466L78.6988 167.427C75.0998 175.342 0.719806 331.496 0 336.053Z" fill="#262626"/>
                                    <path d="M128.848 327.648H112.532V428.872H128.848V327.648Z" fill="#262626"/>
                                    <path d="M166.756 310.637H149.481V449.999H166.756V310.637Z" fill="#262626"/>
                                    <path d="M203.227 327.416H186.672V428.64H203.227V327.416Z" fill="#262626"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="line_bootm pt-5">
                        <button className="btn">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 465 465">
                                    <path d="M346.736,44.623C321.494,15.014,283.06,0,232.5,0s-88.994,15.014-114.236,44.623c-25.38,29.771-29.169,64.65-29.169,82.792  v210.171c0,18.142,3.789,53.021,29.169,82.792C143.506,449.987,181.94,465,232.5,465s88.994-15.013,114.236-44.622  c25.38-29.771,29.169-64.65,29.169-82.792V127.415C375.905,109.273,372.116,74.394,346.736,44.623z M232.5,162  c-10.477,0-19-8.523-19-19v-40.716c0-10.477,8.523-19,19-19s19,8.523,19,19V143C251.5,153.477,242.977,162,232.5,162z   M360.905,337.586c0,18.771-6.19,112.414-128.405,112.414s-128.405-93.643-128.405-112.414V127.415  c0-18.379,5.953-108.516,120.905-112.279v53.992c-15.15,3.426-26.5,16.985-26.5,33.156V143c0,16.171,11.35,29.73,26.5,33.156v61.628  c0,4.143,3.357,7.5,7.5,7.5s7.5-3.357,7.5-7.5v-61.628c15.15-3.426,26.5-16.985,26.5-33.156v-40.716  c0-16.171-11.35-29.73-26.5-33.156V15.136c114.953,3.764,120.905,93.9,120.905,112.279V337.586z"/>
                                </svg>
                            </span>
                            
                        </button>
                    </div>
                </div>
                
                <div className="row info_project mt-5">
                    {
                        studio.infoProjects.map(item => (
                            <div className="col-lg-4 col-md-6  col-12 mt-lg-0 mt-4 animate__animated animate__fadeIn wow" data-wow-offset="10" datat-wow-duration=".5s" key={item.num}>
                                <div className="info_project-item">
                                    <div className="num">{item.num !== 65 ? item.num: item.num + '+'}</div>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div>
                    <div className="row achievements mt-4" style={{overflow: 'hidden'}}>
                        <div className="col-lg-6 col-12 animate__fadeInLeft animate__animated wow" data-wow-duration=".5s" data-wow-offset="50">
                            <div className="col-lg-10">
                                <h2>{studio.achievements.heading}</h2>
                                <ul>
                                    {
                                        studio.achievements.lists.map((item,idx) => <li key={idx}>{item}</li> )
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 animate__fadeInRight animate__animated wow" data-wow-duration="1s" data-wow-offset="50">
                            <div className="arch_bg_wrapper">
                                <div className="arch_bg" ></div>    
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" mt-5 pt-lg-5 pt-0 mb-5 partner">
                    <h2 className="animate__animated wow animate__fadeIn" data-wow-duration=".5s">{studio.partners.text}</h2>
                    <div className="partners-wrapper">
                        {
                            partnersLogo.map((item,idx)=>(
                                <div className="partners-item animate__flipInX animate__animated wow" data-wow-duration=".5s" key={idx}>
                                    <img src={`/images/partner-logo/${item}`} className="img-fluid"/>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <hr className="my-5 d-block" />
                <div className="tehnologi">
                    <h2 className="animate__animated wow animate__fadeIn" data-wow-duration=".5s">{studio.technologi.text}</h2>
                    <div className="tehnologi-wrapper">
                        {
                            tehnologiLogos.map((item,idx)=>(
                                <div className="tehnologi-item animate__flipInX animate__animated wow" data-wow-duration=".5s" key={idx}>
                                    <img src={`/images/tehnologi-logo/${item}`} className="img-fluid"/>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* <div className='command_image'></div> */}
            </div>
        </>
    )} />
}
const mapStateToProps = (state) => {
    const {lange} = state.mainReducer;
    return{
        lange,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(studio)
