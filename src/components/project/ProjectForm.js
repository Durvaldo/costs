import { useState , useEffect } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

import styles from './ProjectForm.module.css'

function ProjectForm({ handleSubmit, btnText ,projectData }) {
    const [categories, setCategories] = useState([])
    const [project, setProject] =useState(projectData || {})

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((err) => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange() {
        setProject({ ...project, [e.ta]})
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <div>
                <Input type="text" text="Nome do Projeto" name="name" placeholder="Insira o nome do projeto" />
            </div>
            <div>
                <Input  type="number" text="Orçamento do projeto" name="budget" placeholder="Insira o orçamento total" />
            </div>
            <div>
                <Select text="Categoria do Projeto" name="category_id" options={categories}/>
            </div>
            <div>
                <SubmitButton text={btnText} />
            </div>
        </form>
    )
    
}

export default ProjectForm