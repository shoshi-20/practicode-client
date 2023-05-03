import axios from 'axios';
// axios.defaults.baseURL  = 'http://localhost:5107/todoitems'
axios.defaults.baseURL  = 'https://practicode-server.onrender.com/todoitems'
axios.interceptors.response.use(function (response) {
  console.log(response)
  return response;
}, function (error) {
  console.log(error)
  return Promise.reject(error);
});
export default {
  getTasks: async () => {
    const result = await axios.get()    
    return result.data;
  },

  getTasksById: async (id) => {
    const result = await axios.get(`/${id}`)    
    return result.data;
  },

  addTask: async(newTodo)=>{
    const result=await axios.post('',{name:newTodo,isComplete:false,id:0})
    console.log('addTask')
    return result.data;
  },

  setCompleted: async(id, isComplete)=>{
    // const task = await axios.get(`${apiUrl}/todoitems/${id}`)  
    // task.iscomplete=isComplete;
   const result=await axios.put(`/${id}?isComplete=${isComplete}` )
    console.log('setCompleted', {id, isComplete})
    return result.data;
  },

  deleteTask:async(id)=>{
    const result = await axios.delete(`/${id}`)
    console.log('deleteTask')  
    return result.data;
    
  }
};
