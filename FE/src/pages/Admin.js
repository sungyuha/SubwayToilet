import axios from "axios";
import {useEffect} from 'react';



const Admin = () => {
    const LINES_URL = process.env.REACT_APP_BACK + "admin/lines"
    const updateLines = () => {
        axios({
            method: 'get',
            url: LINES_URL
          })
          .then((res) => {
            console.log(res);
          })
    }
    const GET_URL = process.env.REACT_APP_BACK + "admin"
    useEffect(() => {
      axios({
        method: 'get',
        url: GET_URL,
        headers: {
          'Authorization': localStorage.getItem('access_token'),
        }
      })
      .then((res) => {
        console.log(res);
      })
    }, []);
    return(
        <div style={{marginTop:'105px'}}>
            <button type="button" onClick={updateLines}>노선도 업데이트</button>
        </div>
    );
}
export default Admin;