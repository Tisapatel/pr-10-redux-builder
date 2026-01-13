import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import apiIntance from "../../api/apiIntance";


export const createUser = createAsyncThunk('users/createUser',async(user, {rejectWithValue})=>{
    try {
        const response = await apiIntance.post('/users', user);
        console.log(response);
        return response.data;    
    } catch (error) {
        return rejectWithValue({error: error.message});
    }
})

export const deleteUser = createAsyncThunk('users/deleteUser', async(id, {rejectWithValue})=>{
    try {
         await apiIntance.delete(`/users/${id}`)
        
        return id;
    } catch (error) {
        return rejectWithValue({error: error.message});
    }
})

export const getAllUsers = createAsyncThunk('users/getAllUsers', async(_,{rejectWithValue})=>{
    try {
        let response = await apiIntance.get('/users')
        return response.data
        
    } catch (error) {
        return rejectWithValue({error: error.message});
    }
})

export const updateUser = createAsyncThunk('users/updateUser', async(user,{rejectWithValue})=>{
    try {
        await apiIntance.patch(`/users/${user.id}`, user)
        return user;
    } catch (error) {
        return rejectWithValue({error: error.message});
    }
})

const userSlice = createSlice({
    name : 'users',
    initialState : {
        users : [],
        editData : {}
    },
    reducers : {
        editUser : (state,action)=>{
            state.editData = state.users.find(user => user.id == action.payload)
        }
    },
    extraReducers : function(builder){
        builder.addCase(createUser.fulfilled,(state,action)=>{
            state.users.push(action.payload);
            console.log(action.payload);    
        })

        builder.addCase(deleteUser.fulfilled,(state, action)=>{
            state.users = state.users.filter(user => user.id != action.payload)

        })

        builder.addCase(getAllUsers.fulfilled,(state,action)=>{
            state.users = action.payload;
        })

        builder.addCase(updateUser.fulfilled, (state,action)=>{
            let {id} = action.payload

            state.users = state.users.map((val)=>{
                if(val.id == id){
                    return action.payload
                }
                return val;
            })
            state.editData = {}
        })
    }
    
})

export default userSlice.reducer;
export const {editUser} = userSlice.actions 
