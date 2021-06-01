import React from 'react';
import { connect } from 'react-redux';
import {Main} from '../layouts/index';
import Lange from '../components/utils/language';
import axios from 'axios';

export const startproject = (props) => {
    const {lange} = props;
    const [langeArr] = Lange(lange);
    const {startProject} = langeArr;
    let checkeds = [];
    
    function handleSubmit(e) {
        e.preventDefault()
        const nameEl = document.querySelector(' #nameEl').value;
        const phoneEl = document.querySelector('#phoneEl').value;
        console.log(nameEl, phoneEl, checkeds);
        const text = `
            <div style="width: 90%; height: 100%; background: #000000; padding: 10px 20px; margin:0px auto">
                <div>
                    <h2 style="font-size: 26px; color:white">
                        Имя:<span> ${nameEl}</span>
                    </h2>
                </div>
                <div>
                    <h2 style="font-size: 26px; color:white">
                        Телефон:<span> ${phoneEl}</span>
                    </h2>
                </div>
                <div>
                    <h2 style="font-size: 26px; color:white">
                        Тип сайта: ${checkeds.map(item =>`<span> ${item.type}</span>`)}
                    </h2>
                </div>
                <div style="color: white">
                    Ина кадмша акаи Акбар иден
                </div>
            </div>
        `;
        const data = {
            key: 'AjqjezC8Q47yv5LbdOE3UvcCQJ7iUEgCiYCuouHZkLHqivCFW9sjANRFNci3Ms6N',
            subject: 'Заказ',
            text: text,
            email: 'akbarsulaymonov@gmail.com',
        }
        axios.post('https://mail.imruz.com/api/ApiSendMail',data)
            .then(res=>{
                console.log(res)
            })
            .catch(rej => {
                console.log(rej)
            })
        e.target.reset()
    }
    function handleChecked(e){
        const {parentElement, checked} =e.target;
        const val = parentElement.querySelector('label').innerText;
        if(checked === true){
            checkeds.push({
                checked,
                type: val,
            })
        } else {
            checkeds = checkeds.filter(id => id.type !== val );
        }
    }
    return <Main content={()=>(
        <>
            <div className="container pb-5 mb-sm-5 mb-4" id="startProject">
                <h2 className="heading my-sm-5 my-4 animate__animated animate__fadeIn wow" data-wow-duration=".5s" data-wow-delay=".5s">{startProject.heading1}</h2>
                <ul className="animate__animated animate__fadeIn wow" data-wow-duration=".5s" data-wow-delay=".6s">
                    <li>Душанбе, пр. Рудаки 93/1</li>
                    <li><a href="" target="_blanck">+992 111-111-789</a></li>
                    <li><a href="" target="_blanck">info@gravity.tj</a></li>
                </ul>
                <h2 className="heading my-sm-5 my-4 animate__animated animate__fadeIn wow" data-wow-duration=".5s" data-wow-delay=".7s">{startProject.heading2}</h2>
                <form onSubmit={handleSubmit} className="animate__animated animate__fadeIn wow"  data-wow-duration=".5s" data-wow-delay=".8s">
                    <div className="category ">
                        {
                            startProject.categories.map((item, idx)=>(
                                <div key={idx} className="d-inline-block">
                                    <input onChange={handleChecked} type="checkbox" id={`category${idx}`} />
                                    <label htmlFor={`category${idx}`} className="btn " >{item}</label>
                                </div>
                            ))
                        }
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-12 mt-4">
                            <div>
                                <input id="nameEl" type="text" name="name" className="form-control" placeholder={startProject.forms.name} />
                            </div>
                        </div>
                        <div className="col-md-4 col-12 mt-4">
                            <div>
                                <input id="phoneEl" type="number" name="phone" className="form-control" placeholder={startProject.forms.phone} />
                            </div>
                        </div>
                        <div className="col-md-4 col-12 mt-4">
                            <div className="sendMsg h-100">
                                <button className="btn">{startProject.forms.send}</button>
                            </div>
                        </div>
                    </div>
                </form>
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

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(startproject);
