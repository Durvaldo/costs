import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

import styles from './ProjectForm.module.css'

function ProjectForm({ btnText }) {

    return (
        <form className={styles.form}>
            <div>
                <Input type="text" text="Nome do Projeto" name="name" placeholder="Insira o nome do projeto" />
            </div>
            <div>
                <Input  type="number" text="Orçamento do projeto" name="budget" placeholder="Insira o orçamento total" />
            </div>
            <div>
                <Select text="Categoria do Projeto" name="category_id" />
            </div>
            <div>
                <SubmitButton text={btnText} />
            </div>
        </form>
    )
    
}

export default ProjectForm