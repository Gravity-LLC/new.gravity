import React from 'react';
import {ServiceConsumer} from '../service-context/index';

const WithService = () => Wrapped =>{
	return props => {
		return (
			<ServiceConsumer>
				{
					(service)=>{
						return <Wrapped {...props} service={service} />
					}
				}
			</ServiceConsumer>
		)
	}
};
export default WithService;