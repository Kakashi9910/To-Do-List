import { Box, Divider} from "@mui/material"
import { useEffect, useState } from "react";
import { getAllTasks } from "../service/Api";
import styled from "@emotion/styled";
import Tasks from "./Tasks";

const Container=styled(Box)`
    // border:2px solid black;
    height:60px;
    margin-top:20px;
    `

    const StyleDivider=styled(Divider)`
       margin-left:17px;
       width:90%;
       margin-top:10px;
    `
const AllTask=({setDeleteTask,status})=>{
    const [allTasks,setAllTasks]=useState([]);
    useEffect(()=>{
       const getAllTasksDetails=async()=>{
            let data=await getAllTasks();
            setAllTasks(data);
       }
       getAllTasksDetails();
    },[status])
    return(
        <Container>
            {
                allTasks.map(goal=>(
                    <>
                    <Tasks goal={goal}
                    setDeleteTask={setDeleteTask}/>
                    <StyleDivider />
                    </>
                ))
        
            }
        
      </Container>
        )
}

export default AllTask;