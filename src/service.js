import axios from 'axios';
axios.defaults.baseURL  = process.env.REACT_APP_SERVER_API_URL
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
    const result=axios.post('',{name:newTodo,isComplete:false,id:0})
    console.log('addTask')
    return result.data;
  },

  setCompleted: async(id, isComplete)=>{
    // const task = await axios.get(`${apiUrl}/todoitems/${id}`)  
    // task.iscomplete=isComplete;
   const result= axios.put(`/${id}?isComplete=${isComplete}` )
    console.log('setCompleted', {id, isComplete})
    return result.data;
  },

  deleteTask:async(id)=>{
    const result = await axios.delete(`/${id}`)
    console.log('deleteTask')  
    return result.data;
    
  }
};
