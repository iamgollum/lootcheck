import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';

describe('App', () => {
    const app = shallow(<App />);
    //console.log(app.debug())

    it('renders properly', () => {
        expect(app).toMatchSnapshot()
    });

    it('contains a connected wallet component', () => {
        expect(app.find('Connect(Wallet)').exists()).toBe(true);
    });

    it('contains a connected loot component', () => {
        expect(app.find('Connect(Loot)').exists()).toBe(true);
    });

    it('contains a link to the coindesk price page', () => {
        expect(app.find('a').props().href).toBe('https://www.coindesk.com/price');
    });
});