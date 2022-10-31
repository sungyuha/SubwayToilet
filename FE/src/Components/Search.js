import React, { useState, useRef } from "react";
import './Search.scss';
//import {ReactComponent as SubwayLine2} from './Seoul_subway_linemap_ko.svg';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import line2icon from "../images/Line_2.png";

function Search({data, ...props}) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const [isSelected, setIsSelected] = useState(false);
    const ref = useRef();
    
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setIsSelected(false);
        
        setWordEntered(searchWord);
        // console.log( data.DATA );
        const newFilter = data.DATA.filter((value) => {
            return value.station_nm.includes(searchWord);
        });

        if (searchWord === "") {
        setFilteredData([]);
        } else {
        setFilteredData(newFilter);
        }
    
        
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
        setIsSelected(false);
    };
    const selectSearchedData = (v) => {
        if(!isSelected) {setWordEntered(v.station_nm);}
        setIsSelected(true);
        ref.current.focus();
        const targetStation = document.getElementById(parseInt(v.station_cd));
        props.SetIsTooltipOpen(true);
        props.setSelectStation(parseInt(v.station_cd));
        // props.SetTooltipTitle(v.station_nm);
        // props.SetTooltipX(targetStation.firstChild.getBoundingClientRect().x + (targetStation.getBoundingClientRect().width / 2));
        // props.SetTooltipY(targetStation.firstChild.getBoundingClientRect().y);

    }

    return (
        <div className="search">
            <div className="searchInputs">
                <input
                type="text"
                placeholder="역명을 검색하세요."
                value={wordEntered}
                onChange={handleFilter}
                ref={ref}
                />
                <div className="searchIcon">
                {filteredData.length === 0 ? (
                    <SearchIcon />
                ) : (
                    <CloseIcon id="clearBtn" onClick={clearInput} />
                )}
                </div>
            </div>
            {(filteredData.length !== 0 && !isSelected) && (
                <div className="dataResult">
                {filteredData.slice(0, 15).map((value, key) => {
                    return (
                    <a className="dataItem" key={value.station_cd} href={value.link} onClick={() => {selectSearchedData(value);} }>
                        <p><img className='line2icon' src={line2icon} width='20px' height='20px' alt='2호선'/> {value.station_nm} </p>
                    </a>
                    );
                })}
                </div>
            )}
        </div>
    );
}

export default Search;