import * as React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Masthead } from './Masthead';
import { describe, it } from 'mocha';

describe('<Masthead />', () => {
    it('properly passes all the params, render Masthead', () => {
        const wrapper = shallow(<Masthead
            branding='brand'
            search={{ label: 'search', onSubmit: () => { }, value: '', onChange: () => { }, onExpand: () => { } }}
            more={{
                title: 'More',
                onClick: () => { },
                selected: false
            }}
            toolbarItems={[{
                label: 'label',
                icon: 'icon icon-help',
                onClick: () => { },
                selected: false
            }]}
            user={<div></div>}
            logo={<img />}
        />);

        // Render the masthead
        expect(wrapper.html()).to.contains('masthead');
        expect(wrapper.html()).to.contains('masthead-logo');
        expect(wrapper.html()).to.contains('masthead-branding');
        expect(wrapper.html()).to.contains('masthead-toolbar-btn-container');
        expect(wrapper.html()).to.contains('search-button');
        expect(wrapper.html()).to.contains('user-menu-item');
    });

    it('properly passes all the params and no user, render Masthead without user button', () => {
        const wrapper = shallow(<Masthead
            branding='brand'
            search={{ label: 'search', onSubmit: () => { }, value: '', onChange: () => { }, onExpand: () => { } }}
            more={{
                title: 'More',
                onClick: () => { },
                selected: false
            }}
            toolbarItems={[{
                label: 'label',
                icon: 'icon icon-help',
                onClick: () => { },
                selected: false
            }]}
            
        />);

        // Render the masthead
        expect(wrapper.html()).to.contains('masthead');
        expect(wrapper.html()).to.contains('masthead-branding');
        expect(wrapper.html()).to.contains('masthead-toolbar-btn-container');
        expect(wrapper.html()).to.contains('search-button');
        expect(wrapper.html()).not.to.contains('user-menu-item');
    });

    it('properly passes all the params and no search, render Masthead without search', () => {
        const wrapper = shallow(<Masthead
            branding='brand'
            more={{
                title: 'More',
                onClick: () => { },
                selected: false
            }}
            toolbarItems={[{
                label: 'label',
                icon: 'icon icon-help',
                onClick: () => { },
                selected: false
            }]}
            user={<div></div>}
        />);

        // Render the masthead
        expect(wrapper.html()).to.contains('masthead');
        expect(wrapper.html()).to.contains('masthead-branding');
        expect(wrapper.html()).to.contains('masthead-toolbar-btn-container');
        expect(wrapper.html()).not.to.contains('search-button');
        expect(wrapper.html()).to.contains('user-menu-item');
    });

    it('properly passes all the params and no toolbar, render Masthead without toolbar', () => {
        const wrapper = shallow(<Masthead
            branding='brand'
            search={{ label: 'search', onSubmit: () => { }, value: '', onChange: () => { }, onExpand: () => { } }}
            more={{
                title: 'More',
                onClick: () => { },
                selected: false
            }}
            user={<div></div>}
        />);

        // Render the masthead
        expect(wrapper.html()).to.contains('masthead');
        expect(wrapper.html()).to.contains('masthead-branding');
        expect(wrapper.html()).not.to.contains('masthead-toolbar-btn-container');
        expect(wrapper.html()).to.contains('search-button');
        expect(wrapper.html()).to.contains('user-menu-item');
    });
});
