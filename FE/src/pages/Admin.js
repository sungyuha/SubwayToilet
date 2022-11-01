import axios from "axios";

const Admin = () => {
    const SERVER_URL = "http://localhost:8000/admin/lines"
    const updateLines = () => {
        axios({
            method: 'get',
            url: SERVER_URL,
            headers: {
              'Authorization': localStorage.getItem('access_token'),
            }
          })
          .then((res) => {
            console.log(res);
          })
    }

    return(
        <div style={{marginTop:'105px'}}>
            <button type="button" onClick={updateLines}>노선도 업데이트</button>
        </div>
    );
}
export default Admin;