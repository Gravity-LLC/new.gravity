import {useEffect, useState} from 'react';
import Head from '../components/head/Head';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import {connect} from 'react-redux';
import Menu from '../components/menu//Menu';
import AdminContentSpinner from '../components/spinner/adminContentSpinner'
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';

const imageArr = [
    '/images/bg/menu.png',
    '/images/cases/astore_1.jpg',
    '/images/cases/astore_2.jpg',
    '/images/cases/eurodent_1.jpg',
    '/images/cases/eurodent_2.jpg',
    '/images/cases/eurodent_3.jpg',
    '/images/cases/eurodent_4.jpg',
    '/images/cases/eurodent_5.jpg',
    '/images/cases/humo_1.png',
    '/images/cases/humo_2.png',
    '/images/cases/humo_3.png',
    '/images/cases/humo_4.png',
    '/images/cases/kaynak_1.jpg',
    '/images/cases/kaynak_2.jpg',
    '/images/cases/masaic_1.jpg',
    '/images/cases/masaic_2.png',
    '/images/cases/masaic_3.png',
    '/images/cases/masaic_4.png',
    '/images/cases/masaic_5.png',
    '/images/cases/masaic_6.png',
    '/images/cases/nextview_1.jpg',
    '/images/cases/nextview_2.jpg',
    '/images/cases/pokupka_1.jpg',
    '/images/cases/pokupka_2.png',
    '/images/cases/pokupka_3.jpg',
    '/images/cases/sb_1.png',
    '/images/cases/sb_2.png',
    '/images/cases/sb_3.png',
    '/images/cases/sb_4.png',
]

function Main(props) {
    const {initialLange, mainClass, headerClass} = props;
    const [loading, setLoading] = useState(true);
    const [headerFixed, setHeaderFixed] = useState('')
    const {sideBar} = props;
    useEffect(()=>{
        initialLange(localStorage.getItem('lange'))
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        }, 1500)
    },[])
    useEffect(()=>{
        window.addEventListener('scroll', (e)=>{
            if(window.pageYOffset > 100){
                setHeaderFixed('header_fixed2')
            }else{
                setHeaderFixed('')
            }
        })
    }, [])
    
    const Content = props.content
    return (
        <>
            <Head />
            {
                loading ? <AdminContentSpinner />: null
            }
            <>
                <Menu /> 
                <div className={`d-flex justify-content-between h-100 align-items-between flex-column ${sideBar ? 'borderIn-20': 'borderOut-20'}`} style={{minHeight: '100vh', }}>
                    <Header darkAttr={true} className={`${headerClass} ${headerFixed}`} />
                    <main className={`d-block p-20 ${mainClass}`}>
                        {
                            !loading ?<Content />: null
                        }
                        
                    </main>
                    <Footer/>
                </div>
                <div style={{width: '0px', height: '0px', overflow: 'hidden'}}>
                    {
                        imageArr.map((item, idx) => <img src={item} key={idx} alt="" />)
                    }
                </div>
            </>
                
            
        </>
    )
}
const mapStateToProps = (state)=>{
    const {sideBar} = state.mainReducer
    return{
        sideBar,
    }
}
const mapDispatchToProps = (dispatch) => {
    const {initialLange} = bindActionCreators(actions, dispatch);
    return{
        initialLange: payload => initialLange(payload)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)
