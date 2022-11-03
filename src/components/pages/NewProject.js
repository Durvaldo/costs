import { useNavigate } from 'react-router-dom'

import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'

function NewProject() {

    const history = useNavigate()

    function createPost(project) {

        //inicialize cost and services
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {console.log(data)}) //redirect
        .catch((err) => console.log(err))

    }

    return (
        <section className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto pra depois adcionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </section>
    )
    
}

export default NewProject