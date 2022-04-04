import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import s from './Form.module.css';
import propTypes from 'prop-types';

export const Form = ({ chengeSabmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // цикл первой загрузки компонента
  useEffect(() => {
    const lwrite = localStorage.getItem('write');
    if (lwrite) {
      const write = JSON.parse(lwrite);
      setName(write.name);
      setNumber(write.number);
    }
  }, []);

  // после обновления стейта сохраним локально вводимые значения
  useEffect(() => {
    localStorage.setItem('write', JSON.stringify({ name, number }));
  }, [name, number]);

  //генерируем необходимые ключи
  const idName = nanoid();
  const idTel = nanoid();

  // универсальный метод для инпутов
  const onCangeInpute = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  //внутрений метод сабмита обрабатывающий событие
  const formSubmit = event => {
    event.preventDefault();
    chengeSabmit({ name, number });
    reset();
  };

  // очистка формы
  const reset = () => {
    setName('');
    setNumber('');
    // тут же нам необходимо очистить локалку чтоб вводимые ранее значения не всплыли вновь
    localStorage.removeItem('write');
  };

  return (
    <form className={s.form} action="" onSubmit={formSubmit}>
      <label className={s.label} htmlFor={idName}>
        enter name
      </label>
      <input
        className={s.input}
        id={idName}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={onCangeInpute}
        value={name}
      />
      <label className={s.label} htmlFor={idTel}>
        enter telephone
      </label>
      <input
        className={s.input}
        id={idTel}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={onCangeInpute}
      />
      <button className={s.sabmitBt} type="submit">
        Save
      </button>
    </form>
  );
};

Form.propTypes = { chengeSabmit: propTypes.func };
