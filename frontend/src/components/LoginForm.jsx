import {useState} from 'react';
import axios from 'axios'
export const LoginForm =()=> {
    const [username, setUsername] = useState('');
    const [password,setPassword]= useState('');
    const [error,setError]= useState('');

    const handleSubmit =async (e)=>{
        e.preventDefault();
        const data =  {
            'Project-ID':"01472057-4daa-4240-83b5-55cc3387e02f",'User-Name':username , 'User-Password':password
        };
        // const authObject={'Project-ID':"01472057-4daa-4240-83b5-55cc3387e02f",'User-Name':username , 'User-Password':password}
try {
    var config = {
        method: 'get',
        url: 'https://api.chatengine.io/chats',
        headers: {
            'PRIVATE-KEY': '7533ee0e-7305-4ea3-8b11-534ee0f26518'
        },
        data : data
    };
//await axios.get('https://api.chatengine.io/chats',{ headers:authObject});
axios(config)
.then(function (response) {
	console.log(JSON.stringify(response.data));
})
.catch(function (error) {
	console.log(error);
});
localStorage.setItem('username',username);
localStorage.setItem('password',password);

window.location.reload();

} catch (error) {
    setError('Sorry,Incorrect Credentials!');
}


    }

return(
    <div className="wrapper">
        <div className="">
            <h1 className='chat-app'>
JustChat-2.0
            </h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} className='input' placeholder='Username' required />
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className='input' placeholder='Password' required />
           <div align='center'>
<button type='submit' className='button'>
    <span>Start Chatting !!!</span>
</button>
           </div>
        <h2 className="error"> {error }</h2>
            </form>
        </div>
    </div>
)

}

export default LoginForm ;