import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import Title from './Title/Title';
import { BoxApp } from './App.styled';
import ContactList from './ContactList/ContactList';
import NotContacts from './NotContacts/NotContacts';

export const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState([
    { id: '4564', name: 'Vasya Pupkin', numberTel: '098564372' },
    { id: 'id-1', name: 'Rosie Simpson', numberTel: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', numberTel: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', numberTel: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', numberTel: '227-91-26' },
  ]);

  //генерируем необходимые ключи
  const idGenerator = () => nanoid();

  // добавляет новые контакты
  const formSubmitApp = data => {
    if (
      contacts.find(
        el => el.name.toLowerCase().trim() === data.name.toLowerCase().trim()
      )
    ) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    setContacts(state => [
      ...state,
      {
        id: idGenerator(),
        name: data.name,
        numberTel: data.number,
      },
    ]);
  };

  // это обновляет стейт новым массивом
  const deleteContact = id => {
    setContacts(state => state.filter(el => el.id !== id));
  };

  // тут я работаю с жизнеными циклами и проверяю локалку при рендере страницы
  useEffect(() => {
    const lCont = localStorage.getItem('contacts');
    if (lCont) {
      setContacts(JSON.parse(lCont));
    }
  }, []); //пустой массив зависимостей работает только при 1й загрузке

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]); // функция реагирует только на изменения в зависимой переменной

  // метод просто обновляет состояние при вводе текста
  const onSaveFinde = event => {
    setFilter(event.currentTarget.value.trim());
  };

  //при изменении стейта метод находит контакты подходящие поиску
  const findeByName = () => {
    return contacts.filter(
      elem =>
        elem.name.slice(0, filter.length).toLowerCase() === filter.toLowerCase()
    );
  };

  return (
    <BoxApp>
      <Title text={'Phonebook'} />
      <Form chengeSabmit={formSubmitApp} />
      <Title text={'Contacts'} />

      {contacts.length < 1 ? (
        <NotContacts text={'The contact list is currently empty'} />
      ) : (
        <ContactList
          filter={filter}
          onFinde={onSaveFinde}
          deleteEl={deleteContact}
          contacts={findeByName}
        />
      )}
    </BoxApp>
  );
};
