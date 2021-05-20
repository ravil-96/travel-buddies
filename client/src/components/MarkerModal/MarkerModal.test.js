import { screen } from '@testing-library/react';
import MarkerModal from './index';

describe('App', () => {
    beforeEach(() => {
        render(<MarkerModal />);
    });

    test('has modal title New Marker', () => {
        const title = screen.getByRole('title')
        expect(title.textContent).toContain("New Marker")
    })
})