import {useEffect} from 'react';

const SubwayLineMap = () => {
    useEffect(()=>{
        const arr = document.getElementById("name_x5F_ko");
        console.log(arr);   
    },[]);
    
    return(
        <object type="image/svg+xml" data="/Seoul_subway_linemap_ko.svg" width='1000px'>수도권 지하철 노선도</object>
    );
}

export default SubwayLineMap;