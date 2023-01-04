import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {fetchMovies} from '../components/App/App.service';
import Button from '../components/Button/Button';

const MovieEdit = () => {
  const {id} = useParams();

  const [form, setForm] = useState({
    title: '',
    year: '',
  });

  useEffect(() => {
    fetchMovies(`http://localhost:3010/movies/${id}`).then((movie) => {
      setForm(movie);
    });
  }, [id]);

  const onChangeForm = (e) => setForm({...form, [e.target.name]: e.target.value});

  const onSubmitForm = (e) => {
    e.preventDefault();

    console.log(form)
    fetchMovies(`http://localhost:3010/movies/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({...form}),
    }).then(() => console.log('success updated'));
  };

  return (
    <form onSubmit={onSubmitForm}>
      <Input onChange={onChangeForm} value={form.title} name={'title'} />
      <Input onChange={onChangeForm} value={form.year} name={'year'} />
      <Button type={'submit'}>Сохранить</Button>
    </form>
  );
};

const nameField = {
  title: 'Название',
  year: 'Год выпуска',
};

const Input = ({name, value, onChange}) => {
  return (
    <>
      <h5>{nameField[name]}</h5>
      <input name={name} value={value} onChange={onChange} />
    </>
  );
};

export default MovieEdit;
