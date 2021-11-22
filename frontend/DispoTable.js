import React, { useEffect } from 'react'
import Body from './Components/Body/Body';
import { useDispatch, useSelector } from 'react-redux';
import { getDispoProps } from '../../../actions/dispoProps';

const DispoTable = () => {
    const dispatch = useDispatch();

    // const props = useSelector((state) => state.posts);
    // console.log(props);
    
    useEffect(() => {
        dispatch(getDispoProps());
    },[])

    return (
        <div>
            <Body />
        </div>
    )
}

export default DispoTable
