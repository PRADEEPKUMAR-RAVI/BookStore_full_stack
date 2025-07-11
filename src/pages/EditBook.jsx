import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { updateBook } from '../services/BooksApi'
import {fetchBook} from '../services/BooksApi'
import { fetchAuthors } from '../services/AuthorApi'
import { fetchCategories } from '../services/CategoryApi'

export const EditBook = () => {
    const{BookId} = useParams()
    const navigate = useNavigate()
    const [form, setForm] = useState({
        name: "",
        description: "",
        author_id: "",
        category_ids: [],
        publication_date: "",
        page_count: "",
        language: "",
        is_published: false,
    });

    const [authors, setAuthors] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const loadAll = async () => {
            try {
            const book = await fetchBook(BookId);
            const authorsData = await fetchAuthors();
            const categoriesData = await fetchCategories();

            setAuthors(authorsData);
            setCategories(categoriesData);

            setForm({
                name: book.name || "",
                description: book.description || "",
                author_id: book.author?.id || "",
                category_ids: book.categories?.map(c => c.id) || [],
                publication_date: book.publication_date || "",
                page_count: book.page_count || "",
                language: book.language || "",
                is_published: book.is_published || false,
            });
            } catch (err) {
            console.error("Error loading book or options", err);
            }
        };

        loadAll();
        }, [BookId]);

    function handleChange(e){
        setForm((f)=>({...f,[e.target.name]:e.target.value}))
    }

    function handleSubmit(e){
        return ""
    }

    // function handleMultiple(e){
    //     seleted = 
    // }


    if(!form) return <p>Nothing to load....</p>
  return (
    <div className='Edit-form'>
        <h2>Edit Form</h2>
        <form action="" onSubmit={handleSubmit}>
            <label>Book name :</label>
            <input name="name" value={form.name} onChange={handleChange}  required /> <br />
            <label >Description : </label>
            <textarea  name='description' value={form.description} onChange={handleChange} />
            <label>Author : </label>
            <select name="author_id" value={form.author_id} onChange={handleChange}>
                <option value="">Select Author</option>
                {authors.map((author)=>(
                    <option key={author.id} value={author.id}>{author.name}</option>
                ))}
            </select>

            <select multiple value={form.category_ids} onChange={handleMultiple}>
                {categories.map((cat)=>(
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
            </select>
            

        </form>

    </div>
  )
}
