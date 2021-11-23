import {useEffect, useState} from 'react';
import Head from '../components/head/Head';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import {connect} from 'react-redux';
import Menu from '../components/menu//Menu';
import AdminContentSpinner from '../components/spinner/adminContentSpinner'
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import DetiledFeedBack from '../components/detiledFeedback/DetiledFeedBack';
function Detiled(props) {
    const {initialLange, mainClass, headerClass, feetbackProp, colorHeaderNavBool} = props;
    const [loading, setLoading] = useState(true);
    const {sideBar} = props;
    const [headerFixed, setHeaderFixed] = useState('')
    useEffect(()=>{
        initialLange(localStorage.getItem('lange'))
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        }, 1500)
    },[])
    const Content = props.content;

    const [cont, setCont] = useState(true)
    useEffect(() => {
        document.addEventListener('wheel', e =>{
            if(window.pageYOffset === 0 && e.deltaY < 0){
                setCont(true) 
                document.body.classList.add('scrollbarNone')
                
            }
        })
       
    }, [])
    useEffect(()=>{
        window.addEventListener('scroll', (e)=>{
            if(window.pageYOffset > 100){
                setHeaderFixed('header_fixed2')
            }else{
                setHeaderFixed('')
            }
        })
    }, [])
    function wheelMain(e) {
        if(e.deltaY > 0 ) {
            setCont(false)
            setTimeout(()=> document.body.classList.remove('scrollbarNone'), 500)
        }
    }
    let event = null
    function handleTouchStart(e){
        event = e
    }
    function handleTouchEvent(e){
        if(event){
            const y = e.touches[0].pageY - event.touches[0].pageY;
            if(y < 0){
                setCont(false)
            }
        }
        
    }
    function handleTouchEvent2(e){
        console.log(window.pageYOffset === 0)
        if(window.pageYOffset === 0){
            if(event){
                const y = e.touches[0].pageY - event.touches[0].pageY;
                if(y > 0){
                    setCont(true)
                }
            }
        }
        
    }
    const darkAttr = colorHeaderNavBool ? true: false
    return (
        <>
            <Head />
            {
                loading ? <AdminContentSpinner />: null
            }
            <>
                <Menu />
                <div onTouchStart={handleTouchStart} onTouchMove={handleTouchEvent} onWheel={wheelMain} className={`${sideBar ? 'borderIn-20': 'borderOut-20'} ${ !cont ? 'detileBanIn': 'detileBanOut'}`} style={{height: '100vh', position: 'relative', overflow: 'hidden',}}>
                    <Header className="header_fixed" darkAttr={darkAttr}/>
                    <div className="h-100 detiledInfoWrapper">
                        <div className="imagebgDetiled" style={{backgroundImage: `url(${ props.bgImage || 'https://vintage.com.ua/uploads/0/1264-glavnaa.png'})`}}></div>
                        <div className="heading  animate__animated animate__fadeIn wow" data-wow-duration="1s" data-wow-delay="2s">
                            <h1>{props.siteName}</h1>
                            <p>{props.slogn}</p>
                        </div>
                        <div className="line_bootm">
                            <button onClick={e => setCont(false)} className="btn">
                                <span></span>
                            </button>
                        </div>
                        <div className="lang_wrap">
                            <button onClick={props.ruLange} className="btn">Rus</button>
                            <button onClick={props.enLange} className="btn">Eng</button>
                        </div>
                    </div>
                    <div className="container detyled_line_wrapper">
                        <div className="col-md-4 col-2 detyled_line"></div>
                        <div className="col-md-4 col-8 detyled_line"></div>
                        <div className="col-md-4 col-2 detyled_line"></div>
                    </div>
                </div>
                <div onTouchStart={handleTouchStart} onTouchMove={handleTouchEvent2}  className={cont ? 'contDetileFadeIn scrollbarNone': 'contDetileFadeOut scrollbarNone'}>
                    <div className={`d-flex justify-content-between h-100 align-items-between flex-column ${sideBar ? 'borderIn-20': 'borderOut-20'}`} style={{minHeight: '100vh', }}>
                        <Header darkAttr={true} className={`${headerClass} ${headerFixed}`} />
                        <main className={`d-block p-20 ${mainClass}`}>
                            {
                                !loading ?<Content />: null
                            }
                        </main>
                        <DetiledFeedBack feetbackProp={feetbackProp}/>
                        <Footer/>
                    </div>
                </div>
            </>
                
            
        </>
    )
}
const mapStateToProps = (state)=>{
    const {sideBar} = state.mainReducer
    return{
        sideBar
    }
}
const mapDispatchToProps = (dispatch) => {
    const {initialLange, enLange, ruLange} = bindActionCreators(actions, dispatch);
    return{
        initialLange: payload => initialLange(payload),
        ruLange: ruLange,
        enLange: enLange
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detiled)
