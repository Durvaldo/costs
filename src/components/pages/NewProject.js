import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'

function NewProject() {

    return (
        <section className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto pra depois adcionar os serviços</p>
            <ProjectForm btnText="Criar Projeto"/>
        </section>
    )
    
}

export default NewProject