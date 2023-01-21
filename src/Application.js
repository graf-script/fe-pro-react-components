import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import NavItem from './NavItem';
import Content from './Content';
import Article from './Article';
import Footer from './Footer';
/*
Нужно создать компонент Header(для шапки), NavItem(для ссылки в шапке, которая принимает два пропса),
Content(Секция main и всё её содержимое), Article(для li в которой карточка статьи) и Footer
Используйте prop-types, map, не забываем про key когда делаем перебор.
*/

const Application = () => {
  return <div className="wrapper">
    <Header logoText="My Logo" />
    <Content />
    <Footer logoText="Logo" />
  </div>;
};

export default Application;
