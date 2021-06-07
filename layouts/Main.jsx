import {useEffect, useState} from 'react';
import Head from '../components/head/Head';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import {connect} from 'react-redux';
import Menu from '../components/menu//Menu';
import AdminContentSpinner from '../components/spinner/adminContentSpinner'
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';


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
            console.log(window.pageYOffset)
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
