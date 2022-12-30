import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/UserContext';
import TaskCard from '../MyTask/TaskCard/TaskCard';

const Home = () => {
    const [tasks, setTasks] = useState([]);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://task-bucket-server.vercel.app/taskType`)
            .then(res => res.json())
            .then(data => setTasks(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <div>
            <div className='grid grid-cols-1 gap-10 mx-16 mt-24'>
                {
                    tasks.map(item => <TaskCard
                        key={item._id}
                        item={item}
                    ></TaskCard>)
                }
            </div >
        </div>
    )

};

export default Home;