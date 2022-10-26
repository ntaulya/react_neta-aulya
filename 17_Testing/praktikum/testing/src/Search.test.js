import React from "react";
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Search from "./Search";
import { act } from "react-dom/test-utils";

jest.mock('axios');

describe('Search', () => {
    test('fetches stories from an API and display them', async ()=> {
        const stories = [
            { objectID:'1', title:'Hello' },
            { objectID:'2', title:'React' },
        ];

    axios.get.mockImplementationOnce(()=>
        Promise.resolve({ data: { hits: stories } })
    );

    render(<Search />)

    await act(async () => {
        await userEvent.click(screen.getByRole('button'));
    })

    const items = await screen.findAllByRole('listitem');

    expect(items).toHaveLenght(2);
    });
});