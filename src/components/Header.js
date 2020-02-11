import React  from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
// import styled from '@emotion/styled';

// const Link = styled.nav`
//    background-color: orange;
// `;
const Header = ({titulo}) => {
    return (  
        <nav className="nav-wrapper light-blue darken-5">
            <a href="#!" className={`${styles.a} brand-logo center`}>{titulo}</a>
        </nav>
    );
}

Header.propTypes = {
    titulo : PropTypes.string.isRequired
}
export default Header;