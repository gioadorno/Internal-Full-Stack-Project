import React, { useEffect } from 'react'
import Body from './Components/Body/Body';
import { useDispatch, useSelector } from 'react-redux';
import { getProps } from '../../../actions/properties';

const AcqTable = () => {
    const dispatch = useDispatch();

    const props = useSelector((state) => state.posts);
    const test = useSelector((state) => state);
    console.log(props);
    console.log(test)
    
    useEffect(() => {
        dispatch(getProps());
    },[dispatch])

    return (
        <div>
            <Body />
        </div>
    )
}

export default AcqTable
